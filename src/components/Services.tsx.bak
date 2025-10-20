import { Package, Ship, Plane, Truck, Container, PackageCheck, ArrowRight, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import warehouseImage from "@/assets/warehouse.jpg";
import airFreightImage from "@/assets/air-freight.jpg";
import portOperationsImage from "@/assets/port-operations.jpg";
import roadTransportImage from "@/assets/road-transport.jpg";

const services = [
  {
    icon: Package,
    title: "Local Moving",
    description: "Professional local moving services within Dubai with careful handling and timely delivery.",
    image: warehouseImage,
    link: null,
  },
  {
    icon: PackageCheck,
    title: "LCL (Less Container Load)",
    description: "Cost-effective solutions for smaller shipments consolidated with other cargo.",
    image: portOperationsImage,
    link: null,
  },
  {
    icon: Container,
    title: "FCL (Full Container Load)",
    description: "Dedicated container services for large shipments with enhanced security and speed.",
    image: portOperationsImage,
    link: null,
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo services for time-sensitive shipments worldwide.",
    image: airFreightImage,
    link: null,
  },
  {
    icon: Ship,
    title: "Cross Stuffing",
    description: "Expert container stuffing and unstuffing services with professional handling.",
    image: portOperationsImage,
    link: null,
  },
  {
    icon: Container,
    title: "Container Loading & Offloading",
    description: "Safe and efficient container operations with modern equipment and trained staff.",
    image: portOperationsImage,
    link: null,
  },
  {
    icon: Truck,
    title: "Road Transport",
    description: "Reliable ground transportation across UAE and GCC countries with modern fleet.",
    image: roadTransportImage,
    link: null,
  },
  {
    icon: FileText,
    title: "Customs Clearance",
    description: "Expert customs clearance services ensuring smooth import/export procedures in UAE.",
    image: portOperationsImage,
    link: "/services/customs-clearance",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceClick = (link: string | null) => {
    if (link) {
      navigate(link);
    } else {
      scrollToContact();
    }
  };

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Ship className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Logistics Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From local moving to international shipping, we provide comprehensive logistics services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  onClick={() => handleServiceClick(service.link)}
                  className="group/btn hover:text-primary p-0"
                >
                  {service.link ? "View Details" : "Learn More"}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button onClick={scrollToContact} size="lg" className="px-8">
            Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
