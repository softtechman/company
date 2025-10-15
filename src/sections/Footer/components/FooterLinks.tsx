import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent gap-x-5 flex flex-col justify-start gap-y-5 w-full md:w-3/5">
      <div className="items-start box-border caret-transparent gap-x-5 flex flex-col justify-evenly gap-y-5 w-full md:items-center md:gap-x-20 md:flex-row md:gap-y-20">
        <FooterColumn
          title="Clone Scripts"
          links={[
            { href: "binance-clone-script", text: "Binance Clone Script" },
            {
              href: "cryptocurrency-exchange-script",
              text: "Cryptocurrency Exchange Script",
            },
            {
              href: "pancakeswap-clone-script",
              text: "Pancakeswap Clone Script",
            },
            { href: "opensea-clone-script", text: "Opensea Clone Script" },
            {
              href: "p2p-crypto-exchange-script",
              text: "P2P Crypto Exchange Script",
            },
            {
              href: "coinpayments-clone-script",
              text: "CoinPayments Clone Script ",
            },
          ]}
        />
        <FooterColumn
          title="NFT Solutions"
          links={[
            {
              href: "nft-marketplace-development-company",
              text: "NFT Marketplace Development",
            },
            { href: "contactus", text: "NFT Game Development" },
            { href: "contactus", text: "NFT Art Marketplace Development" },
            {
              href: "contactus",
              text: "Real Estate NFT Marketplace Development",
            },
            { href: "game-development-company", text: "Game Development" },
            {
              href: "web3-game-development-company",
              text: "Web3 Game Development",
            },
          ]}
        />
      </div>
      <div className="items-start box-border caret-transparent gap-x-5 flex flex-col justify-evenly gap-y-5 w-full md:items-center md:gap-x-20 md:flex-row md:gap-y-20">
        <FooterColumn
          title="DEFI Solutions"
          links={[
            {
              href: "defi-yield-farming-development-services",
              text: "DEFI Yield Farming Development",
            },
            { href: "dapp-development-company", text: "DEFI Dapp Development" },
            { href: "defi-development-company", text: "DEFI Development" },
            { href: "contactus", text: "DEFT Staking Platform" },
            { href: "contactus", text: "DEFI Lending and Borrowing" },
          ]}
        />
        <FooterColumn
          title="Crypto Exchange Solutions"
          links={[
            {
              href: "contactus",
              text: "Centralized Cryptocurrency Exchange Development",
            },
            {
              href: "contactus",
              text: "Crypto Derivatives Exchange Development",
            },
            { href: "contactus", text: "Crypto Trading Bot Development" },
            {
              href: "cryptocurrency-exchange-development-company",
              text: "Cryptocurrency Exchange Development",
            },
            {
              href: "p2p-cryptocurrency-exchange-development",
              text: "P2P Crypto Exchange Development",
            },
          ]}
        />
      </div>
    </div>
  );
};
