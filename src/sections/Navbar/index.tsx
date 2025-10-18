import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useAuth } from '@getmocha/users-service/react';
import {AuthModal} from '@/sections/Navbar/components/AuthModal';
import {UserMenu} from '@/sections/Navbar/components/UserMenu';

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
      <div className="max-w-[1400px] mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-2">
          <img
        // alt="FxCapital Logo"
        src="https://i.postimg.cc/T2sDpfGH/fxcapital-2.png"
        className="text-transparent aspect-[auto_190_/_45] box-border h-10 max-w-full pointer-events-none w-16"
      />
      <h2 className="text-xl text-bold">
        FxCapital
      </h2>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="block xl:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 hover:text-[#06ABE0] focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center space-x-6 text-lg font-medium text-gray-700">
          <div className="relative group">
            <button className="text-base px-2 inline-flex items-center border-b-[3px] hover:border-[#06ABE0] border-transparent">
              Services
              <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="p-4 space-y-2">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-[#06ABE0] hover:text-white rounded-md transition-colors">
                  Blockchain Development
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-[#06ABE0] hover:text-white rounded-md transition-colors">
                  Smart Contract Development
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-[#06ABE0] hover:text-white rounded-md transition-colors">
                  DApp Development
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-[#06ABE0] hover:text-white rounded-md transition-colors">
                  Web3 Solutions
                </a>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="text-base inline-flex px-2 items-center border-b-[3px] hover:border-[#06ABE0] border-transparent">
              Solutions
              <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="p-4 space-y-2">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-[#06ABE0] hover:text-white rounded-md transition-colors">
                  DeFi Platforms
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-[#06ABE0] hover:text-white rounded-md transition-colors">
                  NFT Marketplaces
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-[#06ABE0] hover:text-white rounded-md transition-colors">
                  Exchange Platforms
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-[#06ABE0] hover:text-white rounded-md transition-colors">
                  Token Development
                </a>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="text-base inline-flex px-2 items-center border-b-[3px] hover:border-[#06ABE0] border-transparent">
              Industries
              <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="p-4 space-y-2">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-[#06ABE0] hover:text-white rounded-md transition-colors">
                  Fintech
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-[#06ABE0] hover:text-white rounded-md transition-colors">
                  Healthcare
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-[#06ABE0] hover:text-white rounded-md transition-colors">
                  Supply Chain
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-[#06ABE0] hover:text-white rounded-md transition-colors">
                  Gaming
                </a>
              </div>
            </div>
          </div>

          <a className="text-base px-2 border-b-[3px] border-transparent hover:border-[#06ABE0]" href="#about">
            About
          </a>
          <a className="text-base px-2 border-b-[3px] border-transparent hover:border-[#06ABE0]" href="#portfolio">
            Portfolio
          </a>
          <a className="text-base px-2 border-b-[3px] border-transparent hover:border-[#06ABE0]" href="#contact">
            Contact
          </a>
          <a className="text-base px-2 border-b-[3px] border-transparent hover:border-[#06ABE0]" href="/ourteam">
            Our Team
          </a>

        </div>

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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <div>
              <button 
                onClick={() => handleDropdownToggle('services')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-[#06ABE0] py-2"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'services' && (
                <div className="pl-4 pt-2 space-y-2">
                  <a href="#" className="block py-2 text-gray-600 hover:text-[#06ABE0]">
                    Blockchain Development
                  </a>
                  <a href="#" className="block py-2 text-gray-600 hover:text-[#06ABE0]">
                    Smart Contract Development
                  </a>
                  <a href="#" className="block py-2 text-gray-600 hover:text-[#06ABE0]">
                    DApp Development
                  </a>
                  <a href="#" className="block py-2 text-gray-600 hover:text-[#06ABE0]">
                    Web3 Solutions
                  </a>
                </div>
              )}
            </div>
            
            <div>
              <button 
                onClick={() => handleDropdownToggle('solutions')}
                className="w-full flex items-center justify-between text-gray-700 hover:text-[#06ABE0] py-2"
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'solutions' && (
                <div className="pl-4 pt-2 space-y-2">
                  <a href="#" className="block py-2 text-gray-600 hover:text-[#06ABE0]">
                    DeFi Platforms
                  </a>
                  <a href="#" className="block py-2 text-gray-600 hover:text-[#06ABE0]">
                    NFT Marketplaces
                  </a>
                  <a href="#" className="block py-2 text-gray-600 hover:text-[#06ABE0]">
                    Exchange Platforms
                  </a>
                  <a href="#" className="block py-2 text-gray-600 hover:text-[#06ABE0]">
                    Token Development
                  </a>
                </div>
              )}
            </div>

            <a href="#about" className="block py-2 text-gray-700 hover:text-[#06ABE0]">
              About
            </a>
            <a href="#portfolio" className="block py-2 text-gray-700 hover:text-[#06ABE0]">
              Portfolio
            </a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-[#06ABE0]">
              Contact
            </a>
            {user ? (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    {user.google_user_data.picture ? (
                      <img
                        src={user.google_user_data.picture}
                        alt={user.google_user_data.name || user.email}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#06ABE0] to-[#0496c6] flex items-center justify-center text-white font-bold">
                        {user.email.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      {user.google_user_data.name || user.email}
                    </p>
                    <p className="text-xs text-gray-500">
                      {user.email}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => {/* Add logout functionality */}}
                  className="w-full px-4 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors text-sm"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button 
                onClick={() => {
                  setShowAuthModal(true);
                  setIsOpen(false);
                }}
                disabled={isPending}
                className="w-full mt-4 px-6 py-3 text-white bg-gradient-to-b from-[#07BFFA] to-[#0496c6] rounded-full disabled:opacity-50"
              >
                {isPending ? 'Loading...' : 'Get Started'}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </nav>
  );
};

