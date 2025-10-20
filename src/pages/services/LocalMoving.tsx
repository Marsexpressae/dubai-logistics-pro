import React from "react";
import { CheckCircle, FileText, Clock, Shield, ArrowLeft, Truck } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import warehouseImage from "@/assets/warehouse.jpg";

const LocalMoving = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const prevTitle = document.title;
    const prevMeta = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? null;
    document.title = "Local Moving Services | Smooth Flow Logistics";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Tailored residential and commercial moving services in Dubai — packing, transport and unpacking with professional crews.');

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
      title: "On-time scheduling",
      description: "Flexible booking windows and reliable arrival times for local moves.",
    },
    {
      icon: Shield,
      title: "Secure handling",
      description: "Trained crews, protective packing and item-level care during transit.",
    },
    {
      icon: FileText,
      title: "Transparent pricing",
      description: "Clear quotes with no hidden fees — options for hourly or fixed-price moves.",
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
            <Button variant="ghost" onClick={() => navigate("/")} className="mb-8 hover:text-primary">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                  <Truck className="w-4 h-4" />
                  <span className="text-sm font-semibold">Local Moving</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Local Moving</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Tailored residential and commercial local moving services in Dubai. We combine careful packing, professional handling and timely delivery to give you a stress-free move.
                </p>
                <Button onClick={scrollToContact} size="lg" className="px-8">Request a Quote</Button>
              </div>

              <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
                <img src={warehouseImage} alt="Local moving" loading="lazy" decoding="async" className="rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why choose our Local Moving</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Experienced local movers focused on safety, timing and value.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="animate-fade-in border-border" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Local Moving - Details</h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">Our Local Moving service covers every step of your move: pre-move planning, secure packing, careful loading, transport and optional unpacking. We provide itemized quotes, optional insurance and post-move support to help you settle in quickly.</p>

              <h3 className="text-xl font-semibold">What we handle</h3>
              <ul className="list-disc ml-6 space-y-2 text-lg">
                <li>Full packing & unpacking using professional materials</li>
                <li>Disassembly and reassembly of furniture</li>
                <li>Short-term storage options if required</li>
                <li>White-glove handling for fragile & high-value items</li>
              </ul>

              <h3 className="text-xl font-semibold">Our process</h3>
              <ol className="list-decimal ml-6 space-y-2 text-lg">
                <li>Request a quote using our form or by phone</li>
                <li>Confirm booking and choose service options</li>
                <li>Move day: team arrives, packs and transports</li>
                <li>Delivery and optional unpacking/assembly</li>
              </ol>

              <div className="bg-primary/5 p-6 rounded-md">
                <h4 className="font-semibold">Guarantee & Insurance</h4>
                <p className="text-sm text-muted-foreground">We offer basic liability coverage; extended insurance packages available for valuable shipments. All moves are logged and photographed to ensure accountability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to move?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Contact us for a tailored local move plan and instant quote.</p>
            <Button onClick={scrollToContact} size="lg" className="px-8">Request a Quote</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LocalMoving;