
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
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
              <Button size="lg" className="px-8 py-6 text-md">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-md">
                See how it works <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-16 md:mt-20 w-full max-w-5xl mx-auto relative">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Weekday.works dashboard" 
                className="w-full h-auto"
                style={{
                  animation: 'float 6s ease-in-out infinite',
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
