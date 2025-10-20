import { CheckCircle, FileText, Clock, Shield, ArrowLeft, Plane } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import airFreightImage from "@/assets/air-freight.jpg";

const AirFreight = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const prevTitle = document.title;
    const prevMeta = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? null;
    document.title = "Air Freight Services | Smooth Flow Logistics";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Fast, reliable international air cargo services from Dubai. Priority routing, AWB handling, and temperature-controlled options.');

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
      description: "Priority routing for urgent shipments and reduced transit times.",
    },
    {
      icon: Shield,
      title: "Special Handling",
      description: "Temperature-controlled options and certified handling for sensitive cargo.",
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "AWB preparation, customs paperwork and regulatory compliance assistance.",
    },
  ];

  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <Button variant="ghost" onClick={() => navigate("/")} className="mb-8 hover:text-primary">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
            </Button>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                  <Plane className="w-4 h-4" />
                  <span className="text-sm font-semibold">Air Freight</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Air Freight Services</h1>
                <p className="text-xl text-muted-foreground mb-8">Fast, reliable international air cargo services for time-sensitive shipments.</p>
                <Button onClick={scrollToContact} size="lg" className="px-8">Request Air Quote</Button>
              </div>

              <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
                <img src={airFreightImage} alt="Air freight operations" className="rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why choose our air freight</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Global network, priority handling and end-to-end documentation support.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((b, index) => (
                <Card key={index} className="animate-fade-in border-border" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <b.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{b.title}</CardTitle>
                    <CardDescription className="text-base">{b.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Our air freight capabilities</h2>
            <div className="space-y-6">
              {[
                "Airport-to-airport and door-to-door options",
                "Consolidation and direct charters for urgent consignments",
                "Temperature-controlled and sensitive cargo handling",
                "Dangerous goods handling in line with IATA regulations",
                "AWB preparation, customs documentation and compliance",
                "Real-time tracking and proactive shipment updates",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${i * 40}ms` }}>
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="text-center py-8">
              <Button onClick={scrollToContact} size="lg">Request Air Quote</Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to ship by air?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Contact our team for a fast, competitive quote and immediate booking support.</p>
            <Button onClick={scrollToContact} size="lg" className="px-8">Get a Quote</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AirFreight;