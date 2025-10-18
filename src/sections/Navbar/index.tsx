import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useAuth } from '@getmocha/users-service/react';
import {AuthModal} from '@/sections/Navbar/components/AuthModal';
import {UserMenu} from '@/sections/Navbar/components/UserMenu';
import { DesktopMenu } from './components/DesktopMenu';
import { MobileMenu } from './components/MobileMenu';
import { MobileMenuButton } from './components/MobileMenuButton';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, isPending } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // true if scrolled down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow" : "shadow-none"
      }`}
    >
      <div className={`max-w-[1300px] mx-auto p-4 ${isOpen?'':'flex'}  justify-between items-center`}>
        {/* Logo */}
        <div className="relative flex justify-between items-center w-full lg:w-20">
          <div className='flex items-center space-x-4'>
            <a href="/" className="flex items-center space-x-2">
            <img
              // alt="FxCapital Logo"
              src="https://i.postimg.cc/T2sDpfGH/fxcapital-2.png"
              className="text-transparent aspect-[auto_190_/_80] box-border h-10 max-w-full pointer-events-none w-16"
            />
            <h2 className="text-xl text-bold">
              FxCapital
            </h2>
            </a>
          </div>
          <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
        </div>

        {/* Desktop Menu */}
        <DesktopMenu />
        {/* Mobile Menu Button */}
        {isOpen && <MobileMenu />}

        {/* CTA Button / User Menu */}
        <div className="hidden xl:block">
          {user ? (
            <UserMenu />
          ) : (
            <button 
              onClick={() => setShowAuthModal(true)}
              disabled={isPending}
              className="relative px-6 py-2 text-white overflow-hidden bg-gradient-to-b from-[#07BFFA] to-[#0496c6] hover:opacity-90 active:scale-95 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Loading...
                </div>
              ) : (
                'Get Started'
              )}
            </button>
          )}
        </div>
      </div>


      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </nav>
  );
};

