import { Target, Award, Users, Globe } from "lucide-react";
import portOperationsImage from "@/assets/port-operations.jpg";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide reliable, efficient, and innovative logistics solutions that exceed customer expectations.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality service with attention to detail in every shipment.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Building long-term partnerships through personalized service and dedicated support.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connecting businesses worldwide with our extensive network and local expertise.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-semibold">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted Logistics Partner Since 1996
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Based in Dubai, we are a leading logistics and transport company with over 25 years of experience in the industry. Our commitment to excellence and customer satisfaction has made us the preferred choice for businesses across the globe.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We specialize in providing comprehensive logistics solutions including air freight, sea freight, road transport, warehousing, and customs clearance. Our team of experts ensures your cargo reaches its destination safely, on time, and cost-effectively.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-zoom-in">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={portOperationsImage}
                alt="Port operations with cranes and containers"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
