interface InnovationCardProps {
    title: string;
    description: string;
    highlighted?: boolean;
    delay?: number;
  }
  
  const InnovationCard = ({ title, description, highlighted = false }: InnovationCardProps) => {
    return (
      <div 
        className={`rounded-sm p-8 transform-gpu will-change-transform will-change-[box-shadow] transition-transform transition-shadow ease-[cubic-bezier(.22,1,.36,1)] duration-500 min-h-[200px] flex flex-col justify-center hover:-translate-y-1 md:hover:-translate-y-2 ${
          highlighted 
            ? 'bg-[#06b6ef] text-white shadow-lg hover:shadow-2xl scale-105' 
            : 'bg-white backdrop-blur-sm text-foreground border border-border/50 shadow-sm hover:shadow-lg'
        }`}
      >
        <h3 className={`text-lg font-bold mb-3 ${highlighted ? 'text-white' : 'text-foreground'} animate-float-y`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed ${highlighted ? 'text-white/90' : 'text-muted-foreground'} animate-float-y`}> 
          {description}
        </p>
      </div>
    );
  };
  
  export default InnovationCard;
  