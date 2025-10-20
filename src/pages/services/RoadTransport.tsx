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