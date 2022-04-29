import styled from "styled-components";

export const AttrTitle = styled.h2`
  color: #000;
  @media (max-width: 768px){
    font-size: 18px;
  }
`;
export const ConnectBtn = styled.button`
  padding: 6px 10px;
  margin: 12px 0px;
  border: none;
  border-radius: 8px;
  background-color: #242424;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  height: auto;
  font-size: 14px;
  line-height: 24px;
  width: 125px;
  margin-left: 25px;
  margin-top: 0;
  margin-bottom: 0;
  @media (max-width: 598px){
    margin: 0;
    margin-top: 30px;
    width: 100%;
  }
`;

export const Avatar = styled.div`
  border-radius: 100%;
  width: 32px;
  height: 32px;
  background-position: center;
  background-size: auto 110%;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    margin-left: unset;
  }
`;
export const MobileHeaderTab = styled.ul`
  display: none;
  @media (max-width: 598px){
    background: #FFF;
    position: absolute;
    width: 100%;
    display: ${(props: {isClose: boolean}) => props.isClose ? 'flex' : 'none'};
    flex-direction: column;
    top: 62px;
    left: 0;
    padding-bottom: 20px;
    border-bottom: 1px solid #FFF;
    padding-left: 12px;
    padding-right: 12px;
    margin-left: 0;
  }
`;
export const AttrWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 880px;
  @media (max-width: 768px){
    width: calc(100% - 16px);
  }
`;
export const AttrFlexBoxWrap = styled.div`
  display: flex;
  @media (max-width: 768px){
    width: 100%;
  }
`;
export const AttrGridBoxWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  grid-row-gap: 40px;
  grid-column-gap: 20px;
  @media (max-width: 768px){
    grid-row-gap: 20px;
    grid-column-gap: 10px;
    img{
      width: calc(100% - 60px);
    }
  }
`;
export const AttrPerText = styled.h3`
  color: #000;
  font-size: 16px;
  @media (max-width: 768px){
    font-size: 11px;
    max-width: 70px;
  }
`;
export const AttrT = styled.h2`
  font-size: calc(35.0009px);
  color: #000;
  text-align: center;
  @media (max-width: 768px){
    font-size: 28px;
  }
  @media (max-width: 598px){
    font-size: 26px;
  }
`;
export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background-color: ${(props: {theme: any}) => props.theme.bg.primary};
  color: ${(props: {theme: any}) => props.theme.text.primary};
  .wallet-selector-title {
    margin-top: 15px;
  }
  .infinite-scroll-component__outerdiv{
    width: 100%;
    max-width: 1200px;
  }
  .welc-box{
    margin-top: 50px;
    margin-bottom: 10px;
    width: calc(100% - 32px);
    font-size: 11px;
    display: flex;
    justify-content: center;
  }
`;
export const LogoWrap = styled.div`
  width: 100%;
  max-width: 1000px;
  padding-top: 30px;
  @media (max-width: 768px) {
    height: 100px;
    margin-top: 70px;
    margin-bottom: 20px;
  }
`;
export const Button = styled.button`
  width: 304px;
  min-height: 48px;
  border-radius: 10px;
  background-color: #38383b;
  border: none;
  outline: none;

  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  color: #ffffff;
`;

export const Title = styled.h2`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: 10px;
  }
`;
export const HeaderTab = styled.ul`
  display: flex;
  align-items: center;
  padding: 0; 
  ._active :after{
    transform: scaleX(1);
    transform-origin: left;
  }
  @media (max-width: 598px){
    margin-bottom: 0;
    margin-top: 0;
    display: none;
  }
