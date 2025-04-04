
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/auth');
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col justify-center pt-24 pb-12 md:pt-32 md:pb-24 px-4">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Get more done with <span className="text-gradient">weekday.works</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The all-in-one workspace for your tasks, calendar, and documents.
              Streamline your workflow and boost productivity.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button 
                size="lg"
                className="gap-2"
                onClick={handleGetStarted}
              >
                Get Started Free <ArrowRight size={16} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToFeatures}
              >
                See how it works
              </Button>
            </div>

            {/* Hero image */}
            <div className="relative mx-auto max-w-4xl">
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                <img 
                  src="/placeholder.svg" 
                  alt="weekday.works dashboard" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
