import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => navigate('/')} aria-label="Go to home" className="p-0 focus:outline-none inline-flex items-center">
              <img src="/marslogo.svg" alt="Mars Express" className="h-12 w-auto object-contain" loading="lazy" decoding="async" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => scrollToSection("services")}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                          >
                            <div className="text-sm font-medium leading-none">All Services</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              View our complete range of logistics services
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => navigate("/services/local-moving")}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                          >
                            <div className="text-sm font-medium leading-none">Local Moving</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Packing, transport and local moves across Dubai
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => navigate("/services/air-freight")}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                          >
                            <div className="text-sm font-medium leading-none">Air Freight</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Fast international air cargo services
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => navigate("/services/customs-clearance")}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                          >
                            <div className="text-sm font-medium leading-none">Customs Clearance</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Expert customs clearance services in Dubai and UAE
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => navigate("/services/lcl")}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                          >
                            <div className="text-sm font-medium leading-none">LCL</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Less Container Load consolidation services
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => navigate("/services/fcl")}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                          >
                            <div className="text-sm font-medium leading-none">FCL</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Full Container Load dedicated services
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => navigate("/services/cross-stuffing")}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                          >
                            <div className="text-sm font-medium leading-none">Cross Stuffing</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Container stuffing and unstuffing services
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => navigate("/services/container-loading-offloading")}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                          >
                            <div className="text-sm font-medium leading-none">Container Loading & Offloading</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Loading and offloading solutions with modern equipment
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => navigate("/services/road-transport")}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                          >
                            <div className="text-sm font-medium leading-none">Road Transport</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Ground transport across UAE and GCC
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} size="lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors font-medium"
            >
              About
            </button>
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between px-4 py-2 hover:bg-muted rounded-lg transition-colors font-medium"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
                  {servicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <button
                    onClick={() => {
                      scrollToSection("services");
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors text-sm"
                  >
                    All Services
                  </button>
                  <button
                    onClick={() => {
                      navigate("/services/local-moving");
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors text-sm"
                  >
                    Local Moving
                  </button>
                  <button
                    onClick={() => {
                      navigate("/services/air-freight");
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors text-sm"
                  >
                    Air Freight
                  </button>
                  <button
                    onClick={() => {
                      navigate("/services/customs-clearance");
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors text-sm"
                  >
                    Customs Clearance
                  </button>
                  <button
                    onClick={() => {
                      navigate("/services/lcl");
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors text-sm"
                  >
                    LCL
                  </button>
                  <button
                    onClick={() => {
                      navigate("/services/fcl");
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors text-sm"
                  >
                    FCL
                  </button>
                  <button
                    onClick={() => {
                      navigate("/services/cross-stuffing");
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors text-sm"
                  >
                    Cross Stuffing
                  </button>
                  <button
                    onClick={() => {
                      navigate("/services/container-loading-offloading");
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors text-sm"
                  >
                    Container Loading & Offloading
                  </button>
                  <button
                    onClick={() => {
                      navigate("/services/road-transport");
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors text-sm"
                  >
                    Road Transport
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors font-medium"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full" size="lg">
              Get Started
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
