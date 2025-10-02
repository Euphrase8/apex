import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle2, Clock, Users, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Consultation = () => {
  const navigate = useNavigate();

  const benefits = [
    "Free 30-minute consultation with expert advisors",
    "Personalized real estate strategy assessment",
    "Market analysis and property recommendations",
    "No obligation - just expert guidance"
  ];

  const consultationTypes = [
    {
      icon: Users,
      title: "In-Person Meeting",
      description: "Visit our office for a comprehensive consultation",
      duration: "60 minutes"
    },
    {
      icon: Phone,
      title: "Phone Consultation",
      description: "Convenient phone call with our experts",
      duration: "30 minutes"
    },
    {
      icon: Mail,
      title: "Video Conference",
      description: "Connect virtually via Zoom or Teams",
      duration: "45 minutes"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Free Consultation
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Request Your Free Consultation
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Get expert guidance on your real estate needs. Our experienced team is ready 
              to help you make informed decisions and achieve your property goals.
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
                <CardTitle className="text-2xl text-primary">
                  Schedule Your Consultation
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll contact you within 24 hours to confirm your appointment.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name *
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number *
                    </label>
                    <Input type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Consultation Type
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select consultation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="in-person">In-Person Meeting</SelectItem>
                      <SelectItem value="phone">Phone Call</SelectItem>
                      <SelectItem value="video">Video Conference</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Service Interest
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buying-selling">Buying & Selling</SelectItem>
                      <SelectItem value="appraisal">Property Appraisal</SelectItem>
                      <SelectItem value="management">Property Management</SelectItem>
                      <SelectItem value="investment">Investment Advisory</SelectItem>
                      <SelectItem value="development">Land Development</SelectItem>
                      <SelectItem value="transaction">Transaction Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Preferred Date & Time
                  </label>
                  <Input type="datetime-local" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Tell Us About Your Needs *
                  </label>
                  <Textarea 
                    placeholder="Please describe your real estate goals, current situation, and what you'd like to discuss during the consultation..."
                    className="min-h-[150px] resize-none"
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-accent-foreground py-6"
                  size="lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Request Consultation
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our terms and privacy policy. 
                  We'll never share your information with third parties.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  What You'll Get
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{benefit}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Consultation Options */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Consultation Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {consultationTypes.map((type, index) => {
                  const IconComponent = type.icon;
                  return (
                    <div key={index} className="p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{type.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                          <div className="flex items-center text-xs text-accent">
                            <Clock className="h-3 w-3 mr-1" />
                            {type.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  Prefer to Call?
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Speak directly with our team
                </p>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.location.href = 'tel:5551234567'}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  (555) 123-APEX
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
