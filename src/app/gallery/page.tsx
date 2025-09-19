"use client";
import Image from "next/image";

const images = [
  { src: "/img/gallery/nails1.png", alt: "Elegant nail design" },
  { src: "/img/gallery/nails2.png", alt: "Luxury manicure" },
  { src: "/img/gallery/nails3.png", alt: "GlowByDiva polish set" },
  { src: "/img/gallery/nails4.png", alt: "Classic French nails" },
  { src: "/img/gallery/nails5.png", alt: "Creative nail art" },
  { src: "/img/gallery/nails6.png", alt: "Luxury pedicure" },
];

export default function GalleryPage() {
  return (
    <section className="">
      <div className=" py-10 text-center">
        <h1 className="text-4xl font-bold text-[#831843]">Our Gallery</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A glimpse into the artistry and luxury experiences we create at{" "}
          <span className="font-semibold">GlowByDiva</span>. From timeless
          classics to bold designs, every detail is crafted with elegance.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-md"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={500}
              className="object-cover w-full h-80 transform transition duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 md:opacity-0 md:group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-medium">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
