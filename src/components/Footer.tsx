import { Truck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Truck size={32} className="text-brand-orange" />
              <span className="text-2xl font-bold">Arif Trucking Inc.</span>
            </div>
            <p className="text-blue-200 mb-4">
              Professional freight transportation services across the Midwest. 
              Reliable, efficient, and committed to excellence.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li>Dry Van Transportation</li>
              <li>OTR Midwest Coverage</li>
              <li>Contract Transportation</li>
              <li>Freight Logistics</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-blue-200">
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@ariftrucking.com</li>
              <li>Service Area: Midwest Region</li>
              <li>Hours: 24/7 Dispatch</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 Arif Trucking Inc. All rights reserved. | Professional Transportation Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;