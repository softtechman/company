import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { label: "Services", hasDropdown: true },
    { label: "Clone Script", hasDropdown: true },
    { label: "LaunchPad", hasDropdown: true },
    { label: "Tokenization", hasDropdown: true },
    { label: "Company", hasDropdown: true },
    { label: "Blog", hasDropdown: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-card shadow-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-300 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🦍</span>
            </div>
            <span className="text-xl font-bold">
              <span className="text-primary">Crypto</span>
              <span className="text-foreground">Ape</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
            Enquire Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
