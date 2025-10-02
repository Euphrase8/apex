import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calculator, Home, TrendingUp, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

const PropertyValuation = () => {
  const features = [
    "Comprehensive market analysis",
    "Recent comparable sales data",
    "Neighborhood trends and insights",
    "Professional appraisal estimate",
    "Investment potential assessment",
    "Free consultation included"
  ];

  const valuationFactors = [
    {
      icon: Home,
      title: "Property Details",
      description: "Size, age, condition, and features"
    },
    {
      icon: MapPin,
      title: "Location Analysis",
      description: "Neighborhood, schools, and amenities"
    },
    {
      icon: TrendingUp,
      title: "Market Trends",
      description: "Recent sales and price movements"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Free Property Valuation
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get Your Free Property Valuation
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Discover your property's true market value with our comprehensive analysis. 
              Get accurate, data-driven insights from certified real estate professionals.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Calculator className="mr-3 h-6 w-6" />
                  Property Information
                </CardTitle>
                <p className="text-muted-foreground">
                  Provide details about your property to receive an accurate valuation estimate.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
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
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="WA">Washington</SelectItem>
                        <SelectItem value="OR">Oregon</SelectItem>
                        <SelectItem value="CA">California</SelectItem>
                      </SelectContent>
                    </Select>
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
                      <SelectItem value="multi-family">Multi-Family</SelectItem>
                      <SelectItem value="land">Land</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Bedrooms
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, "6+"].map((num) => (
                          <SelectItem key={num} value={String(num)}>{num}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Bathrooms
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 1.5, 2, 2.5, 3, 3.5, 4, "4.5+"].map((num) => (
                          <SelectItem key={num} value={String(num)}>{num}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Square Feet
                    </label>
                    <Input type="number" placeholder="2000" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Year Built
                  </label>
                  <Input type="number" placeholder="2010" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Property Condition
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent - Recently renovated</SelectItem>
                      <SelectItem value="good">Good - Well maintained</SelectItem>
                      <SelectItem value="fair">Fair - Some updates needed</SelectItem>
                      <SelectItem value="needs-work">Needs Work - Major repairs required</SelectItem>
                    </SelectContent>
                  </Select>
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
                  <div className="mt-4">
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number *
                    </label>
                    <Input type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-accent-foreground py-6"
                  size="lg"
                >
                  Get Free Valuation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Results typically delivered within 24-48 hours. No obligation or commitment required.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* What's Included */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{feature}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Valuation Factors */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Valuation Factors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {valuationFactors.map((factor, index) => {
                  const IconComponent = factor.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{factor.title}</h4>
                        <p className="text-sm text-muted-foreground">{factor.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Trust Badge */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-accent-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  Trusted by 10,000+ Homeowners
                </h4>
                <p className="text-sm text-muted-foreground">
                  Our valuations are backed by 15+ years of market expertise and data analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyValuation;
