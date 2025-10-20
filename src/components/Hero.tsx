import { ArrowRight, Package, Ship, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ship.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cargo ship with containers at sea"
          className="w-full h-full object-cover"
        / loading="lazy">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Ship className="w-4 h-4" />
            <span className="text-sm font-semibold">Global Logistics Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-in leading-tight">
            Mars Express
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in leading-relaxed">
            Your trusted partner for seamless transportation and logistics solutions across Dubai and worldwide. We deliver excellence, on time, every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-zoom-in">
            <Button onClick={scrollToContact} size="lg" className="text-lg px-8 py-6">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
            >
              Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 animate-fade-in">
            <div className="text-center">
              <Package className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">5000+</div>
              <div className="text-white/80 text-sm">Shipments Delivered</div>
            </div>
            <div className="text-center">
              <Ship className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-white/80 text-sm">Countries Served</div>
            </div>
            <div className="text-center">
              <Plane className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-white/80 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
