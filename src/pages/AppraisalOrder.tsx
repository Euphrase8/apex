import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calculator, FileText, Award, Clock, CheckCircle2, ArrowRight } from "lucide-react";

const AppraisalOrder = () => {
  const appraisalTypes = [
    {
      title: "Standard Residential",
      price: "$450",
      turnaround: "5-7 business days",
      features: ["Full interior inspection", "Comparable sales analysis", "Market trend report", "USPAP compliant"]
    },
    {
      title: "Commercial Property",
      price: "$1,500+",
      turnaround: "10-14 business days",
      features: ["Income approach analysis", "Cost approach evaluation", "Market comparables", "Investment analysis"]
    },
    {
      title: "Rush Appraisal",
      price: "+$200",
      turnaround: "2-3 business days",
      features: ["Expedited service", "Priority scheduling", "Same features as standard", "Faster reporting"]
    }
  ];

  const reasons = [
    { icon: FileText, text: "Mortgage refinancing" },
    { icon: Award, text: "Estate planning" },
    { icon: Calculator, text: "Investment analysis" },
    { icon: Clock, text: "Legal proceedings" }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Certified Appraisals
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Order Professional Property Appraisal
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Get accurate, certified property appraisals from licensed professionals. 
              USPAP compliant and accepted by all major lenders and institutions.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {/* Appraisal Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {appraisalTypes.map((type, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{type.price}</div>
                <CardTitle className="text-xl">{type.title}</CardTitle>
                <p className="text-sm text-accent flex items-center justify-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {type.turnaround}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Appraisal Request Form
                </CardTitle>
                <p className="text-muted-foreground">
                  Complete the form below to order your professional property appraisal.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Appraisal Type *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select appraisal type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Standard Residential ($450)</SelectItem>
                      <SelectItem value="commercial">Commercial Property ($1,500+)</SelectItem>
                      <SelectItem value="rush">Rush Service (+$200)</SelectItem>
                      <SelectItem value="land">Land Appraisal ($600)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Purpose of Appraisal *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="refinance">Mortgage Refinancing</SelectItem>
                      <SelectItem value="purchase">Property Purchase</SelectItem>
                      <SelectItem value="estate">Estate Planning</SelectItem>
                      <SelectItem value="legal">Legal Proceedings</SelectItem>
                      <SelectItem value="investment">Investment Analysis</SelectItem>
                      <SelectItem value="tax">Tax Assessment Appeal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Property Address *
                  </label>
                  <Input placeholder="123 Main Street" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      City *
                    </label>
                    <Input placeholder="Seattle" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      State *
                    </label>
                    <Input placeholder="WA" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      ZIP Code *
                    </label>
                    <Input placeholder="98101" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Property Type *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single-family">Single Family Home</SelectItem>
                      <SelectItem value="condo">Condominium</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="multi-family">Multi-Family (2-4 units)</SelectItem>
                      <SelectItem value="commercial">Commercial Building</SelectItem>
                      <SelectItem value="land">Land/Vacant Lot</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Additional Property Details
                  </label>
                  <Textarea 
                    placeholder="Any special features, recent renovations, or important details the appraiser should know..."
                    className="min-h-[100px] resize-none"
                  />
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number *
                      </label>
                      <Input type="tel" placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Preferred Contact Time
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8AM-12PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12PM-5PM)</SelectItem>
                          <SelectItem value="evening">Evening (5PM-8PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-accent-foreground py-6"
                  size="lg"
                >
                  Submit Appraisal Order
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll contact you within 24 hours to confirm appointment and payment details.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Common Reasons */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Common Appraisal Uses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {reasons.map((reason, index) => {
                  const IconComponent = reason.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-accent" />
                      </div>
                      <p className="text-sm font-medium text-foreground">{reason.text}</p>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Certification Badge */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  Certified & Licensed
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  All appraisals performed by state-certified appraisers and comply with USPAP standards.
                </p>
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  USPAP Compliant
                </Badge>
              </CardContent>
            </Card>

            {/* Process Timeline */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Appraisal Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { step: "1", title: "Order Placed", desc: "Submit request form" },
                  { step: "2", title: "Confirmation", desc: "We confirm details" },
                  { step: "3", title: "Inspection", desc: "Property visit scheduled" },
                  { step: "4", title: "Report Delivery", desc: "Receive final report" }
                ].map((item, index) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppraisalOrder;
