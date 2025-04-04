
import { 
  Calendar, Clock, ListChecks, Users, 
  FileText, BarChart, MessageSquare, LucideIcon
} from "lucide-react";

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureItem = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col items-start p-6 rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="p-3 rounded-full bg-blue-50 mb-4">
        <Icon className="h-6 w-6 text-secondary" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Schedule & Calendar",
      description: "Plan your week with a powerful calendar and scheduling tools that keep you on track."
    },
    {
      icon: ListChecks,
      title: "Task Management",
      description: "Create, organize, and track your tasks in a flexible system that adapts to your workflow."
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Track time spent on projects and tasks to improve your productivity and billing."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work seamlessly with your team in a shared workspace that keeps everyone aligned."
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Create, edit, and share documents that keep your work organized and accessible."
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Get insights into your productivity and team performance with detailed reports."
    },
    {
      icon: MessageSquare,
      title: "Team Communication",
      description: "Chat and communicate with your team in context, right where the work happens."
    },
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need for productive workdays</h2>
          <p className="text-lg text-gray-600">
            A complete suite of tools designed to help you work smarter, not harder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
