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
  let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
  if (!ogTitle) { ogTitle = document.createElement('meta'); ogTitle.setAttribute('property', 'og:title'); document.head.appendChild(ogTitle); }
  ogTitle.setAttribute('content', 'Cross Stuffing | Mars Express');
  let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
  if (!ogDesc) { ogDesc = document.createElement('meta'); ogDesc.setAttribute('property', 'og:description'); document.head.appendChild(ogDesc); }
  ogDesc.setAttribute('content', 'Secure cross-stuffing services — deconsolidation, re-stuffing, inventory checks and carrier coordination.');
  let ogImage = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
  if (!ogImage) { ogImage = document.createElement('meta'); ogImage.setAttribute('property', 'og:image'); document.head.appendChild(ogImage); }
  ogImage.setAttribute('content', 'https://www.marsexpress.ae/opengraph-crossstuffing.png');
  let twTitle = document.querySelector('meta[name="twitter:title"]') as HTMLMetaElement | null;
  if (!twTitle) { twTitle = document.createElement('meta'); twTitle.setAttribute('name', 'twitter:title'); document.head.appendChild(twTitle); }
  twTitle.setAttribute('content', 'Cross Stuffing | Mars Express');
  let twDesc = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement | null;
  if (!twDesc) { twDesc = document.createElement('meta'); twDesc.setAttribute('name', 'twitter:description'); document.head.appendChild(twDesc); }
  twDesc.setAttribute('content', 'Secure cross-stuffing services — deconsolidation, re-stuffing, inventory checks and carrier coordination.');
  let twImage = document.querySelector('meta[name="twitter:image"]') as HTMLMetaElement | null;
  if (!twImage) { twImage = document.createElement('meta'); twImage.setAttribute('name', 'twitter:image'); document.head.appendChild(twImage); }
  twImage.setAttribute('content', 'https://www.marsexpress.ae/opengraph-crossstuffing.png');
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
  canonical.setAttribute('href', 'https://www.marsexpress.ae/services/cross-stuffing');

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