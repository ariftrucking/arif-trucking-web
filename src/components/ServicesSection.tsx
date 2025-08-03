import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, MapPin, Clock, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Truck className="h-12 w-12 text-brand-blue" />,
      title: 'Dry Van Transportation',
      description: 'Full truckload dry van services for your freight transportation needs. Secure, reliable, and efficient delivery across the Midwest.',
    },
    {
      icon: <MapPin className="h-12 w-12 text-brand-orange" />,
      title: 'OTR Midwest Coverage',
      description: 'Comprehensive over-the-road services throughout the Midwest region. Strategic routes for optimal delivery times.',
    },
    {
      icon: <Clock className="h-12 w-12 text-brand-blue" />,
      title: 'Timely Delivery',
      description: 'Committed to on-time delivery with real-time tracking and communication throughout the transportation process.',
    },
    {
      icon: <Shield className="h-12 w-12 text-brand-orange" />,
      title: 'Insured & Licensed',
      description: 'Fully licensed and insured transportation services ensuring your freight is protected from pickup to delivery.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional freight transportation services designed to meet your logistics needs
            with reliability, efficiency, and competitive pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-brand-navy">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;