export type CarouselSlideProps = {
  title: string;
  imageUrl: string;
  imageAlt: string;
};

export const CarouselSlide = (props: CarouselSlideProps) => {
  return (
    <div className="relative items-center box-border caret-transparent flex flex-col shrink-0 h-full justify-center text-center w-[336px] mr-5 md:w-[496px]">
      <div className="items-center box-border caret-transparent flex flex-col justify-between">
        <img
          alt={props.imageAlt}
          src={props.imageUrl}
          className="text-transparent aspect-[auto_500_/_500] box-border max-w-full pointer-events-none w-4/5 mb-4 md:w-[330px]"
        />
        <h2 className="text-white text-xl font-bold box-border caret-transparent leading-7 w-full md:text-2xl md:leading-8">
          {props.title}
        </h2>
      </div>
    </div>
  );
};
