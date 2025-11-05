import { Wifi, Wind, Car, UtensilsCrossed, Clock, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const facilities = [
  {
    id: 1,
    icon: Wifi,
    title: "Free WiFi",
    description: "High-speed internet throughout the property",
  },
  {
    id: 2,
    icon: Wind,
    title: "AC Rooms",
    description: "Climate-controlled comfort in every room",
  },
  {
    id: 3,
    icon: Car,
    title: "Parking",
    description: "Complimentary valet parking service",
  },
  {
    id: 4,
    icon: UtensilsCrossed,
    title: "Restaurant",
    description: "Fine dining with local and international cuisine",
  },
  {
    id: 5,
    icon: Clock,
    title: "24/7 Service",
    description: "Round-the-clock assistance at your service",
  },
  {
    id: 6,
    icon: ShieldCheck,
    title: "Security",
    description: "CCTV monitoring and secure environment",
  },
];

const Facilities = () => {
  return (
    <section id="facilities" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Facilities
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Everything you need for a comfortable and memorable stay
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <Card
              key={facility.id}
              className="group hover:shadow-elegant transition-smooth border-border bg-card cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4 group-hover:bg-accent transition-smooth">
                  <facility.icon className="w-8 h-8 text-primary group-hover:text-accent-foreground transition-smooth" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
