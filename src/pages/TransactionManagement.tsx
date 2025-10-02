import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Briefcase, FileCheck, Scale, Clock, Shield, Users, CheckCircle2, ArrowRight } from "lucide-react";

const TransactionManagement = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Document Management",
      description: "Complete preparation and review of all transaction documents"
    },
    {
      icon: Scale,
      title: "Legal Compliance",
      description: "Ensure adherence to all real estate laws and regulations"
    },
    {
      icon: Clock,
      title: "Timeline Coordination",
      description: "Keep your transaction on schedule from contract to closing"
    },
    {
      icon: Users,
      title: "Party Coordination",
      description: "Manage communication between all stakeholders"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Identify and address potential transaction issues"
    },
    {
      icon: Briefcase,
      title: "Closing Support",
      description: "Smooth closing process with complete oversight"
    }
  ];

  const transactionTypes = [
    {
      title: "Residential Purchase/Sale",
      price: "$500 - $1,500",
      features: [
        "Contract review and negotiation",
        "Inspection coordination",
        "Title and escrow management",
        "Closing coordination"
      ]
    },
    {
      title: "Commercial Transaction",
      price: "$2,500 - $10,000+",
      features: [
        "Due diligence management",
        "Complex contract handling",
        "Multi-party coordination",
        "Post-closing support"
      ]
    },
    {
      title: "1031 Exchange",
      price: "$1,500 - $5,000",
      features: [
        "IRS compliance support",
        "Qualified intermediary coordination",
        "Timeline management",
        "Documentation assistance"
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
              Transaction Management
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Professional Real Estate Transaction Services
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Navigate complex real estate transactions with confidence. We handle all the 
              details so you can focus on your goals while we ensure a smooth, compliant closing.
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

        {/* Transaction Types */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Transaction Management Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional support for all transaction types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transactionTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{type.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
                  Get Transaction Management Support
                </CardTitle>
                <p className="text-muted-foreground">
                  Let us handle the complexity of your real estate transaction.
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
                      Your Role *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buyer">Buyer</SelectItem>
                        <SelectItem value="seller">Seller</SelectItem>
                        <SelectItem value="agent">Real Estate Agent</SelectItem>
                        <SelectItem value="investor">Investor</SelectItem>
                        <SelectItem value="attorney">Attorney</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Transaction Type *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select transaction type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential-purchase">Residential Purchase</SelectItem>
                      <SelectItem value="residential-sale">Residential Sale</SelectItem>
                      <SelectItem value="commercial">Commercial Transaction</SelectItem>
                      <SelectItem value="1031-exchange">1031 Exchange</SelectItem>
                      <SelectItem value="investment">Investment Property</SelectItem>
                      <SelectItem value="land">Land Purchase/Sale</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Transaction Status
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select current status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="planning">Planning - Not yet under contract</SelectItem>
                      <SelectItem value="negotiating">Negotiating offer</SelectItem>
                      <SelectItem value="under-contract">Under contract</SelectItem>
                      <SelectItem value="inspection">In inspection period</SelectItem>
                      <SelectItem value="financing">Finalizing financing</SelectItem>
                      <SelectItem value="closing-soon">Approaching closing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Property Address (if applicable)
                  </label>
                  <Input placeholder="123 Main Street, Seattle, WA 98101" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Estimated Property Value
                    </label>
                    <Input type="number" placeholder="500000" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Expected Closing Date
                    </label>
                    <Input type="date" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Transaction Details & Special Circumstances *
                  </label>
                  <Textarea 
                    placeholder="Describe your transaction, any complexities, specific concerns, or areas where you need assistance..."
                    className="min-h-[150px] resize-none"
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-accent-foreground py-6"
                  size="lg"
                >
                  Request Transaction Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll contact you within 24 hours to discuss your transaction needs and provide a detailed quote.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <Briefcase className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-4 text-center">
                  Why Use Our Services?
                </h4>
                <ul className="space-y-3">
                  {[
                    "15+ years transaction experience",
                    "99% on-time closing rate",
                    "Professional document review",
                    "Proactive issue resolution",
                    "Full compliance assurance"
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
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Initial consultation",
                  "Document preparation",
                  "All party coordination",
                  "Deadline management",
                  "Issue resolution",
                  "Closing oversight"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  Complex Transaction?
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  We specialize in handling complicated deals
                </p>
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  Custom pricing available
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionManagement;
