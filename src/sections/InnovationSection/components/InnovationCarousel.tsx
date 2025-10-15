import { InnovationCard } from "@/sections/InnovationSection/components/InnovationCard";

export const InnovationCarousel = () => {
  return (
    <div className="relative box-border caret-transparent max-w-6xl w-full">
      <div className="relative box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="relative box-border caret-transparent list-none z-[1] overflow-hidden mx-auto">
            <div className="relative caret-transparent flex h-full translate-x-[-1404px] w-full z-[1] md:translate-x-[-1758px]">
              <InnovationCard variant="bg-transparent md:bg-white md:shadow-[rgba(6,171,224,0.2)_0px_0px_15px_0px,rgba(6,171,224,0.1)_0px_0px_30px_0px]" />
              <InnovationCard variant="bg-transparent md:bg-white md:shadow-[rgba(6,171,224,0.2)_0px_0px_15px_0px,rgba(6,171,224,0.1)_0px_0px_30px_0px]" />
              <InnovationCard variant="bg-transparent md:bg-white md:shadow-[rgba(6,171,224,0.2)_0px_0px_15px_0px,rgba(6,171,224,0.1)_0px_0px_30px_0px]" />
              <InnovationCard variant="bg-transparent md:bg-white md:shadow-[rgba(6,171,224,0.2)_0px_0px_15px_0px,rgba(6,171,224,0.1)_0px_0px_30px_0px]" />
              <InnovationCard variant="text-black bg-none transform-none z-auto md:text-white md:bg-[linear-gradient(rgb(7,191,250),rgb(4,150,198))] md:shadow-[rgba(0,0,0,0.15)_0px_0px_20px_0px,rgba(0,0,0,0.1)_0px_0px_40px_0px] md:z-10 md:scale-[1.1px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