`;
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px){
    width: 100%;
  }
`;
export const Tab = styled.a`
  cursor: pointer;
  list-styled: none;
  display: flex;
  color: #000;
  padding: 10px;
  line-height: 20px;
  margin-left: 10px;
  margin-right: 10px;
  background: transparent none repeat scroll 0 0;
  position: relative;
  border-bottom: none;
  border-left: medium none;
  transition: all 0.1s ease-in-out;

  :hover{
    color:  rgb(117, 46, 235);
  }
  :hover :after{
    transform: scaleX(1);
    transform-origin: left;
  }
  :after{
    margin-top: 20px;
    background:  rgb(117, 46, 235);
    height: 3px;
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .2s ease-out, opacity .2s ease-out 0.3s
  }
  @media (max-width: 598px){
    margin-left: 5px;
    margin-right: 5px;
    padding: 8px;
    font-size: 14px;
  }
`;
export const FeatureText = styled.span`
  color: #c8bab9;
`;
export const DescButtonWrap = styled.div`
  display: flex;
  margin-top: 20px;
  width: 200px;
  justify-content: space-between;
  @media (max-width: 598px){
    width: 215px;
  }
`;
export const DescButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: #242424;
  font-size: 12px;
  border: 0px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #fff;
  padding: 15px 20px;
  border-radius: 6px;
  cursor: pointer;
