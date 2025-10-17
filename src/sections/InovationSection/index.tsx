import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import BlockchainIcon from "@/components/BlockchainIcon";
import ChainIcon from "@/components/ChainIcon";     
import InnovationCarousel from "@/components/InnovationCarousel";
import AnimatedBackground from "@/components/AnimatedBackground";

export const InovationSection = () => {
  return (
    <div className="min-h-screen  bg-background">
      
      <main className="pt-24 relative">
        {/* AI Innovation Section */}
        <section className="container mx-auto px-6 py-20 relative">
          
          <div className="text-center mb-16 animate-fade-in relative z-10">
            <div className="flex justify-center mb-6">
              <BlockchainIcon />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="text-primary">AI Powered Innovation</span> in Blockchain
            </h2>
          </div>
          <AnimatedBackground />
          <div className="relative z-10 h-full">
            <InnovationCarousel />
          </div>
        </section>

      </main>
    </div>
  );
};

