import React from "react";
import { CheckCircle, FileText, Clock, Shield, ArrowLeft, Container } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import portOperationsImage from "@/assets/port-operations.jpg";

const LCL = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const prevTitle = document.title;
    const prevMeta = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? null;
    document.title = "LCL Services | Smooth Flow Logistics";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Less-than-container-load consolidation services in Dubai — cost-efficient shipping for smaller consignments with secure consolidation and documentation.');

    return () => {
      document.title = prevTitle;
      if (meta) {
        if (prevMeta !== null) meta.setAttribute('content', prevMeta);
        else meta.remove();
      }
    };
  }, []);

  const benefits = [
    { icon: Clock, title: "Cost-effective", description: "Lower cost per shipment through consolidation." },
    { icon: Shield, title: "Secure storage", description: "Bonded consolidation facilities for safety and compliance." },
    { icon: FileText, title: "Documentation", description: "End-to-end documentation handling including customs forms." },
  ];

  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Button variant="ghost" onClick={() => navigate("/")} className="mb-8 hover:text-primary">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
            </Button>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Container className="w-4 h-4" />
              <span className="text-sm font-semibold">LCL Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">LCL (Less Container Load)</h1>
            <p className="text-lg text-muted-foreground mb-6">Flexible consolidation for smaller consignments — we reduce cost while ensuring reliable transit and careful handling.</p>
            <Button onClick={scrollToContact} size="lg">Get a Quote</Button>
          </div>

          <div className="relative">
            <img src={portOperationsImage} alt="LCL operations" loading="lazy" decoding="async" className="rounded-lg shadow-2xl" />
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why choose our LCL service</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Optimised for small consignments, our LCL service balances cost and transit certainty with strong consolidation protocols.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((b, i) => (
                <Card key={i} className="animate-fade-in border-border" style={{ animationDelay: `${i * 100}ms` }}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"><b.icon className="w-6 h-6 text-primary" /></div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">LCL - Details</h2>
            <p className="text-lg text-muted-foreground mb-4">We consolidate cargo at secure facilities, allocate space in shared containers and handle documentation, ensuring traceability and cost-efficiency.</p>
            <h3 className="text-xl font-semibold">How it works</h3>
            <ol className="list-decimal ml-6 space-y-2 text-lg text-muted-foreground">
              <li>Book and provide cargo details.</li>
              <li>We receive and consolidate cargo.</li>
              <li>Container shipped and deconsolidated at destination.</li>
              <li>Final-mile delivery arranged as required.</li>
            </ol>
            <div className="text-center py-8">
              <Button onClick={scrollToContact} size="lg">Request a Quote</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LCL;