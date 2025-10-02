import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, PieChart, Target, BarChart3, LineChart, Shield, CheckCircle2, ArrowRight } from "lucide-react";

const InvestmentAdvisory = () => {
  const services = [
    {
      icon: PieChart,
      title: "Portfolio Analysis",
      description: "Comprehensive review of your current real estate holdings and performance metrics"
    },
    {
      icon: Target,
      title: "Investment Strategy",
      description: "Custom strategies aligned with your financial goals and risk tolerance"
    },
    {
      icon: BarChart3,
      title: "Market Research",
      description: "In-depth analysis of emerging markets and investment opportunities"
    },
    {
      icon: LineChart,
      title: "ROI Optimization",
      description: "Maximize returns through strategic acquisitions and portfolio adjustments"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Identify and mitigate potential risks in your investment strategy"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Ongoing monitoring and reporting of investment performance"
    }
  ];

  const investorTypes = [
    {
      title: "First-Time Investor",
      description: "New to real estate investing and looking for guidance on getting started",
      ideal: "Budget: $50K - $200K"
    },
    {
      title: "Growing Portfolio",
      description: "Own 1-3 properties and ready to expand your real estate holdings",
      ideal: "Budget: $200K - $1M"
    },
    {
      title: "Experienced Investor",
      description: "Established portfolio seeking optimization and advanced strategies",
      ideal: "Budget: $1M+"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Investment Advisory Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Strategic Real Estate Investment Guidance
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Make informed investment decisions with expert guidance. We help you build and 
              optimize a profitable real estate portfolio aligned with your financial goals.
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

        {/* Investor Types */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              We Work With All Investor Types
            </h2>
            <p className="text-xl text-muted-foreground">
              Tailored strategies for every investment stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investorTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {type.ideal}
                  </Badge>
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
                  Get Investment Advisory
                </CardTitle>
                <p className="text-muted-foreground">
                  Schedule a consultation with our investment experts to discuss your goals.
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
                      Investor Type *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first-time">First-Time Investor</SelectItem>
                        <SelectItem value="growing">Growing Portfolio (1-3 properties)</SelectItem>
                        <SelectItem value="experienced">Experienced Investor (4+ properties)</SelectItem>
                        <SelectItem value="institutional">Institutional/Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Investment Budget Range
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50-200k">$50K - $200K</SelectItem>
                      <SelectItem value="200-500k">$200K - $500K</SelectItem>
                      <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                      <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                      <SelectItem value="5m+">$5M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Property Type Interest
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential (Single/Multi-Family)</SelectItem>
                      <SelectItem value="commercial">Commercial Properties</SelectItem>
                      <SelectItem value="mixed">Mixed-Use Developments</SelectItem>
                      <SelectItem value="land">Land Development</SelectItem>
                      <SelectItem value="reit">REITs & Partnerships</SelectItem>
                      <SelectItem value="any">Open to All Types</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Investment Timeline
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Ready to invest now</SelectItem>
                      <SelectItem value="3-months">Within 3 months</SelectItem>
                      <SelectItem value="6-months">Within 6 months</SelectItem>
                      <SelectItem value="1-year">Within 1 year</SelectItem>
                      <SelectItem value="planning">Planning/Research phase</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Current Real Estate Holdings
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Number of properties" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">None - First Investment</SelectItem>
                      <SelectItem value="1">1 property</SelectItem>
                      <SelectItem value="2-3">2-3 properties</SelectItem>
                      <SelectItem value="4-10">4-10 properties</SelectItem>
                      <SelectItem value="10+">10+ properties</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Investment Goals & Questions *
                  </label>
                  <Textarea 
                    placeholder="Describe your investment objectives, target returns, risk tolerance, and any specific questions you have..."
                    className="min-h-[150px] resize-none"
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-accent-foreground py-6"
                  size="lg"
                >
                  Schedule Advisory Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Initial consultation is complimentary. Ongoing advisory services quoted based on portfolio size.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-4 text-center">
                  Track Record
                </h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">$50M+</div>
                    <p className="text-sm text-muted-foreground">Assets Under Advisement</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15.2%</div>
                    <p className="text-sm text-muted-foreground">Average Annual ROI</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">200+</div>
                    <p className="text-sm text-muted-foreground">Successful Investments</p>
                  </div>
                </div>
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
                  "Initial portfolio assessment",
                  "Custom investment strategy",
                  "Market opportunity alerts",
                  "ROI analysis and projections",
                  "Risk mitigation planning",
                  "Quarterly performance reviews"
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

export default InvestmentAdvisory;
