import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, FileText, Compass, Building2, TrendingUp, Users, CheckCircle2, ArrowRight } from "lucide-react";

const LandDevelopment = () => {
  const services = [
    {
      icon: Compass,
      title: "Site Analysis",
      description: "Comprehensive feasibility studies and land use evaluation"
    },
    {
      icon: FileText,
      title: "Permit Assistance",
      description: "Navigate zoning regulations and secure necessary permits"
    },
    {
      icon: Building2,
      title: "Development Planning",
      description: "Strategic planning for residential, commercial, or mixed-use projects"
    },
    {
      icon: Users,
      title: "Contractor Network",
      description: "Connect with vetted builders and development partners"
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Identify highest and best use opportunities"
    },
    {
      icon: MapPin,
      title: "Acquisition Support",
      description: "Find and negotiate land purchase deals"
    }
  ];

  const projectTypes = [
    {
      title: "Residential Subdivision",
      description: "Single-family or multi-family housing developments",
      timeline: "12-24 months"
    },
    {
      title: "Commercial Development",
      description: "Retail, office, or industrial properties",
      timeline: "18-36 months"
    },
    {
      title: "Mixed-Use Projects",
      description: "Combined residential and commercial spaces",
      timeline: "24-48 months"
    }
  ];

  const process = [
    { step: "1", title: "Initial Consultation", desc: "Discuss vision and feasibility" },
    { step: "2", title: "Site Evaluation", desc: "Comprehensive land analysis" },
    { step: "3", title: "Planning & Permits", desc: "Zoning and regulatory approval" },
    { step: "4", title: "Development", desc: "Construction and build-out" },
    { step: "5", title: "Marketing & Sale", desc: "Exit strategy execution" }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Land Development Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Transform Raw Land into Profitable Projects
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              From site acquisition to final sale, we guide you through every phase of land 
              development with expert planning, permitting, and project management.
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

        {/* Project Types */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Development Project Types
            </h2>
            <p className="text-xl text-muted-foreground">
              We manage all types of land development projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    Typical Timeline: {type.timeline}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Discuss Your Land Development Project
                </CardTitle>
                <p className="text-muted-foreground">
                  Share details about your land or development concept and we'll help you evaluate the opportunity.
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
                      Company (if applicable)
                    </label>
                    <Input placeholder="Company Name" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Project Stage *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select current stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="looking">Looking for land to purchase</SelectItem>
                      <SelectItem value="own">Already own land</SelectItem>
                      <SelectItem value="planning">Planning phase</SelectItem>
                      <SelectItem value="permitting">Need permitting help</SelectItem>
                      <SelectItem value="development">Ready for development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Development Type Interest
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select development type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Subdivision</SelectItem>
                      <SelectItem value="commercial">Commercial Development</SelectItem>
                      <SelectItem value="mixed-use">Mixed-Use Project</SelectItem>
                      <SelectItem value="industrial">Industrial/Warehouse</SelectItem>
                      <SelectItem value="agricultural">Agricultural Development</SelectItem>
                      <SelectItem value="unsure">Not Sure - Need Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Land Location (if owned)
                  </label>
                  <Input placeholder="City, State or specific address" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Approximate Acreage
                    </label>
                    <Input type="number" placeholder="0" step="0.1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Project Budget Range
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100-500k">$100K - $500K</SelectItem>
                        <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                        <SelectItem value="1-5m">$1M - $5M</SelectItem>
                        <SelectItem value="5-10m">$5M - $10M</SelectItem>
                        <SelectItem value="10m+">$10M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Project Vision & Goals *
                  </label>
                  <Textarea 
                    placeholder="Describe your development concept, objectives, timeline expectations, and any specific questions or challenges..."
                    className="min-h-[150px] resize-none"
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-accent-foreground py-6"
                  size="lg"
                >
                  Schedule Development Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Initial consultation includes preliminary feasibility assessment at no charge.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Development Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {process.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground text-sm">{item.title}</h5>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <Building2 className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-4 text-center">
                  Our Experience
                </h4>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2,000+</div>
                    <p className="text-sm text-muted-foreground">Acres Developed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">$200M+</div>
                    <p className="text-sm text-muted-foreground">Total Project Value</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Key Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Feasibility analysis",
                  "Zoning & entitlement",
                  "Environmental assessment",
                  "Infrastructure planning",
                  "Construction management",
                  "Marketing & sales"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandDevelopment;
