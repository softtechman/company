export const HeroText = () => {
  return (
    <div className="box-border caret-transparent flex flex-col justify-center w-full md:w-3/5">
      <div className="items-start box-border caret-transparent gap-x-4 flex flex-col justify-center gap-y-4">
        <h1 className="text-[28px] font-semibold box-border caret-transparent leading-[42px] md:text-5xl md:leading-[72px]">
          Blockchain Development Company
        </h1>
        <p className="box-border caret-transparent leading-[26px]">
          At FxCapital, we craft cutting-edge blockchain, AI, Web3, and fintech
          solutions that help businesses scale faster, trade smarter, and
          innovate fearlessly. From cryptocurrency exchanges to metaverse
          ecosystems — we make your boldest ideas a reality.
        </p>
      </div>
      <div className="box-border group caret-transparent  text-left mt-4">
      <button
  className="
    relative
    text-cyan-500
    font-semibold
    bg-white
    border-2 border-cyan-500
    rounded-full
    px-7 py-2.5
    text-center
    transition-all duration-300
    hover:text-white
    hover:bg-blue-600
    group-hover:border-white
    hover:shadow-[rgba(6,171,224,0.25)_0px_8px_24px_0px]
  "
>       
          Bring Your Vision To Life
        </button>
      </div>
    </div>
  );
};