`;
export const GetText = styled.h3`
  color: #000;
  font-size: 15px;
  margin-bottom: 0;
  @media (max-width: 598px){
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;
export const Section = styled.div`
  display: flex;
  padding-bottom: 100px;
  margin-top: 64px;
  width: 100%;
  @media (max-width: 768px){
    flex-direction: column;
    padding-bottom: 30px;
    padding-top: 30px;
    margin-top: 30px;
  }
`;
export const MobileIcon = styled.img`
  display: none;
  @media (max-width: 598px){
    display: block;
  }
`;
export const Description = styled.text`
  width: 60%;
  font-size: 18px;
  line-height: 1.71;
  text-align: left;
  color: #000;
  margin-top: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const MainProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 50px;
  }
  @media (max-width: 598px){
    width: 50px;
  }
`;
export const Logo = styled.img`
  width: 50px;
  position: absolute;
  @media (max-width: 768px) {
    width: 50px;
    left: 25px;
  }
  @media (max-width: 598px){
    width: 35px;
  }
`;

export const RandomImg = styled.img`
  border: none;
  width: 100%;
  height: auto;
  object-fit: contain;
  image-rendering: pixelated;
  @media (max-width: 598px){
    max-width: 250px;
  }
`;

export const SectionImg = styled.img`
  max-width: 800px;
  height: auto;
  border: none;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 598px){
    display: none;
  }
`;

export const Br = styled.br`
  display: ${(props: {for: string}) => (props.for === "desktop" ? "block" : "none")};

  @media (max-width: 768px) {
    display: ${(props: {for: string}) => (props.for === "mobile" ? "block" : "none")};
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  height: 64px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    background: #FFF;
    height: 80px;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 999;
  }
  .css-8bmaul {
    box-sizing: border-box;
    margin: 0px 8px;
    min-width: 0px;
    width: 1px;
    height: 13px;
    background-color: rgb(183, 189, 198);
}
  .css-1gkzy2q,
  .css-14nsevo{
    width: 16px;
    height: 16px;
  }
  .css-1gkzy2q:hover,
  .css-14nsevo:hover {
    color: #702eeb;
  }
  
`;
export const Bar = styled.div`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  background-color: ${(props: {theme: any}) => props.theme.bg.secondary};
  justify-content: center;

  div{
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    margin-left: 2.5px;
    margin-right: 2.5px;
  }
`;
export const SubTitle = styled.h3`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 40px;
  @media (max-width: 598px){
    font-size: 14px;
    max-width: 80%;
    text-align: center;
    margin-bottom: 20px;
  }
`;
export const InnerBox = styled.div`
  width: 100%;
  max-width: 976px;
  margin: 0 auto;
  .css-e6aa8f {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-left: 0;
    max-width: 100%;
    min-height: 267px;
    text-align: center;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
  .css-1w2l5s {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-top: 16px;
    color: #474D57;
    margin-bottom: 10px;
}
.css-1tsywzf {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  position: relative;
  border-radius: 4px;
  width: 180px;
  height: 180px;
  background-color: #FFFFFF;
}
.css-1hc5qay {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  background: url(https://bin.bnbstatic.com/static/images/accounts/bg-white.png);
  box-shadow: rgb(24 26 32 / 10%) 0px 0px 1px, rgb(71 77 87 / 4%) 0px 3px 6px, rgb(24 26 32 / 4%) 0px 1px 2px;
  opacity: 1;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  padding: 12px;
  text-align: center;
  }
  .css-wz6kgg {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: 24px;
}
  .css-1tsywzf {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    position: relative;
    border-radius: 4px;
    width: 180px;
    height: 180px;
    background-color: #FFFFFF;
}
  .css-15651n7 {
    box-sizing: border-box;
    margin: 0px 0px 24px;
    min-width: 0px;
    width: 100%;
  }
  .css-xjlny9 {
    box-sizing: border-box;
    margin: 0px 0px 4px;
    min-width: 0px;
    display: flex;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(30, 35, 41);
    cursor: auto;
  }
  .css-hiy16i {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    width: 100%;
    position: relative;
    min-height: 12px;
  }
  .css-13xytqh input {
    color: rgb(30, 35, 41);
    font-size: 14px;
    padding-left: 12px;
    padding-right: 12px;
  }
  .css-13xytqh {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    display: inline-flex;
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1.6;
    border: 1px solid rgb(234, 236, 239);
    border-radius: 4px;
    height: 48px;
    background-color: transparent;
    width: 100%;
  }
  .css-16fg16t {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    width: 100%;
    height: 100%;
    padding: 0px;
    outline: none;
    border: none;
    background-color: inherit;
    opacity: 1;
  }
  .css-13xytqh .bn-input-suffix {
    flex-shrink: 0;
    margin-left: 4px;
    margin-right: 4px;
    font-size: 14px;
}
.css-1gkkq18 {
  box-sizing: border-box;
  margin: 0px 4px 0px 0px;
  min-width: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.css-1ezt628 {
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-size: 24px;
  fill: currentcolor;
  color: rgb(216, 220, 225);
  width: 1em;
  height: 1em;
}
.div-xo{
  justify-content: space-between;
}
  @media (max-width: 900px){
    display: flex;
    flex-direction: column;
    align-items: center;
    .div-xo{
      flex-direction: column;
      align-items: center;
    }
    .div-xk{
      margin-bottom: 30px;
    }
  }
  @media (max-width: 598px){
    width: calc(100% - 40px);
    .div-xk{
      width: 100%;
    }
  }
`;
export const LoginBtn = styled.button`
  margin: 0px;
  margin-bottom: 24px;
  appearance: none;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  font-family: inherit;
  text-align: center;
  text-decoration: none;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  word-break: keep-all;
  color: rgb(33, 40, 51);
  border-radius: 6px;
  padding: 12px 24px;
  min-height: 24px;
  border: none;
  background-image: none;
  background-color: #702EEB;
  min-width: 80px;
  width: 100%;
  color: #e9e9e9;
`;
export const HeaderInner = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const AvatarContainer = styled.div`
  cursor: pointer;
  overflow: hidden;
  border: 3px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#b16ab3, #b06ab3),
  linear-gradient(to right, #B2AEBC, #582ACB);
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin-left: 50px;
  @media (max-width: 768px) {
    justify-content: center;
    width: 48px;
    height: 48px;
  }
`;

export const Rank = styled.h4`
  margin: 0;
  font-size: 12px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
`;

export const AttrTab = styled.span`
  margin-top: 5px;
  color: #FFF;
  background-color: rgb(117, 46, 235);
  display: inline-block;
  padding: .4em .6em;
  font-size: 80%;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .5rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;
export const AcWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-column-gap: 5px;
`;
export const UserName = styled.p`
  margin-left: 16px;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: #ffffff;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Message = styled.span`
  font-size: 16px;
  margin-top: 20px;

  &.success {
    color: white;
  }

  &.error {
    text-align: center;
    color: antiquewhite;
  }

  @media (max-width: 400px) {
    width: 300px;
  }
`;

export const Error = styled.h2`
  color: antiquewhite;
  font-size: 14px;
`;

export const FooterWrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding-top: 50px;
  position: absolute;
  bottom: 0;
  span{
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    padding: 12px;
  }
`;
export const SNSWrap = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;
`;
export const LinkList = styled.ul`
  display: flex;
  list-style: none;
  padding-right: 68px;
  @media (max-width: 768px) {
    padding-right: 0px;
  }
`;

export const LinkItem = styled.li`
  margin-right: 20px;
`;

export const Icon = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;
export const SearchInput =styled.input`
  display: block;
  width: 50%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgb(117,46,235);
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  @media (max-width: 598px){
    width: calc(100% - 16px);
  }
`;
export const Filter = styled.ul`
  list-style: none;
  display: flex;
  width: 250px;
  padding-left: 0;
  justify-content: space-between;
`;
export const FilterTab = styled.li` 
  color: ${(props: {isActive: boolean}) => props.isActive ? '#1E2329' : '#707A8A'};
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.isActive ? '#F5F5F5' : 'none'};
  border-radius: 8px;
  font-weight: 500;
  padding: 8px 24px 8px 24px;
  margin-right: 24px;
  @media (max-width: 598px){
    margin-right: 12px;
    padding: 8px 16px 8px 16px;
  }
