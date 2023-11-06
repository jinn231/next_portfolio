"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ArrowUp from "../Icons/ArrowUp";

type Props = {};

export default function Header({}: Props) {
  const params = useParams();
  const [hashParam, setHashParam] = useState<string | "projects" | "intro">("");

  useEffect(() => {
    setHashParam(window.location.hash);
  }, [params]);

  return (
    <main className="flex justify-between py-5 items-center md:px-20 lg:max-h-[60%] sticky top-0 backdrop-blur-xl z-[99999999999]">
      <div className="w-20 flex flex-col items-center">
        <Image
          src="/images/loader.png"
          className="loader"
          width={10000}
          height={10000}
          alt="loader"
        />
        <h1>Jinn.dev</h1>
      </div>
      <div className="flex justify-center w-1/2">
        <nav className="gap-5 font-extrabold text-xl text-white justify-center hidden md:flex">
          <Link style={{ opacity: !hashParam ? 1 : .4 }} href="#">
            <p>Home</p>
          </Link>

          <Link
            style={{ opacity: hashParam === "#experience" ? 1 : 0.4 }}
            href="/#experience"
          >
            <p>Experience</p>
          </Link>

          <Link
            style={{ opacity: hashParam === "#story" ? 1 : 0.4 }}
            href="#story"
          >
            <p>Story</p>
          </Link>
          <Link style={{ opacity: 0.4 }} href="#">
            <p>Language</p>
          </Link>
          <Link style={{ opacity: 0.4 }} href="#">
            <p>Experience</p>
          </Link>
        </nav>
      </div>
    </main>
  );
}
