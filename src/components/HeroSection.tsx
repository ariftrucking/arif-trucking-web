import { Button } from '@/components/ui/button';
import { Truck, Phone } from 'lucide-react';
import heroImage from '@/assets/trucking-hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Trucking Highway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex items-center justify-center mb-8">
          <Truck size={80} className="text-brand-orange mr-4" />
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-2">
              Arif Trucking Inc.
            </h1>
            <p className="text-xl md:text-2xl text-blue-200">
              Professional Transportation Services
            </p>
          </div>
        </div>

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Reliable dry van and over-the-road transportation services across the Midwest. 
          Your trusted partner for freight delivery with competitive rates and exceptional service.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
            <Phone className="mr-2 h-4 w-4" />
            Get Quote
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;