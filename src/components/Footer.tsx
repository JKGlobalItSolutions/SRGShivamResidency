import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">SRG SHIVAM RESIDENCY</h3>
            <p className="text-background/80 mb-4">
              Experience luxury and comfort with exceptional service. 
              Your perfect stay awaits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("rooms")}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Rooms
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("facilities")}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("booking")}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li>+91 9787444498</li>
              <li>srgshivamresidencydigital.com</li>
              <li>12/19-B, New By-Pass Road,<br/> Seriyandal, Tiruvannamalai <br/> 606 604.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80">
            © {new Date().getFullYear()} SRG Shivam Residency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
