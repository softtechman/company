export type ImpactCardProps = {
    iconSrc: string;
    iconAlt: string;
    title: string;
    description: string;
    delay?: string;
  };
  
  export const ImpactCard = (props: ImpactCardProps) => {
    return (
      <div 
        className="items-center box-border caret-transparent flex flex-col text-center w-full animate-fade-in-up md:w-[calc(33.333%-32px)]"
        style={{ animationDelay: props.delay || '0s' }}
      >
        <div className="box-border caret-transparent mb-4 transition-transform duration-300 hover:scale-110">
          <img
            alt={props.iconAlt}
            src={props.iconSrc}
            className="text-transparent aspect-square box-border h-16 max-w-full object-contain pointer-events-none w-16"
          />
        </div>
        <h3 className="text-gray-900 text-xl font-semibold box-border caret-transparent leading-7 mb-2">
          {props.title}
        </h3>
        <p className="text-gray-600 box-border caret-transparent leading-[26px]">
          {props.description}
        </p>
      </div>
    );
  };
  