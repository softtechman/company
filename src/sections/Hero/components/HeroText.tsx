export const HeroText = () => {
  return (
    <div className="box-border caret-transparent flex flex-col justify-center w-full md:w-3/5">
      <div className="items-start box-border caret-transparent gap-x-4 flex flex-col justify-center gap-y-4">
        <h1 className="text-[28px] font-semibold box-border caret-transparent leading-[42px] md:text-5xl md:leading-[72px]">
          Blockchain Development Company
        </h1>
        <p className="box-border caret-transparent leading-[26px]">
          At CryptoApe, we craft cutting-edge blockchain, AI, Web3, and fintech
          solutions that help businesses scale faster, trade smarter, and
          innovate fearlessly. From cryptocurrency exchanges to metaverse
          ecosystems — we make your boldest ideas a reality.
        </p>
      </div>
      <div className="box-border caret-transparent text-left mt-4">
        <button className="relative text-cyan-500 font-semibold bg-cyan-500 bg-[linear-gradient(rgb(255,255,255),rgb(255,255,255)),linear-gradient(rgb(7,191,250),rgb(4,150,198))] bg-size-[auto,auto] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] caret-transparent text-center bg-[position:0%,0%_0%,0%] px-7 py-[9.6px] rounded-full border-4 border-solid border-transparent md:px-6 md:py-3 hover:text-white hover:bg-cyan-600 hover:shadow-[rgba(6,171,224,0.25)_0px_8px_24px_0px]">
          Bring Your Vision To Life
        </button>
      </div>
    </div>
  );
};
