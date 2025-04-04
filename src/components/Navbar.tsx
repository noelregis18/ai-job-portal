
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex items-center space-x-2">
            <span className="font-extrabold text-xl text-primary">weekday.works</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Features</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Pricing</a>
            <Button variant="outline" className="border-gray-300">Log In</Button>
            <Button>Sign Up</Button>
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
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors" onClick={toggleMenu}>Features</a>
              <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors" onClick={toggleMenu}>Testimonials</a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors" onClick={toggleMenu}>Pricing</a>
              <Button variant="outline" className="w-full border-gray-300">Log In</Button>
              <Button className="w-full">Sign Up</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
