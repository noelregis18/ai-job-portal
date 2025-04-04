
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Linkedin, Github, Twitter, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  };

  const handleSeeFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to handle social media links
  const openExternalLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Your all-in-one workspace for getting work done
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-6">
              Simple, powerful tools for individuals and teams to achieve better workflows and results
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="px-8 py-6 text-md" onClick={handleGetStarted}>
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-md" onClick={handleSeeFeatures}>
                See how it works <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-16 md:mt-20 w-full max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
              <p className="text-gray-600 mb-8">
                I'm always eager to learn and collaborate on new projects.
                Feel free to reach out to me 🙂
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Contact Information</h3>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary h-5 w-5" />
                    <a 
                      href="mailto:noel.regis04@gmail.com" 
                      className="text-gray-700 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      noel.regis04@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary h-5 w-5" />
                    <a 
                      href="tel:+917319546900" 
                      className="text-gray-700 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +91 7319546900
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary h-5 w-5" />
                    <a 
                      href="https://maps.google.com/?q=Asansol,West+Bengal,India" 
                      className="text-gray-700 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Asansol, West Bengal, India
                    </a>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Connect with me</h3>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2"
                      onClick={() => openExternalLink("https://www.linkedin.com/in/noel-regis-aa07081b1/")}
                    >
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2"
                      onClick={() => openExternalLink("https://github.com/noelregis18")}
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2"
                      onClick={() => openExternalLink("https://x.com/NoelRegis8")}
                    >
                      <Twitter className="h-4 w-4" /> Twitter
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2"
                      onClick={() => openExternalLink("http://topmate.io/noel_regis")}
                    >
                      <ArrowRight className="h-4 w-4" /> Topmate
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
