"use client";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

interface CardProps {
  img: string;
  p1?: string;
  p2?: string;
}

export function Card({ img, p1, p2 }: CardProps) {
  return (
    <DirectionAwareHover imageUrl={img}>
      <div className="flex items-start flex-col">
        <p className="font-bold text-xl">{p1}</p>
        <p className="font-normal text-sm">{p2}</p>
      </div>
    </DirectionAwareHover>
  );
}
