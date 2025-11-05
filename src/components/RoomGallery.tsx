import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { rooms } from "@/data/hotel-data";

const RoomGallery = () => {
  return (
    <section id="rooms" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Rooms
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Choose from our selection of beautifully designed rooms
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card 
              key={room.id} 
              className="overflow-hidden shadow-soft hover:shadow-elegant transition-smooth group cursor-pointer border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              <CardContent className="p-6 bg-card">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {room.title}
                  </h3>
                  <span className="text-primary font-bold text-lg">
                    ₹{room.price}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{room.description.substring(0, 100)}...</p>
                <Link to="/booking">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white transition-smooth"
                  >
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomGallery;
