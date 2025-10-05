import { Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleScrollToLocations = (event) => {
    event.preventDefault();
    const section = document.getElementById('locations'); 
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contact-us" className="bg-card border-t border-border/50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Medical Clinics
            </h3>
            <p className="text-muted-foreground">
              Your trusted healthcare partner, providing compassionate and professional care at two convenient locations.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:info@medicalclinics.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                dr.vermaskinclinic.shl@gmail.com
              </a>
              <a 
                href="tel:+1234567890" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 9810456787
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Two convenient locations to serve you better</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
      <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
      <div className="flex gap-4">
        {/* Instagram Link */}
        <a 
          href="https://www.instagram.com/dr_verma_skinclinic?igsh=MWVsYzFyOXl0YzJvNw==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5 text-white" />
        </a>

        {/* WhatsApp Link */}
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
          onClick={handleScrollToLocations}
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
      <MapPin className="h-5 w-5 text-white" />
    </a>
  </div>
</div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; {currentYear} Medical Clinics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
