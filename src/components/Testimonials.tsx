import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    comment: "Absolutely stunning hotel! The rooms are beautifully decorated and the service was impeccable. Perfect for our anniversary celebration.",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    comment: "Outstanding experience from check-in to check-out. The staff went above and beyond to make our family feel welcome. Highly recommend!",
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "London, UK",
    rating: 5,
    comment: "The perfect blend of luxury and comfort. The suite was spacious, the amenities were top-notch, and the location is excellent.",
  },
  {
    id: 4,
    name: "Raj Patel",
    location: "Mumbai, India",
    rating: 5,
    comment: "A delightful stay! The attention to detail is remarkable, and the restaurant serves amazing food. Will definitely return.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Read reviews from our valued guests
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                <Card className="shadow-soft hover:shadow-elegant transition-smooth border-border h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-border" />
          <CarouselNext className="border-border" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
