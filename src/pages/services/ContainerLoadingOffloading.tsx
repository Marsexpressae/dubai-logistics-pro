import React from "react";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import portOperationsImage from "@/assets/port-operations.jpg";

const ContainerLoadingOffloading: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const prevTitle = document.title;
    const prevMeta = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? null;
    document.title = "Container Loading & Offloading | Smooth Flow Logistics";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Efficient container loading and offloading services using modern equipment and certified staff to reduce dwell time and damage risk.');

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Container Loading & Offloading</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Safe and efficient container loading and offloading services using modern equipment and trained staff to minimize dwell time and damage risk.
            </p>
            <Button onClick={scrollToContact} size="lg">Request Service</Button>
          </div>

          <div className="relative">
            <img src={portOperationsImage} alt="Container operations" loading="lazy" decoding="async" className="rounded-lg shadow-2xl" />
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            <h2 className="text-2xl font-bold">Operational capabilities</h2>
            <p className="text-sm text-muted-foreground">We provide end-to-end loading/offloading: planning, equipment (forklifts, spreaders), certified staff and documentation to ensure swift operations at origin and destination terminals.</p>

            <h3 className="text-lg font-semibold">Capabilities</h3>
            <ul className="list-disc ml-6 text-sm text-muted-foreground">
              <li>Forklift and crane-assisted loading</li>
              <li>Specialized lashings and dunnage</li>
              <li>Pre-shipment inspections and weight checks</li>
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

export default ContainerLoadingOffloading;