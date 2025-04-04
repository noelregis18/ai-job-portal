
import { Github, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="font-extrabold text-xl text-white">All in Jobs</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your all-in-one workspace for getting work done better.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/noelregis18" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://x.com/NoelRegis8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/noel-regis-aa07081b1/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:noel.regis04@gmail.com" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="https://jobs.weekday.works/?jobsTab=search" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="tel:+917319546900" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:noel.regis04@gmail.com" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="https://platform.openai.com/docs/overview" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="https://platform.openai.com/docs/api-reference/introduction" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">API Reference</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <a href="mailto:noel.regis04@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} />
                <span>noel.regis04@gmail.com</span>
              </a>
              <a href="tel:+917319546900" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={16} />
                <span>+91 7319546900</span>
              </a>
              <a href="https://www.google.com/maps/place/Asansol,+West+Bengal,+India" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <MapPin size={16} />
                <span>Asansol, West Bengal, India</span>
              </a>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
