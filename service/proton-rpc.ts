import { JsonRpc } from '@proton/js';
import { formatPrice } from '../utils';
import { encodeName } from '@bloks/utils';
import { RpcInterfaces } from '@proton/js';
import {
  TOKEN_SYMBOL,
  TOKEN_CONTRACT,
  EMPTY_BALANCE,
} from '../utils/constants';

type User = {
  actor: string;
  avatar: string;
  name: string;
};

class ProtonJs {
  rpc: JsonRpc = null;
  endpoints: string[];

  constructor() {
    this.endpoints = process.env.NEXT_PUBLIC_CHAIN_ENDPOINTS.split(', ');
    this.rpc = new JsonRpc(this.endpoints);
  }

  getAccountBalance = async (chainAccount: string): Promise<string> => {
    const balance = await this.rpc.get_currency_balance(
      TOKEN_CONTRACT,
      chainAccount,
      TOKEN_SYMBOL
    );
    const price = balance.length ? balance[0] : `${0} ${TOKEN_SYMBOL}`;
    return formatPrice(price);
  };

  async getAccountData(chainAccount: string): Promise<RpcInterfaces.UserInfo> {
    const { rows } = await this.rpc.get_table_rows({
      json: true,
      code: 'eosio.proton',
      scope: 'eosio.proton',
      table: 'usersinfo',
      table_key: '',
      key_type: 'i64',
      lower_bound: encodeName(chainAccount, false),
      index_position: 1,
      limit: 1,
    });
    return rows && rows.length && rows[0].acc === chainAccount
      ? rows[0]
      : undefined;
  }

  getUserByChainAccount = async (chainAccount: string): Promise<User> => {
    const { rows } = await this.rpc.get_table_rows({
      scope: 'eosio.proton',
      code: 'eosio.proton',
      json: true,
      table: 'usersinfo',
      lower_bound: chainAccount,
      upper_bound: chainAccount,
    });

    return !rows.length ? '' : rows[0];
  };

  isAccountLightKYCVerified = async (
    chainAccount: string
  ): Promise<boolean> => {
    try {
      const verifiedAccounts = await this.rpc.isLightKYCVerified(chainAccount);

      if (verifiedAccounts.length < 1) {
        return false;
      }

      return verifiedAccounts[0].isLightKYCVerified;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };
}

const proton = new ProtonJs();
export default proton;