import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle , Youtube} from "lucide-react";

const SocialSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Stay{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Connected
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow us on social media for health tips, updates, and community events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Instagram */}
  <a
    href="https://www.instagram.com/dr_verma_skinclinic?igsh=MWVsYzFyOXl0YzJvNw==" 
    target="_blank"
    rel="noopener noreferrer"
    className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
  >
    <div className="bento-card text-center h-full flex flex-col">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 mx-auto mb-4 flex items-center justify-center flex-shrink-0">
        <Instagram className="h-8 w-8 text-white" />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-2">Instagram</h3>
        <p className="text-muted-foreground mb-4">Follow our latest updates</p>
      </div>
      <Button
        variant="outline"
        className="w-full border-2 hover:bg-pink-50 transition-colors mt-auto"
        asChild // Important for the button to act as part of the link
      >
        <span>Follow Us</span>
      </Button>
    </div>
  </a>

  {/* WhatsApp Community */}
  <a
    href="https://wa.me/919810456787" 
    target="_blank"
    rel="noopener noreferrer"
    className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
  >
    <div className="bento-card text-center h-full flex flex-col">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 mx-auto mb-4 flex items-center justify-center flex-shrink-0">
        <MessageCircle className="h-8 w-8 text-white" />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
        <p className="text-muted-foreground mb-4">Join our community</p>
      </div>
      <Button
        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white hover:opacity-90 mt-auto"
        asChild
      >
        <span>Chat with us</span>
      </Button>
    </div>
  </a>

{/* YouTube */}
<a
  href="https://youtube.com/@dr.vermasskinclinic?si=vY7yWcr46FLuaakk"
  target="_blank"
  rel="noopener noreferrer"
  className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
>
  <div className="bento-card text-center h-full flex flex-col">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 mx-auto mb-4 flex items-center justify-center flex-shrink-0">
      <Youtube className="h-8 w-8 text-white" />
    </div>
    <div className="flex-grow">
      <h3 className="text-xl font-semibold mb-2">YouTube</h3>
      <p className="text-muted-foreground mb-4">Subscribe to our channel</p>
    </div>
    <Button
      variant="outline"
      className="w-full border-2 hover:bg-red-50 transition-colors mt-auto"
      asChild
    >
      <span>Subscribe</span>
    </Button>
  </div>
</a>
</div>
      </div>
    </section>
  );
};

export default SocialSection;
