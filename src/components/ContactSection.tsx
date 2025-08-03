import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-brand-blue" />,
      title: 'Phone',
      detail: '(555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <Mail className="h-6 w-6 text-brand-orange" />,
      title: 'Email',
      detail: 'info@ariftrucking.com',
      link: 'mailto:info@ariftrucking.com',
    },
    {
      icon: <MapPin className="h-6 w-6 text-brand-blue" />,
      title: 'Service Area',
      detail: 'Midwest Region',
      link: null,
    },
    {
      icon: <Clock className="h-6 w-6 text-brand-orange" />,
      title: 'Hours',
      detail: '24/7 Dispatch',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for quotes, partnerships, career opportunities, or any questions 
            about our transportation services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  {info.icon}
                </div>
                <CardTitle className="text-lg text-brand-navy">
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {info.link ? (
                  <a href={info.link} className="text-muted-foreground hover:text-brand-blue transition-colors">
                    {info.detail}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.detail}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-brand-navy">
                Ready to Get Started?
              </CardTitle>
              <CardDescription className="text-base">
                Contact us today for a free quote or to discuss your transportation needs. 
                We're here to provide reliable, professional freight services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Button 
                  size="lg" 
                  className="bg-brand-blue hover:bg-brand-blue/90"
                  asChild
                >
                  <a href="mailto:quotes@ariftrucking.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Get Quote
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  className="bg-brand-orange hover:bg-brand-orange/90"
                  asChild
                >
                  <a href="tel:+15551234567">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                >
                  <a href="mailto:info@ariftrucking.com">
                    <Mail className="mr-2 h-4 w-4" />
                    General Info
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

export default ContactSection;