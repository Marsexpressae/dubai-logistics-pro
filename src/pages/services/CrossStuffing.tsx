import React from "react";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import portOperationsImage from "@/assets/port-operations.jpg";

const CrossStuffing: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const prevTitle = document.title;
    const prevMeta = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? null;
    document.title = "Cross Stuffing Services | Smooth Flow Logistics";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Professional container stuffing and un-stuffing services with inventory checks, seal management and carrier coordination.');

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cross Stuffing</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Professional container stuffing and unstuffing services — we ensure cargo is properly consolidated, secured and documented for onward carriage.
            </p>
            <Button onClick={scrollToContact} size="lg">Contact Us</Button>
          </div>

          <div className="relative">
            <img src={portOperationsImage} alt="Cross stuffing" loading="lazy" decoding="async" className="rounded-lg shadow-2xl" />
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            <h2 className="text-2xl font-bold">Service overview</h2>
            <p className="text-sm text-muted-foreground">Cross stuffing requires careful handling and documentation to transfer cargo safely between modes or containers. Our teams handle the physical operations and the paperwork to keep transit times predictable.</p>

            <h3 className="text-lg font-semibold">What we do</h3>
            <ul className="list-disc ml-6 text-sm text-muted-foreground">
              <li>Safe deconsolidation and re-stuffing into new containers</li>
              <li>Inventory checks and seal management</li>
              <li>Coordination with ports and carriers</li>
            </ul>

            <div className="text-center py-8">
              <Button onClick={scrollToContact} size="lg">Contact Us</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CrossStuffing;