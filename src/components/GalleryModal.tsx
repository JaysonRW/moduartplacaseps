
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryItem {
  src: string;
  title: string;
  description: string;
  category: "em-andamento" | "finalizados" | "todos";
}

interface GalleryModalProps {
  images: GalleryItem[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  children: React.ReactNode;
}

export const GalleryModal = ({ images, currentIndex, onIndexChange, children }: GalleryModalProps) => {
  const [open, setOpen] = useState(false);

  const goToPrevious = () => {
    onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    onIndexChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const currentImage = images[currentIndex];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
        <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
            onClick={goToPrevious}
          >
            <ChevronLeft size={24} />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
            onClick={goToNext}
          >
            <ChevronRight size={24} />
          </Button>

          <img
            src={currentImage?.src}
            alt={currentImage?.title}
            className="w-full h-full object-contain"
          />
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white text-lg font-semibold mb-2">{currentImage?.title}</h3>
            <p className="text-gray-200 text-sm">{currentImage?.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
