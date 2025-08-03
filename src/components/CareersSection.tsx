import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, Award, Mail, Phone } from 'lucide-react';

const CareersSection = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-brand-orange" />,
      title: 'Competitive Rates',
      description: 'Above-market pay rates with performance bonuses and regular pay increases',
    },
    {
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      title: 'Small Team Culture',
      description: 'Family-oriented work environment where every driver matters and is valued',
    },
    {
      icon: <Award className="h-8 w-8 text-brand-orange" />,
      title: 'Professional Growth',
      description: 'Opportunities for advancement and professional development in the trucking industry',
    },
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Join Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Looking for experienced drivers to join our growing team. 
            We offer competitive compensation, excellent benefits, and a supportive work environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-lg text-brand-navy">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-brand-navy">
                Driver Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Valid CDL Class A license</li>
                <li>• Minimum 2 years OTR experience</li>
                <li>• Clean driving record</li>
                <li>• DOT physical current</li>
                <li>• Professional attitude and reliability</li>
                <li>• Ability to pass drug screening</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-brand-navy">
                What We Offer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Competitive mileage rates</li>
                <li>• Weekly pay with direct deposit</li>
                <li>• Fuel bonuses and performance incentives</li>
                <li>• Flexible schedule options</li>
                <li>• Well-maintained equipment</li>
                <li>• 24/7 dispatch support</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">
                Ready to Drive With Us?
              </CardTitle>
              <CardDescription className="text-base">
                Contact us today to learn more about career opportunities and start your application process.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-brand-orange hover:bg-brand-orange/90"
                  asChild
                >
                  <a href="mailto:careers@ariftrucking.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Apply Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+15551234567">
                    <Phone className="mr-2 h-4 w-4" />
                    Call HR
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;