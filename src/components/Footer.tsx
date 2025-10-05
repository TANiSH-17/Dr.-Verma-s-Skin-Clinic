import { Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Smooth scroll handler for internal links
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contact-us" className="bg-card border-t border-border/50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
          
          {/* Column 1: Brand & Description */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Dr. Verma's Skin Clinic
            </h3>
            <p className="text-muted-foreground pr-4">
              Your trusted healthcare partner, providing compassionate and professional skin care at two convenient locations.
            </p>
          </div>

          {/* Column 2: Quick Links & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact & Links</h4>
            <div className="space-y-3">
              <a 
                href="mailto:dr.vermaskinclinic.shl@gmail.com" 
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>dr.vermaskinclinic.shl@gmail.com</span>
              </a>
              <a 
                href="tel:+919810456787" 
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+91 98104 56787</span>
              </a>
              <a 
                href="#locations"
                onClick={(e) => handleScroll(e, 'locations')}
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>Two convenient locations in New Delhi</span>
              </a>
            </div>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/dr_verma_skinclinic?igsh=MWVsYzFyOXl0YzJvNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://wa.me/919810456787" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
              <a 
                href="#locations"
                onClick={(e) => handleScroll(e, 'locations')}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Our Locations"
              >
                <MapPin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; {currentYear} Dr. Verma's Skin Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;