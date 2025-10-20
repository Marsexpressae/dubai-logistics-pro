import { useEffect } from "react";
import { CheckCircle, FileText, Clock, Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import portOperationsImage from "@/assets/port-operations.jpg";

const CustomsClearance = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const prevTitle = document.title;
    const prevMeta = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? null;
    document.title = "Customs Clearance Services | Smooth Flow Logistics";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Streamlined customs clearance services in Dubai and UAE with full regulatory compliance, documentation and rapid processing.');

    return () => {
      document.title = prevTitle;
      if (meta) {
        if (prevMeta !== null) meta.setAttribute('content', prevMeta);
        else meta.remove();
      }
    };
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick turnaround time for all customs documentation and clearance procedures.",
    },
    {
      icon: Shield,
      title: "Compliance Guaranteed",
      description: "Full compliance with UAE customs regulations and international trade laws.",
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Complete assistance with all required customs documentation and paperwork.",
    },
  ];

  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-8 hover:text-primary"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm font-semibold">Expert Service</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Customs Clearance Services
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Streamlined customs clearance solutions in Dubai and across UAE. Our expert team ensures hassle-free import and export procedures with full regulatory compliance.
                </p>
                <Button onClick={scrollToContact} size="lg" className="px-8">
                  Request Customs Clearance
                </Button>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
                <img
                  src={portOperationsImage}
                  alt="Customs Clearance Operations"
                  loading="lazy"
                  decoding="async"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Customs Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional customs clearance with expertise in UAE regulations
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="animate-fade-in border-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Customs Clearance Services Include
            </h2>
            <div className="space-y-6">
              {[
                "Import and export customs clearance",
                "Duty and tax calculation and payment",
                "Classification of goods (HS codes)",
                "Certificate of origin processing",
                "Free zone customs procedures",
                "Temporary import/export permits",
                "Commercial and personal shipment clearance",
                "Dubai Customs and Federal Customs Authority liaison",
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Need Customs Clearance Assistance?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for expert customs clearance services in Dubai and UAE
            </p>
            <Button onClick={scrollToContact} size="lg" className="px-8">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomsClearance;
