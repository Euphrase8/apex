import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const services = [
    "Buying & Selling",
    "Property Management", 
    "Real Estate Appraisal",
    "Investment Advisory",
    "Land Development",
    "Transaction Management"
  ];

  const resources = [
    "Market Reports",
    "Investment Guide",
    "Property Calculator",
    "Mortgage Resources",
    "Legal Documents",
    "FAQ"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">APEX</h3>
                <p className="text-sm text-primary-foreground/80 -mt-1">Property Management</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Maximizing Value. Minimizing Hassle. Your trusted partner for comprehensive 
              real estate services in the Pacific Northwest.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="text-primary-foreground/80 hover:text-accent-light hover:bg-primary-light/20 p-2"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-accent-light transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-accent-light transition-colors duration-200 text-sm"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent-light flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">(555) 123-APEX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent-light flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">info@apexproperty.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent-light flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Downtown Plaza, Suite 400<br />
                  Seattle, WA 98101
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6 p-4 bg-primary-light/20 rounded-lg">
              <h5 className="font-semibold text-sm mb-2">Stay Updated</h5>
              <p className="text-xs text-primary-foreground/80 mb-3">
                Get market insights and property updates delivered to your inbox.
              </p>
              <Button 
                size="sm" 
                className="bg-accent hover:bg-accent-light text-accent-foreground w-full"
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-light/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 APEX Property Management Company. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent-light transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent-light transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent-light transition-colors duration-200">
                Accessibility
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent-light transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;