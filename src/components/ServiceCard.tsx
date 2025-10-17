interface ServiceCardProps {
    title: string;
    description: string;
    delay?: number;
  }
  
  const ServiceCard = ({ title, description, delay = 0 }: ServiceCardProps) => {
    return (
      <div 
        className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
        style={{ animationDelay: `${delay}ms` }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    );
  };
  
  export default ServiceCard;
  