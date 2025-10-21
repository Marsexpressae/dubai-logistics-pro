import React from "react";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import roadTransportImage from "@/assets/road-transport.jpg";

const RoadTransport: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const prevTitle = document.title;
    const prevMeta = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? null;
    document.title = "Road Transport | Smooth Flow Logistics";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
  meta.setAttribute('content', 'Reliable ground transportation across UAE and GCC: FTL, LTL and scheduled distribution with GPS tracking and professional drivers.');
  let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
  if (!ogTitle) { ogTitle = document.createElement('meta'); ogTitle.setAttribute('property', 'og:title'); document.head.appendChild(ogTitle); }
  ogTitle.setAttribute('content', 'Road Transport | Mars Express');
  let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
  if (!ogDesc) { ogDesc = document.createElement('meta'); ogDesc.setAttribute('property', 'og:description'); document.head.appendChild(ogDesc); }
  ogDesc.setAttribute('content', 'Reliable FTL and LTL services across UAE and GCC with GPS tracking and temperature-controlled options.');
  let ogImage = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
  if (!ogImage) { ogImage = document.createElement('meta'); ogImage.setAttribute('property', 'og:image'); document.head.appendChild(ogImage); }
  ogImage.setAttribute('content', 'https://www.marsexpress.ae/opengraph-road.png');
  let twTitle = document.querySelector('meta[name="twitter:title"]') as HTMLMetaElement | null;
  if (!twTitle) { twTitle = document.createElement('meta'); twTitle.setAttribute('name', 'twitter:title'); document.head.appendChild(twTitle); }
  twTitle.setAttribute('content', 'Road Transport | Mars Express');
  let twDesc = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement | null;
  if (!twDesc) { twDesc = document.createElement('meta'); twDesc.setAttribute('name', 'twitter:description'); document.head.appendChild(twDesc); }
  twDesc.setAttribute('content', 'Reliable FTL and LTL services across UAE and GCC with GPS tracking and temperature-controlled options.');
  let twImage = document.querySelector('meta[name="twitter:image"]') as HTMLMetaElement | null;
  if (!twImage) { twImage = document.createElement('meta'); twImage.setAttribute('name', 'twitter:image'); document.head.appendChild(twImage); }
  twImage.setAttribute('content', 'https://www.marsexpress.ae/opengraph-road.png');
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
  canonical.setAttribute('href', 'https://www.marsexpress.ae/services/road-transport');

    return () => {
      document.title = prevTitle;
      if (meta) {
        if (prevMeta !== null) meta.setAttribute('content', prevMeta);
        else meta.remove();
      }
    };
  }, []);

  const scrollToContact = () => {
    navigate("/", { state: { scrollTo: "contact" } });
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-24 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Button variant="ghost" onClick={() => navigate("/")} className="mb-8 hover:text-primary">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Road Transport</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Reliable ground transportation across UAE and GCC with a modern fleet, GPS tracking and professional drivers for on-time deliveries.
            </p>
            <Button onClick={scrollToContact} size="lg">Request Transport</Button>
          </div>

          <div className="relative">
            <img src={roadTransportImage} alt="Road transport" loading="lazy" decoding="async" className="rounded-lg shadow-2xl" />
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            <h2 className="text-2xl font-bold">Road transport services</h2>
            <p className="text-sm text-muted-foreground">We provide full truckload (FTL), less-than-truckload (LTL) and scheduled distribution services across the UAE and GCC with real-time tracking and temperature-controlled options.</p>

            <h3 className="text-lg font-semibold">Service highlights</h3>
            <ul className="list-disc ml-6 text-sm text-muted-foreground">
              <li>Dedicated FTL and consolidated LTL services</li>
              <li>GPS tracking and route optimization</li>
              <li>Special handling for hazardous or temperature-sensitive freight</li>
            </ul>

            <div className="text-center py-8">
              <Button onClick={scrollToContact} size="lg">Request Transport</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RoadTransport;