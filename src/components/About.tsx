import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Target, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that maximize your property value and investment returns."
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Built on transparency, ethical practices, and unwavering commitment to our clients' best interests."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We tailor our services to meet your unique real estate goals and needs."
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description: "15+ years of market experience with a track record of successful transactions and satisfied clients."
    }
  ];

  const stats = [
    { number: "500+", label: "Properties Managed", description: "Active portfolio across residential and commercial" },
    { number: "$50M+", label: "Transaction Volume", description: "Total value of successful deals completed" },
    { number: "98%", label: "Client Satisfaction", description: "Based on post-transaction surveys and reviews" },
    { number: "15+", label: "Years Experience", description: "Deep market knowledge and relationship building" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">
              About APEX Property Management
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Your Trusted Real Estate Partner Since 2009
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                APEX Property Management was founded with a simple mission: to provide 
                comprehensive, professional real estate services that maximize value while 
                minimizing hassle for our clients.
              </p>
              <p>
                Over the past 15 years, we've built a reputation for excellence in the 
                Pacific Northwest real estate market. Our team combines deep local market 
                knowledge with innovative technology and time-tested strategies to deliver 
                exceptional results.
              </p>
              <p>
                Whether you're buying your first home, expanding your investment portfolio, 
                or need professional property management services, we're here to guide you 
                through every step of the process with expertise and integrity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Our Core Values
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These principles guide every decision we make and every service we provide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white hover:-translate-y-1 group">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-light rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-accent-foreground" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3 group-hover:text-primary-light transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Choose APEX */}
        <div className="mt-20 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Why Choose APEX?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-accent-light">Local Expertise</h4>
              <p className="text-primary-foreground/90 text-sm leading-relaxed">
                Deep understanding of Pacific Northwest markets, neighborhoods, and regulations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-accent-light">Full-Service Solutions</h4>
              <p className="text-primary-foreground/90 text-sm leading-relaxed">
                One-stop shop for all your real estate needs, from transactions to ongoing management.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-accent-light">Technology-Enabled</h4>
              <p className="text-primary-foreground/90 text-sm leading-relaxed">
                Modern tools and systems that streamline processes and improve communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;