export type CarouselSlideProps = {
  title: string;
  imageUrl: string;
  imageAlt: string;
  currentSlide: number
  index: number;
};

export const CarouselSlide = (props: CarouselSlideProps) => {
  return (
    <div 
    className="relative items-center box-border caret-transparent duration-1000 flex flex-col shrink-0 h-full justify-center text-center w-[336px] mr-5 md:w-[496px]"
    // className={`relative transition-all duration-1000 ease-in-out ${
    //   props.index === props.currentSlide 
    //     ? 'opacity-100 transform translate-x-0' 
    //     : props.index < props.currentSlide 
    //     ? 'opacity-0 transform -translate-x-[100px]' 
    //     : 'opacity-0 transform translate-x-[100px]'
    // }`}
    >
      <div className="items-center box-border caret-transparent flex flex-col justify-between">
        <img
          // alt={props.imageAlt}
          src={props.imageUrl}
          // className="w-80 h-80 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
          className="text-transparent aspect-[auto_500_/_500] box-border max-w-full pointer-events-none w-4/5 mb-4 md:w-[330px] mix-blend-screen object-contain"
        />
        <h2 className="text-white text-xl font-bold box-border caret-transparent leading-7 w-full md:text-2xl md:leading-8">
          {props.title}
        </h2>
      </div>
    </div>
  );
};
