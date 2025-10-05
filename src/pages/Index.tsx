import Hero from "@/components/Hero";
import ClinicCard from "@/components/ClinicCard";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";

// Make sure your image paths are correct
import narainaClinicImage from "@/assets/clinic-1.jpeg";
import vijayEnclaveClinicImage from "@/assets/clinic-2.jpeg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Clinics Section (Updated) */}
      <section id="locations" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Locations
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Visit us at either of our two state-of-the-art facilities, 
              designed with your comfort and care in mind
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Naraina Village Clinic */}
            <ClinicCard
              name="Dr. Verma's Skin Clinic (Naraina)"
              image={narainaClinicImage}
              address="Pillar No. 8, WZ-6, near Flyover, Naraina Village, Naraina, New Delhi, Delhi 110028"
              hours="Mon - Sat: 9am-1pm & Mon/Wed/Fri: 5pm-9pm"
              phone="098104 56787"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.266299523174!2d77.14725477610076!3d28.62179998421058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0321a0000001%3A0x1f34c1b3f3b4b4b0!2sDr.%20Verma's%20Skin%20Clinic!5e0!3m2!1sen!2sin!4v1728108420531!5m2!1sen!2sin"
              directionsUrl="https://maps.google.com/?cid=9597163480084379111&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" 
            />

            {/* Vijay Enclave Clinic */}
            <ClinicCard
              name="Dr. Verma's Skin Clinic (Vijay Enclave)"
              image={vijayEnclaveClinicImage}
              address="RZ-B3/150, Kuye Wali Gali, Main Shiv Market, Block A, Vijay Enclave, Mahavir Enclave, New Delhi, 110045"
              hours="Tues/Thurs/Sat: 5pm-9pm"
              phone="098104 56787"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.933256030135!2d77.07821037610006!3d28.59979398555913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b11b5aaaaab%3A0x3578761a35772a0f!2sDr.%20Verma's%20Skin%20Clinic!5e0!3m2!1sen!2sin!4v1728108341537!5m2!1sen!2sin"
              directionsUrl="https://www.google.com/maps/place/DR.+VERMA'S+SKIN+CLINIC/@28.6070073,77.0783229,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1b35b61c0f0b:0x194e3aa597879974!8m2!3d28.6070073!4d77.0808978!16s%2Fg%2F11pzryrp1g?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D" // Added directions link
            />
          </div>
        </div>
      </section>

      
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Index;