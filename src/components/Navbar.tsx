
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    navigate('/auth');
    if (isMenuOpen) toggleMenu();
  };

  const handleLogout = async () => {
    await signOut();
    if (isMenuOpen) toggleMenu();
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    if (isMenuOpen) toggleMenu();
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-extrabold text-xl text-primary">weekday.works</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Pricing
            </button>
            
            {user ? (
              <div className="flex items-center gap-4">
                <Button 
                  variant="secondary"
                  onClick={() => navigate('/dashboard')}
                >
                  Dashboard
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 flex items-center gap-2"
                  onClick={handleLogout}
                >
                  <LogOut size={16} /> Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  className="border-gray-300"
                  onClick={handleLogin}
                >
                  Log In
                </Button>
                <Button onClick={handleLogin}>Sign Up</Button>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 px-2 bg-white">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                Pricing
              </button>
              
              {user ? (
                <>
                  <Button 
                    variant="secondary"
                    className="w-full"
                    onClick={() => {
                      navigate('/dashboard');
                      toggleMenu();
                    }}
                  >
                    Dashboard
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 flex items-center justify-center gap-2"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} /> Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300"
                    onClick={handleLogin}
                  >
                    Log In
                  </Button>
                  <Button 
                    className="w-full"
                    onClick={handleLogin}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