`;
export const MarketWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  grid-row-gap: 40px;
  grid-column-gap: 10px;
  margin-top: 50px;
  @media (max-width: 768px){
    grid-template-columns: repeat(2, 2fr);
  }
  @media (max-width: 598px){
    min-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    grid-row-gap: 0;
    grid-column-gap: 0;
    margin-top: 0;
  }
`;

export const MarketItem = styled.div`
  height: 100%;
  :before, :after{
    box-sizing: border-box;
  }
  @media (max-width: 598px){
    padding: 8px;
  }
`;
export const MarketItemInner = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  padding-bottom: 10px;
  background-color: rgb(255, 255, 255);
  border: 1px solid #e5ebe8;
  border-radius: 5px;
  position: relative;
  img{
    object-fit: contain;
    border-radius: 5px;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    transition: opacity 400ms ease 0s;
  }
  .nft-image{
    height: auto;
    over-flow: hidden;
    padding: 0px 8px;
    position: relative;
    .pixelated{
      image-rendering: pixelated;
    }
  }
  :hover{
    transform: translateY(-2px);
    box-shadow: rgb(164 80 139 / 25%) 0px 0px 8px 0px;
    transition: all 0.1s ease 0s;
  }
  :before, :after{
    box-sizing: border-box;
  }
  @media (max-width: 598px){
    height: 100%;
    img{
      object-fit: contain;
    }
  }
  @media (max-width: 598px){
    height: 100%;
    img{
      object-fit: contain;
    }
  }
`;
export const ItemTop = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

export const ColName = styled.h3`
  font-weight: normale;
  font-size: 14px;
  margin-left: 5px;
`;

export const ItemBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 8px;
`;

export const NftName = styled.h3`
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 0;
  letter-spacing: 0.1px;
`;
export const NftHeaderWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 30px;
  font-size: 18px;
`;
export const NftHeaderTab = styled.div`
  width: 100%;
  height: 50px;
  display: flex; 
  align-items: center;
  background-color: #e6e6e6;
  padding-left: 10px;
  color: #333;
`;
export const ImgWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 312px;
  height: 100%;
  background-color: #752eeb;
  .detail-image{
      max-height: 312px;
      max-width: 312px;
      margin-top: 50px;
      width: 100%;
      image-rendering: -moz-crisp-edges;
      image-rendering: pixelated;
      display: block;
      margin-left: auto;
      margin-right: auto;
  }
`;