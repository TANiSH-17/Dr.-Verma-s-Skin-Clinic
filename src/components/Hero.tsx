import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {

  const handleScrollToSection = (sectionId: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Medical Clinic" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-primary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Dr. Verma's Skin Clinic,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Closer to You
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Experience premium healthcare at two convenient locations.
            <br />
            Our dedicated team provides compassionate, professional care tailored to your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <Button 
          asChild
          size="lg" 
          className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity min-w-[200px] shadow-medium"
        >
          <a href="#locations" onClick={handleScrollToSection('locations')}>
            <Calendar className="mr-2 h-5 w-5" />
            Our Clinics
          </a>
        </Button>
        <Button 
          asChild
          size="lg" 
          variant="outline"
          className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground min-w-[200px] transition-all"
        >
          <a href="#contact-us" onClick={handleScrollToSection('contact-us')}>
            <Phone className="mr-2 h-5 w-5" />
            Contact Us
          </a>
        </Button>
      </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
