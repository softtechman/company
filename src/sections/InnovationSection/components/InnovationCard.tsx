export type InnovationCardProps = {
  variant: string;
};

export const InnovationCard = (props: InnovationCardProps) => {
  return (
    <div className="relative box-border caret-transparent shrink-0 h-full w-[336px] mr-[15px] p-2 md:w-[566px] md:mr-5">
      <div
        className={`static [align-items:normal] shadow-none box-content caret-black block flex-row h-auto justify-normal max-w-none w-auto rounded-none md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:flex-col md:h-[200px] md:justify-center md:max-w-[329px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[329px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg ${props.variant}`}
      ></div>
    </div>
  );
};
