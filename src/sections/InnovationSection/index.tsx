import InnovationCarousel from "@/components/InnovationCarousel";
import AnimatedBackground from "@/components/AnimatedBackground";
//import images
import innovationImg from "@/assets/innovation/innovation.png"

export const InnovationSection = () => {
  return (
    <div className="bg-background">
        <section className="container mx-auto px-6 py-4 relative">
          <div className="text-center mb-16 animate-fade-in relative z-10">
            <div className="flex justify-center mb-6">
              {/* <img className="w-20 h-20" src="https://i.postimg.cc/FHPTcF3t/innovation.png" /> */}
              <img className="w-20 h-20" src={innovationImg} />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold">
              Our <span className="text-sky-500">AI Powered Innovation</span> in Blockchain
            </h2>
          </div>
          <AnimatedBackground />
          <div className="relative z-10 h-full">
            <InnovationCarousel />
          </div>
        </section>
    </div>
  );
};

