import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/front.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          SRG SHIVAM Residency
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
          Your Comfort, Our Priority
        </p>
        <Link to="/booking">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-elegant hover:shadow-medium transition-smooth hover:scale-105"
          >
            Explore
          </Button>
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {/* <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> */}
        </svg>
      </div>
    </section>
  );
};

export default Hero;
