import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Handshake, TrendingUp, Mail } from 'lucide-react';

const ContractSection = () => {
  const benefits = [
    {
      icon: <Building2 className="h-8 w-8 text-brand-blue" />,
      title: 'Corporate Partnerships',
      description: 'Long-term contracts with reliable freight volumes',
    },
    {
      icon: <Handshake className="h-8 w-8 text-brand-orange" />,
      title: 'Flexible Solutions',
      description: 'Customized transportation solutions for your business',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-blue" />,
      title: 'Competitive Rates',
      description: 'Cost-effective pricing with transparent billing',
    },
  ];

  return (
    <section id="contract" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Contract Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partner with Arif Trucking Inc. for reliable, professional freight transportation services.
            We work with companies of all sizes to provide customized logistics solutions.
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

        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-navy">
                Ready to Partner With Us?
              </CardTitle>
              <CardDescription className="text-base">
                Contact us today to discuss your transportation needs and get a customized quote
                for your freight requirements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                size="lg" 
                className="bg-brand-blue hover:bg-brand-blue/90"
                asChild
              >
                <a href="mailto:contracts@ariftrucking.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Request Partnership Info
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContractSection;