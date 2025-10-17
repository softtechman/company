import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioItemProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export const PortfolioItem = ({ title, isActive, onClick }: PortfolioItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-300 group",
        "border-l-4 hover:border-l-[hsl(var(--portfolio-border))]",
        isActive
          ? "bg-[hsl(var(--portfolio-highlight))] border-l-[hsl(var(--portfolio-border))]"
          : "border-l-transparent hover:bg-[hsl(var(--portfolio-highlight))]"
      )}
    >
      <span
        className={cn(
          "text-lg font-medium transition-colors duration-300",
          isActive ? "text-[hsl(var(--accent))]" : "text-foreground group-hover:text-[hsl(var(--accent))]"
        )}
      >
        {title}
      </span>
      <ArrowRight
        className={cn(
          "w-5 h-5 transition-all duration-300",
          isActive
            ? "text-[hsl(var(--accent))] translate-x-1"
            : "text-muted-foreground group-hover:text-[hsl(var(--accent))] group-hover:translate-x-1"
        )}
      />
    </button>
  );
};
