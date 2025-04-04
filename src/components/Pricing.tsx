
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlanFeature {
  included: boolean;
  text: string;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  buttonText: string;
  popular?: boolean;
  features: PlanFeature[];
}

const Pricing = () => {
  const plans: PricingPlan[] = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for individuals just getting started",
      buttonText: "Get Started",
      features: [
        { included: true, text: "Up to 10 projects" },
        { included: true, text: "Basic calendar" },
        { included: true, text: "Task management" },
        { included: false, text: "Team collaboration" },
        { included: false, text: "Advanced reporting" },
        { included: false, text: "Priority support" },
      ],
    },
    {
      name: "Pro",
      price: "$10",
      description: "For professionals who need more power",
      buttonText: "Get Pro",
      popular: true,
      features: [
        { included: true, text: "Unlimited projects" },
        { included: true, text: "Advanced calendar" },
        { included: true, text: "Task management" },
        { included: true, text: "Up to 5 team members" },
        { included: true, text: "Basic reporting" },
        { included: false, text: "Priority support" },
      ],
    },
    {
      name: "Business",
      price: "$25",
      description: "For teams that need to collaborate seamlessly",
      buttonText: "Get Business",
      features: [
        { included: true, text: "Unlimited projects" },
        { included: true, text: "Advanced calendar" },
        { included: true, text: "Task management" },
        { included: true, text: "Unlimited team members" },
        { included: true, text: "Advanced reporting" },
        { included: true, text: "Priority support" },
      ],
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-gray-600">
            Choose the plan that's right for you or your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden border ${
                plan.popular 
                  ? "border-secondary shadow-md transform md:scale-105 bg-white" 
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-semibold py-1 px-3 rounded-bl">
                  Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Button 
                  className={`w-full ${plan.popular ? "" : "bg-gray-800 hover:bg-gray-700"}`}
                >
                  {plan.buttonText}
                </Button>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className={`p-0.5 rounded-full mt-1 ${feature.included ? "bg-green-100" : "bg-gray-100"}`}>
                        <Check
                          size={12}
                          className={feature.included ? "text-green-600" : "text-gray-400"}
                        />
                      </div>
                      <span className={`ml-3 text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
