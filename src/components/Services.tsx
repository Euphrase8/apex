import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home, 
  TrendingUp, 
  Calculator, 
  Building, 
  Briefcase, 
  MapPin,
  ArrowRight 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Home,
      title: "Buying & Selling",
      description: "Expert brokerage services for residential, commercial, and land transactions with professional negotiation and seamless closing management.",
      features: ["Market Analysis", "Negotiation Support", "Legal Documentation", "Closing Coordination"],
      cta: "Get Property Valuation",
      path: "/property-valuation"
    },
    {
      icon: Calculator,
      title: "Real Estate Appraisal",
      description: "Accurate property valuation reports for investments, refinancing, legal proceedings, and market positioning decisions.",
      features: ["Certified Appraisals", "Market Comparisons", "Investment Analysis", "Detailed Reports"],
      cta: "Order Appraisal",
      path: "/appraisal"
    },
    {
      icon: Building,
      title: "Property Management",
      description: "Full-service property management including tenant screening, maintenance coordination, rent collection, and financial reporting.",
      features: ["Tenant Screening", "Maintenance Management", "Rent Collection", "Financial Reporting"],
      cta: "Manage My Property",
      path: "/property-management"
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Strategic real estate investment guidance with market insights, ROI analysis, and portfolio optimization recommendations.",
      features: ["Market Research", "ROI Analysis", "Portfolio Planning", "Risk Assessment"],
      cta: "Get Investment Advice",
      path: "/investment-advisory"
    },
    {
      icon: MapPin,
      title: "Land Development",
      description: "End-to-end support for land acquisition, development planning, permit assistance, and strategic resale optimization.",
      features: ["Site Analysis", "Permit Support", "Development Planning", "Resale Strategy"],
      cta: "Discuss Land Project",
      path: "/land-development"
    },
    {
      icon: Briefcase,
      title: "Transaction Management",
      description: "Professional handling of complex real estate transactions with legal compliance, documentation, and administrative support.",
      features: ["Legal Compliance", "Document Preparation", "Timeline Management", "Closing Support"],
      cta: "Get Transaction Help",
      path: "/transaction-management"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Comprehensive Real Estate Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From property transactions to long-term management, we provide expert services 
            tailored to maximize your real estate investments and minimize your stress.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-primary-light transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                    onClick={() => navigate(service.path)}
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Every real estate situation is unique. Contact our experts for personalized service 
              recommendations and custom solutions tailored to your specific needs.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate('/consultation')}
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;