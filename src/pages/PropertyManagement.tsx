import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Wrench, DollarSign, FileText, Shield, CheckCircle2, ArrowRight } from "lucide-react";

const PropertyManagement = () => {
  const services = [
    {
      icon: Users,
      title: "Tenant Management",
      description: "Screening, placement, and ongoing tenant relations"
    },
    {
      icon: Wrench,
      title: "Maintenance & Repairs",
      description: "24/7 emergency response and routine maintenance"
    },
    {
      icon: DollarSign,
      title: "Rent Collection",
      description: "Automated collection and financial reporting"
    },
    {
      icon: FileText,
      title: "Legal Compliance",
      description: "Lease agreements and regulatory compliance"
    },
    {
      icon: Shield,
      title: "Property Inspections",
      description: "Regular inspections and detailed reports"
    },
    {
      icon: Building,
      title: "Marketing & Leasing",
      description: "Professional listings and property showings"
    }
  ];

  const packages = [
    {
      title: "Basic Management",
      price: "6%",
      subtitle: "of monthly rent",
      features: [
        "Tenant screening & placement",
        "Rent collection",
        "Monthly financial reports",
        "Maintenance coordination",
        "Online owner portal"
      ]
    },
    {
      title: "Full Service",
      price: "8%",
      subtitle: "of monthly rent",
      popular: true,
      features: [
        "All Basic features",
        "24/7 emergency response",
        "Regular property inspections",
        "Legal compliance support",
        "Marketing & advertising",
        "Eviction handling"
      ]
    },
    {
      title: "Premium",
      price: "10%",
      subtitle: "of monthly rent",
      features: [
        "All Full Service features",
        "Property optimization consulting",
        "Renovation coordination",
        "Tax documentation support",
        "Dedicated account manager",
        "Priority service"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Full-Service Property Management
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Professional Property Management Services
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Let us handle the day-to-day operations of your property while you enjoy 
              passive income. Comprehensive management solutions for every property owner.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-light rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Pricing Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Management Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the service level that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`border-0 shadow-lg ${pkg.popular ? 'ring-2 ring-accent scale-105' : ''}`}>
                <CardHeader className="text-center">
                  {pkg.popular && (
                    <Badge className="mb-2 bg-accent text-accent-foreground w-fit mx-auto">
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle className="text-xl mb-2">{pkg.title}</CardTitle>
                  <div>
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-accent to-accent-light text-accent-foreground' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    Select Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Get a Custom Quote
                </CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your property and we'll create a tailored management plan.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number *
                    </label>
                    <Input type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Property Type *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single Family Home</SelectItem>
                        <SelectItem value="multi">Multi-Family (2-4 units)</SelectItem>
                        <SelectItem value="apartment">Apartment Complex</SelectItem>
                        <SelectItem value="condo">Condominium</SelectItem>
                        <SelectItem value="commercial">Commercial Property</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Property Address
                  </label>
                  <Input placeholder="123 Main Street, Seattle, WA 98101" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Number of Units
                    </label>
                    <Input type="number" placeholder="1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Desired Package
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic Management</SelectItem>
                        <SelectItem value="full">Full Service</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="custom">Custom - Need Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Additional Information
                  </label>
                  <Textarea 
                    placeholder="Tell us about your property, current situation, and specific needs..."
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-accent-foreground py-6"
                  size="lg"
                >
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Why Choose APEX?
                </h4>
                <ul className="space-y-3">
                  {[
                    "500+ properties under management",
                    "Average 95% occupancy rate",
                    "24/7 emergency response",
                    "Transparent monthly reporting",
                    "Local market expertise"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">
                  Multi-Property Discounts
                </h4>
                <p className="text-sm text-muted-foreground">
                  Manage 3+ properties with us and receive special volume pricing
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagement;
