
import { Card, CardContent } from "@/components/ui/card";
import { GalleryModal } from "./GalleryModal";
import { useState } from "react";

interface GalleryItem {
  src: string;
  title: string;
  description: string;
  category: "em-andamento" | "finalizados" | "todos";
}

interface GalleryGridProps {
  images: GalleryItem[];
  activeCategory: string;
}

export const GalleryGrid = ({ images, activeCategory }: GalleryGridProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredImages = activeCategory === "todos" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredImages.map((image, index) => (
        <GalleryModal
          key={index}
          images={filteredImages}
          currentIndex={selectedImageIndex}
          onIndexChange={setSelectedImageIndex}
        >
          <Card 
            className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            onClick={() => setSelectedImageIndex(index)}
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-base font-semibold mb-2 text-gray-900">{image.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                {image.description}
              </p>
            </CardContent>
          </Card>
        </GalleryModal>
      ))}
    </div>
  );
};
