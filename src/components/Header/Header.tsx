import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <main className="flex justify-between py-10 md:py-20 md:px-20 lg:max-h-[60%] relative">
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
          <Link href="#">
            <p>Service</p>
          </Link>
          <Link href="#">
            <p>Projects</p>
          </Link>
          <Link href="#">
            <p>Language</p>
          </Link>
          <Link href="#">
            <p>Experience</p>
          </Link>
        </nav>
      </div>
    </main>
  );
}
