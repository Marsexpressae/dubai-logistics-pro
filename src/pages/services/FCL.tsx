import { CheckCircle, FileText, Clock, Shield, ArrowLeft, Container } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import portOperationsImage from "@/assets/port-operations.jpg";
import { useEffect } from "react";

const FCL = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const prevTitle = document.title;
    const prevMeta = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? null;
    document.title = "FCL Services | Smooth Flow Logistics";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
  meta.setAttribute('content', 'Full Container Load (FCL) shipping for large-volume consignments — dedicated containers, secure handling and reliable schedules.');

  // Open Graph / Twitter
  let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
  if (!ogTitle) { ogTitle = document.createElement('meta'); ogTitle.setAttribute('property', 'og:title'); document.head.appendChild(ogTitle); }
  ogTitle.setAttribute('content', 'FCL Services | Mars Express');
  let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
  if (!ogDesc) { ogDesc = document.createElement('meta'); ogDesc.setAttribute('property', 'og:description'); document.head.appendChild(ogDesc); }
  ogDesc.setAttribute('content', 'Dedicated container services for large shipments — secure handling and scheduled departures.');
  let ogImage = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
  if (!ogImage) { ogImage = document.createElement('meta'); ogImage.setAttribute('property', 'og:image'); document.head.appendChild(ogImage); }
  ogImage.setAttribute('content', 'https://www.marsexpress.ae/opengraph-fcl.png');
  let twTitle = document.querySelector('meta[name="twitter:title"]') as HTMLMetaElement | null;
  if (!twTitle) { twTitle = document.createElement('meta'); twTitle.setAttribute('name', 'twitter:title'); document.head.appendChild(twTitle); }
  twTitle.setAttribute('content', 'FCL Services | Mars Express');
  let twDesc = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement | null;
  if (!twDesc) { twDesc = document.createElement('meta'); twDesc.setAttribute('name', 'twitter:description'); document.head.appendChild(twDesc); }
  twDesc.setAttribute('content', 'Dedicated container services for large shipments — secure handling and scheduled departures.');
  let twImage = document.querySelector('meta[name="twitter:image"]') as HTMLMetaElement | null;
  if (!twImage) { twImage = document.createElement('meta'); twImage.setAttribute('name', 'twitter:image'); document.head.appendChild(twImage); }
  twImage.setAttribute('content', 'https://www.marsexpress.ae/opengraph-fcl.png');

  // canonical
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
  canonical.setAttribute('href', 'https://www.marsexpress.ae/services/fcl');

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
      title: "Dedicated capacity",
      description: "Full container for single consignment with predictable schedules.",
    },
    {
      icon: Shield,
      title: "Security & control",
      description: "Exclusive container reduces handling and exposure.",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Comprehensive export documentation and customs support.",
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
                  <Container className="w-4 h-4" />
                  <span className="text-sm font-semibold">FCL Services</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">FCL (Full Container Load)</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Exclusive container use for larger shipments — ideal for direct, consolidated transit with minimal handling exposures.
                </p>
                <Button onClick={scrollToContact} size="lg" className="px-8">
                  Request FCL Service
                </Button>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
                <img
                  src={portOperationsImage}
                  alt="FCL operations"
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why choose FCL with us</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Direct routing, exclusive capacity and enhanced security for large-volume shipments.</p>
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

        {/* Services Details */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">FCL - Details</h2>
            <p className="text-lg text-muted-foreground mb-4">Our FCL service supports standard and specialised containers (reefer, flat rack, open top). We manage schedules, stuffing/unstuffing and provide documentation support to streamline export/import.</p>
            <h3 className="text-xl font-semibold">Typical use cases</h3>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Bulk shipments for retailers or manufacturers</li>
              <li>Project cargo requiring exclusive container use</li>
              <li>Temperature-controlled large-volume consignments</li>
            </ul>
            <div className="text-center py-8">
              <Button onClick={scrollToContact} size="lg">Request Service</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FCL;