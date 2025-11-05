import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get in Touch
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-soft h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1949.4342057180463!2d79.0891845054338!3d12.257183014796839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacc10ed30e5749%3A0x8a1f9339287293b5!2sSRG%20Shivam%20Residency!5e0!3m2!1sen!2sin!4v1759815805541!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Hotel Location"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-soft">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">Address</h3>
                  <p className="text-muted-foreground">
                   <p>12/19-B, New By-Pass Road,<br/> Seriyandal, Tiruvannamalai <br/> 606 604.</p>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-soft">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">Phone</h3>
                  <p className="text-muted-foreground">+91 9787444498</p>
                  <p className="text-sm text-muted-foreground mt-1">Available 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-soft">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">Email</h3>
                  <p className="text-muted-foreground">srgshivamresidencydigital@gmail.com</p>
                  
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-soft">
              <h3 className="font-semibold text-lg mb-4 text-foreground">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-secondary hover:bg-primary p-3 rounded-full transition-smooth group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </a>
                <a
                  href="#"
                  className="bg-secondary hover:bg-primary p-3 rounded-full transition-smooth group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </a>
                <a
                  href="#"
                  className="bg-secondary hover:bg-primary p-3 rounded-full transition-smooth group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
