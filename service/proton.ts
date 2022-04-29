import ConnectWallet, { ProtonWebLink } from '@proton/web-sdk';
import { ChainId, Link, LinkSession } from '@proton/link';
import { RpcInterfaces } from '@proton/js';
import proton from './proton-rpc';
import { MintFee } from './fees';

export interface User {
  acc: string;
  actor: string;
  avatar: string;
  name: any;
  isLightKYCVerified: boolean;
  permission: string;
}

interface TransferOptions {
  sender: string;
  recipient: string;
  asset_id: string;
  memo?: string;
}

interface BurnOptions {
  owner: string;
  asset_id: string;
}

interface CreateNftOptions {
  mintFee: MintFee;
  author: string;
  collection_name?: string;
  schema_name: string;
  schema_format: string[];
  mutable_data?: any;
  max_supply: number;
  initial_mint_amount: number;
}

interface CreateColOptions {
  author: string;
  collection_name?: string;
  collection_description: string;
  collection_display_name: string;
  collection_image?: string;
  collection_market_fee?: string;
  collection_url?: string;
}

interface CreateTemplateAssetsOptions {
  mintFee: MintFee;
  author: string;
  collection_name: string;
  schema_name: string;
  max_supply: number;
  initial_mint_amount: number;
  immutable_data: any;
  mutable_data: any;
}

interface MintAssetsOptions {
  author: string;
  collection_name: string;
  schema_name: string;
  template_id: string;
  mint_amount: number;
  mint_fee: number;
}

interface UpdateCollectionOptions {
  author: string;
  collection_name: string;
  description: string;
  display_name: string;
  image: string;
  market_fee: string;
  url: string;
}

interface SetMarketFeeOptions {
  author: string;
  collection_name: string;
  market_fee: string;
}

interface CreateSaleOptions {
  seller: string;
  asset_id: string;
  price: string;
  currency: string;
  listing_fee: number;
}

interface CreateMultipleSalesOptions
  extends Omit<CreateSaleOptions, 'asset_id'> {
  assetIds: string[];
}

interface PurchaseSaleOptions {
  buyer: string;
  amount: string;
  sale_id: string;
}

interface SaleOptions {
  actor: string;
  sale_id: string;
}

interface CancelMultipleSalesOptions {
  actor: string;
  saleIds: string[];
}

interface DepositWithdrawOptions {
  actor: string;
  amount: string;
}

interface Response {
  success: boolean;
  transactionId?: string;
  error?: string;
}

interface WalletResponse {
  user: User;
  error: string;
}

interface GenerateRamActions {
  author: string;
  mintFee: MintFee;
}

interface Action {
  account: string;
  name: any;
  authorization: Array<{
    actor: string;
    permission: string;
  }>;
  data: unknown;
}

class ProtonSDK {
  appName: string;
  requestAccount: string;
  auth: { actor: string; permission: string } | null;
  link: ProtonWebLink | Link | null | any;
  session: LinkSession | null | any;
  accountData: RpcInterfaces.UserInfo | null;
  chainId: ChainId | null;

  constructor() {
    this.appName = 'sharlabs';
    this.requestAccount = 'sharlabs';
    this.session = null;
    this.auth = null;
    this.link = null;
    this.accountData = null;
    this.chainId = null;
  }

  connect = async ({ restoreSession }): Promise<void> => {
    const { link, session } = await ConnectWallet({
      linkOptions: {
        endpoints: proton.endpoints,
        chainId:
          process.env.NEXT_PUBLIC_NFT_ENDPOINT ===
          'https://test.proton.api.atomicassets.io'
            ? '71ee83bcf52142d61019d95f9cc5427ba6a0d7ff8accd9e2088ae2abeaf3d3dd'
            : '384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0',
        restoreSession,
      },
      transportOptions: {
        requestAccount: this.requestAccount,
        backButton: true,
      },
      selectorOptions: {
        appName: this.appName,
      },
    });
    this.link = link;
    this.session = session;
    this.auth = {
      actor: session.auth.actor.toString(),
      permission: session.auth.permission.toString(),
    };
    this.chainId = session.chainId;

    if (this.auth.actor) {
      this.accountData = await proton.getAccountData(this.auth.actor);
    }
  };

  login = async (): Promise<WalletResponse> => {
    try {
      await this.connect({ restoreSession: false });
      if (!this.session || !this.session.auth) {
        throw new Error('An error has occurred while logging in');
      }
      const { auth } = this.session;
      const isLightKYCVerified = await proton.isAccountLightKYCVerified(
        auth.actor.toString()
      );
      const user = await proton.getUserByChainAccount(auth.actor.toString());

      const chainAccountAvatar = user
        ? `data:image/jpeg;base64,${user.avatar}`
        : '/default-avatar.png';

      return {
        user: {
          acc: auth.actor.toString(),
          actor: auth.actor.toString(),
          avatar: chainAccountAvatar,
          isLightKYCVerified,
          name: user.name.toString(),
          permission: auth.permission.toString(),
        },
        error: '',
      };
    } catch (e) {
      return {
        user: null,
        error: e.message || 'An error has occurred while logging in',
      };
    }
  };

  logout = async () => {
    await this.link.removeSession(
      this.requestAccount,
      this.session.auth,
      this.chainId
    );
  };

  restoreSession = async () => {
    try {
      await this.connect({ restoreSession: true });
      if (!this.session || !this.session.auth) {
        throw new Error('An error has occurred while restoring a session');
      }

      const { auth } = this.session;
      const isLightKYCVerified = await proton.isAccountLightKYCVerified(
        auth.actor.toString()
      );
      const user = await proton.getUserByChainAccount(auth.actor.toString());
      const chainAccountAvatar = (await user.avatar)
        ? `data:image/jpeg;base64,${user.avatar}`
        : '/default-avatar.png';

      return {
        user: {
          acc: auth.actor.toString(),
          actor: auth.actor.toString(),
          avatar: chainAccountAvatar,
          isLightKYCVerified,
          name: user.name.toString(),
          permission: auth.permission,
        },
        error: '',
      };
    } catch (e) {
      return {
        user: null,
        error: e.message || 'An error has occurred while restoring a session',
      };
    }
  };

  /**
   * Transfer an asset to another user
   *
   * @param {string}   sender       Chain account of the asset's current owner.
   * @param {string}   recipient    Chain account of recipient of asset to transfer
   * @param {string}   asset_id     ID of the asset being transferred
   * @param {string}   memo         Message to send with transfer
   * @return {Response}             Returns an object indicating the success of the transaction and transaction ID.
   */

  transfer = async ({
    sender,
    recipient,
    asset_id,
    memo,
  }: TransferOptions): Promise<Response> => {
    const action = [
      {
        account: 'atomicassets',
        name: 'transfer',
        authorization: [
          {
            actor: sender,
            permission: 'active',
          },
        ],
        data: {
          from: sender,
          to: recipient,
          asset_ids: [asset_id],
          memo: memo || '',
        },
      },
    ];
    try {
      if (!this.session) {
        throw new Error('Must be logged in to transfer an asset');
      }

      const result = await this.session.transact(
        { actions: action },
        { broadcast: true }
      );

      return {
        success: true,
        transactionId: result.processed.id,
      };
    } catch (e) {
      return {
        success: false,
        error:
          e.message ||
          'An error has occured while attempting to transfer the asset',
      };
    }
  };
}

export default new ProtonSDK();