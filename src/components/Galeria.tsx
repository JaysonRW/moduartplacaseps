import React, { useState } from "react";

const assets = [
  // Imagens únicas
  "IMG-20250603-WA0114.jpg",
  "IMG-20250603-WA0110.jpg",
  "IMG-20250603-WA0109.jpg",
  "IMG-20250603-WA0107.jpg",
  "IMG-20250603-WA0105.jpg",
  "IMG-20250603-WA0097.jpg",
  "IMG-20250603-WA0099.jpg",
  "IMG-20250603-WA0098.jpg",
  "IMG-20250603-WA0095.jpg",
  "IMG-20250603-WA0096.jpg",
  "IMG-20250603-WA0092.jpg",
  "IMG-20250603-WA0093.jpg",
  "IMG-20250603-WA0091.jpg",
  "IMG-20250603-WA0089.jpg",
  "IMG-20250603-WA0087.jpg",
  "IMG-20250603-WA0084.jpg",
  "IMG-20250603-WA0086.jpg",
  "IMG-20250603-WA0083.jpg",
  "IMG-20250603-WA0081.jpg",
  // Vídeos únicos
  "VID-20250603-WA0017.mp4",
  "VID-20250603-WA0018.mp4",
  "VID-20250603-WA0011.mp4",
  "VID-20250603-WA0009.mp4",
  "VID-20250603-WA0007.mp4",
  "VID-20250603-WA0006.mp4",
  "VID-20250603-WA0005.mp4"
];

function isVideo(filename: string) {
  return filename.match(/\.(mp4|webm|ogg)$/i);
}

const Galeria: React.FC = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const handleOpen = (idx: number) => setLightboxIdx(idx);
  const handleClose = () => setLightboxIdx(null);
  const handlePrev = () => setLightboxIdx((idx) => (idx !== null ? (idx - 1 + assets.length) % assets.length : null));
  const handleNext = () => setLightboxIdx((idx) => (idx !== null ? (idx + 1) % assets.length : null));

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Galeria de Projetos
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {assets.map((file, idx) => (
            <div
              key={idx}
              className="break-inside-avoid rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gray-100 cursor-pointer"
              onClick={() => handleOpen(idx)}
            >
              {isVideo(file) ? (
                <video
                  src={`/lovable-uploads/${file}`}
                  className="w-full h-auto object-cover"
                  preload="metadata"
                  style={{ aspectRatio: "16/9" }}
                  muted
                  playsInline
                  controls={false}
                  onClick={e => { e.preventDefault(); handleOpen(idx); }}
                  tabIndex={-1}
                />
              ) : (
                <img
                  src={`/lovable-uploads/${file}`}
                  alt="Projeto Moduart"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "16/9" }}
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={handleClose}>
            <button className="absolute top-4 right-4 text-white text-3xl font-bold" onClick={handleClose}>&times;</button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold" onClick={e => { e.stopPropagation(); handlePrev(); }}>&#8592;</button>
            <div className="max-w-4xl w-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
              {isVideo(assets[lightboxIdx]) ? (
                <video
                  src={`/lovable-uploads/${assets[lightboxIdx]}`}
                  className="w-full max-h-[80vh] rounded-lg"
                  controls
                  autoPlay
                  style={{ background: '#000' }}
                />
              ) : (
                <img
                  src={`/lovable-uploads/${assets[lightboxIdx]}`}
                  alt="Projeto Moduart"
                  className="w-full max-h-[80vh] rounded-lg"
                  style={{ background: '#000' }}
                />
              )}
            </div>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold" onClick={e => { e.stopPropagation(); handleNext(); }}>&#8594;</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Galeria; 