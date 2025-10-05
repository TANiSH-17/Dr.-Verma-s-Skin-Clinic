import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

interface ClinicCardProps {
  name: string;
  image: string;
  address: string;
  hours: string;
  phone: string;
  mapUrl: string;
  directionsUrl: string;
  large?: boolean;
}

const ClinicCard = ({ name, image, address, hours, phone, mapUrl, directionsUrl, large = false }: ClinicCardProps) => {
  return (
    <div className={`bento-card overflow-hidden ${large ? 'lg:col-span-2' : ''}`}>
      {/* Image and Title */}
      <div className="relative h-80 overflow-hidden rounded-2xl mb-6">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl sm:text-3xl font-bold text-white">
          {name}
        </h3>
      </div>

      {/* --- DETAILS SECTION (RESTORED) --- */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
          <p className="text-foreground">{address}</p>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
          <p className="text-foreground">{hours}</p>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
          <a href={`tel:${phone}`} className="text-foreground hover:text-primary transition-colors">
            {phone}
          </a>
        </div>

        {/* Embedded Map */}
        <div className="rounded-xl overflow-hidden h-48 mt-6 border border-border">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${name} Location`}
          />
        </div>

        {/* Get Directions Button */}
        <a 
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4" 
        >
          <Button 
            className="w-full bg-gradient-secondary text-secondary-foreground hover:opacity-90 transition-opacity"
            size="lg"
          >
            <Navigation className="mr-2 h-5 w-5" />
            Get Directions
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ClinicCard;