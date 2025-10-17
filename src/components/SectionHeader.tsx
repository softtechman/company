export const SectionHeader = () => {
  return (
    <div className="items-center box-border caret-transparent flex flex-col opacity-0 text-center w-full md:opacity-100">
      <div className="box-border caret-transparent opacity-0 mb-8 scale-0 md:opacity-100 md:transform-none">
        <div className="relative box-border caret-transparent z-10">
          <img
            // alt="FxCapital Logo"
            src="https://avatars.slack-edge.com/2025-09-22/9568871882900_b27394260cab84e2a01b_88.png"
            className="text-transparent aspect-[auto_50_/_50] box-border h-20 max-w-full object-contain pointer-events-none w-20"
          />
        </div>
      </div>
      <div className="box-border caret-transparent opacity-0 translate-y-5 mb-2 scale-[0.8px] md:opacity-100 md:transform-none">
        <h2 className="text-gray-900 text-[28px] font-bold box-border caret-transparent leading-[42px] mb-4 md:text-4xl md:leading-[54px]">
          <span className="text-[28px] box-border caret-transparent leading-[42px] md:text-4xl md:leading-[54px]">
            Why Visionaries{" "}
          </span>
          <span className="text-sky-500 text-[28px] box-border caret-transparent leading-[42px] md:text-4xl md:leading-[54px]">
            Partners with us
          </span>
        </h2>
      </div>
      <div className="box-border caret-transparent max-w-4xl opacity-0 translate-y-5 mx-auto scale-[0.8px] md:opacity-100 md:transform-none">
        <div className="text-gray-600 box-border caret-transparent leading-[26px]">
          <p className="box-border caret-transparent leading-8">
            FxCapital is a full-service blockchain development company
            specializing in cryptocurrency exchange scripts, DeFi solutions, NFT
            platforms, Web3 applications, and AI-powered fintech products. With
            a team of experienced developers, blockchain architects, designers,
            and business analysts, we deliver solutions that are innovative,
            secure, and future-proof.
          </p>
          <p className="box-border caret-transparent leading-8 mt-6">
            We&#39;ve helped clients across 50+ countries successfully launch
            platforms that handle millions in transactions — all while ensuring
            performance, compliance, and user trust.
          </p>
        </div>
      </div>
    </div>
  );
};
