"use client";

import Image from "next/image";
import { Card } from "@/components/Card";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


export default function About() {
  return (
    <section className="mt-20 p-10 md:p-20">
      {/* Founder Highlight with Interactive Card */}
      <div className="grid grid-cols-1 space-y-10 md:grid-cols-2">
        <div className="flex justify-center">
          <Card
            img="/img/founder.png"
            p1="Sophia Lee"
            p2="Founder & Nail Artist"
          />
        </div>

        <div className=" flex justify-center items-center text-center">
          <p className="italic leading-relaxed flex-grow text-xl">
            <FaQuoteLeft className="text-[#831843] inline mr-2" />
            At GlowByDiva, my vision has always been to create more than just a
            nail salon—it’s a sanctuary where women can feel empowered,
            pampered, and truly radiant. Every detail, from the products we
            choose to the artistry we deliver, reflects my passion for beauty,
            self-care, and excellence. I believe that when a woman feels
            confident in her own skin, she can conquer anything. GlowByDiva is
            not just about nails; it’s about celebrating femininity, elegance,
            and the confidence that comes with glowing from the inside out.
            <FaQuoteRight className="text-[#831843] inline ml-2" />
          </p>
        </div>
      </div>
    </section>
  );
}
