"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function Startsection() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    id: 1,
    thumbnail: "/generalImages/image.png",
  },
  {
    id: 2,
    thumbnail: "/generalImages/image copy.png",
  },
  {
    id: 3,
    thumbnail: "/generalImages/image copy 2.png",
  },
  {
    id: 4,
    thumbnail: "/generalImages/coverPic4.jpg",
  },
  {
    id: 5,
    thumbnail: "/generalImages/coverPic8.jpg",
  },
];
