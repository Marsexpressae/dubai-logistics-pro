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

    // Open Graph / Twitter
    const prevOgTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content') ?? null;
    const prevOgDesc = document.querySelector('meta[property="og:description"]')?.getAttribute('content') ?? null;
    const prevOgImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content') ?? null;
    let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (!ogTitle) { ogTitle = document.createElement('meta'); ogTitle.setAttribute('property', 'og:title'); document.head.appendChild(ogTitle); }
    ogTitle.setAttribute('content', 'Air Freight Services | Mars Express');
    let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (!ogDesc) { ogDesc = document.createElement('meta'); ogDesc.setAttribute('property', 'og:description'); document.head.appendChild(ogDesc); }
    ogDesc.setAttribute('content', 'Fast international air cargo from Dubai — priority handling, temperature control and full documentation support.');
    let ogImage = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
    if (!ogImage) { ogImage = document.createElement('meta'); ogImage.setAttribute('property', 'og:image'); document.head.appendChild(ogImage); }
    ogImage.setAttribute('content', 'https://www.marsexpress.ae/opengraph-airfreight.png');

    const prevTwitterTitle = document.querySelector('meta[name="twitter:title"]')?.getAttribute('content') ?? null;
    const prevTwitterDesc = document.querySelector('meta[name="twitter:description"]')?.getAttribute('content') ?? null;
    const prevTwitterImage = document.querySelector('meta[name="twitter:image"]')?.getAttribute('content') ?? null;
    let twTitle = document.querySelector('meta[name="twitter:title"]') as HTMLMetaElement | null;
    if (!twTitle) { twTitle = document.createElement('meta'); twTitle.setAttribute('name', 'twitter:title'); document.head.appendChild(twTitle); }
    twTitle.setAttribute('content', 'Air Freight Services | Mars Express');
    let twDesc = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement | null;
    if (!twDesc) { twDesc = document.createElement('meta'); twDesc.setAttribute('name', 'twitter:description'); document.head.appendChild(twDesc); }
    twDesc.setAttribute('content', 'Fast international air cargo from Dubai — priority handling, temperature control and full documentation support.');
    let twImage = document.querySelector('meta[name="twitter:image"]') as HTMLMetaElement | null;
    if (!twImage) { twImage = document.createElement('meta'); twImage.setAttribute('name', 'twitter:image'); document.head.appendChild(twImage); }
    twImage.setAttribute('content', 'https://www.marsexpress.ae/opengraph-airfreight.png');

    // canonical
    const prevCanonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? null;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', 'https://www.marsexpress.ae/services/air-freight');

    return () => {
      document.title = prevTitle;
      if (meta) {
        if (prevMeta !== null) meta.setAttribute('content', prevMeta);
        else meta.remove();
      }
      if (ogTitle) {
        if (prevOgTitle !== null) ogTitle.setAttribute('content', prevOgTitle);
        else ogTitle.remove();
      }
      if (ogDesc) {
        if (prevOgDesc !== null) ogDesc.setAttribute('content', prevOgDesc);
        else ogDesc.remove();
      }
      if (ogImage) {
        if (prevOgImage !== null) ogImage.setAttribute('content', prevOgImage);
        else ogImage.remove();
      }
      if (twTitle) {
        if (prevTwitterTitle !== null) twTitle.setAttribute('content', prevTwitterTitle);
        else twTitle.remove();
      }
      if (twDesc) {
        if (prevTwitterDesc !== null) twDesc.setAttribute('content', prevTwitterDesc);
        else twDesc.remove();
      }
      if (twImage) {
        if (prevTwitterImage !== null) twImage.setAttribute('content', prevTwitterImage);
        else twImage.remove();
      }
      if (canonical) {
        if (prevCanonical !== null) canonical.setAttribute('href', prevCanonical);
        else canonical.remove();
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