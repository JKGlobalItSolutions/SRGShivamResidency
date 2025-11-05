import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Import local images
import img1 from "@/assets/img_1.jpg";
import img2 from "@/assets/img_2.jpg";
import img3 from "@/assets/img_3.jpg";
import img4 from "@/assets/img_4.jpg";
import img5 from "@/assets/img_5.jpg";
import img6 from "@/assets/img_6.jpg";
import img7 from "@/assets/img_7.jpg";
import img8 from "@/assets/img_8.jpg";
// import img9 from "@/assets/img_9.jpg";

// Gallery images array
const galleryImages = [
  { id: 1, url: img1, alt: "Hotel exterior view" },
  { id: 2, url: img2, alt: "Luxury bedroom" },
  { id: 3, url: img3, alt: "Hotel lobby" },
  { id: 4, url: img4, alt: "Swimming pool" },
  { id: 5, url: img5, alt: "Restaurant dining area" },
  { id: 6, url: img6, alt: "Hotel room interior" },
  { id: 7, url: img7, alt: "Hotel bathroom" },
  { id: 8, url: img8, alt: "Outdoor terrace" },
  // { id: 9, url: img9, alt: "Hotel entrance" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section className="py-20 px-4 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Gallery</h2>
          <div className="w-24 h-1 gradient-accent mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Explore our beautiful spaces and amenities
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group shadow-soft hover:shadow-elegant transition-smooth"
              onClick={() => setSelectedImage(image)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth" />
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 border-0 bg-transparent">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-smooth backdrop-blur-sm"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              {selectedImage && (
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[90vh] w-auto h-auto rounded-lg shadow-elegant"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
