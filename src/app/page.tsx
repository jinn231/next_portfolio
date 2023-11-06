"use client";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import LanguageSlice from "@/components/LanguageSlices/LanguageSlice";
import ProjectRoute from "@/components/Projects/Project";
import Skill from "@/components/Skills/Skill";
import Story from "@/components/Story/Story";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <span
        className="w-10 h-10 bg-opacity-60 bg-[#b4b4b4] fixed linear rounded-full z-[1000000]"
        style={{
          top: cursorPosition.y,
          left: cursorPosition.x,
        }}
      ></span>
      <Header />
      <Hero />
      <LanguageSlice />
      <Skill />
      <Story />
      <ProjectRoute />
    </>
  );
}
