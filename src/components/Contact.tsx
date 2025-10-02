import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Calendar,
  Calculator,
  Home
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-APEX",
      subtitle: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@apexproperty.com",
      subtitle: "Send us your questions anytime"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Downtown Plaza, Suite 400",
      subtitle: "Seattle, WA 98101"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 8AM-6PM",
      subtitle: "Sat: 9AM-4PM, Sun: By Appointment"
    }
  ];

  const quickActions = [
    {
      icon: Calculator,
      title: "Free Property Valuation",
      description: "Get an accurate estimate of your property's market value",
      badge: "Most Popular",
      path: "/property-valuation"
    },
    {
      icon: Calendar,
      title: "Schedule Consultation",
      description: "Book a one-on-one meeting with our experts",
      badge: "Free",
      path: "/consultation"
    },
    {
      icon: Home,
      title: "Property Management Quote",
      description: "Custom pricing for comprehensive property management",
      badge: "Custom",
      path: "/property-management"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact our team of real estate professionals today. We're here to help you 
            maximize your property value and minimize your hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Send className="mr-3 h-6 w-6" />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name *
                  </label>
                  <Input placeholder="John" className="border-border/50 focus:border-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name *
                  </label>
                  <Input placeholder="Doe" className="border-border/50 focus:border-primary" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address *
                </label>
                <Input 
                  type="email" 
                  placeholder="john.doe@example.com" 
                  className="border-border/50 focus:border-primary" 
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone Number
                </label>
                <Input 
                  type="tel" 
                  placeholder="(555) 123-4567" 
                  className="border-border/50 focus:border-primary" 
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Service Interested In
                </label>
                <Select>
                  <SelectTrigger className="border-border/50 focus:border-primary">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buying-selling">Buying & Selling</SelectItem>
                    <SelectItem value="appraisal">Property Appraisal</SelectItem>
                    <SelectItem value="management">Property Management</SelectItem>
                    <SelectItem value="investment">Investment Advisory</SelectItem>
                    <SelectItem value="development">Land Development</SelectItem>
                    <SelectItem value="consultation">General Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message *
                </label>
                <Textarea 
                  placeholder="Tell us about your real estate needs and how we can help..."
                  className="min-h-[120px] border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 py-6"
                size="lg"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          <p className="text-primary font-medium">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <div 
                      key={index} 
                      className="group p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                      onClick={() => navigate(action.path)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                          <IconComponent className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                              {action.title}
                            </h4>
                            <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
                              {action.badge}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{action.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            For urgent real estate matters, property emergencies, or time-sensitive transactions, 
            our team is available for immediate consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100 shadow-lg"
              onClick={() => window.location.href = 'tel:5551234567'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Emergency Line
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              onClick={() => navigate('/consultation')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Same-Day Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;