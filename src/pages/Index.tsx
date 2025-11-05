import Hero from "@/components/Hero";
import About from "@/components/About";
import RoomGallery from "@/components/RoomGallery";
import Facilities from "@/components/Facilities";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <RoomGallery />
      <Facilities />
      <BookingForm />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
