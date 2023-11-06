import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./style.css";
import Facebook from "../Icons/Facebook";
import Linkedin from "../Icons/Linkedin";
import WhatApp from "../Icons/Whatapp";

export default function Hero() {
  return (
    <main className="flex justify-around lg:max-h-[60%] relative py-20 flex-wrap">
      <Image
        className="cartoon md:block"
        src="/images/cartoon.png"
        width={10000}
        height={10000}
        alt="cartoon"
      />
      <section className="lg:w-[40%] flex flex-col gap-[5rem] p-5">
        <div className="text-5xl font-extrabold">
          <h1>Wan Na Aung,</h1>
          <h1 className="md:whitespace-nowrap">A fullstack developer .</h1>
          <div className="w-10 h-1 my-2 bg-[#e4a124]"></div>
        </div>
        <div className="flex gap-5">
          <Facebook width={30} height={30} color="white" />
          <Linkedin width={29} height={29} color="white" />
          <WhatApp width={29} height={29} color="white" />
        </div>
      </section>
      <section className="lg:w-[40%] my-20 md:my-0 flex flex-col gap-[6rem] p-5">
        <div className="flex flex-col gap-5">
          <p className="font-mono font-bold">{" -> "} Introduction</p>
          <div className="text-3xl font-bold text-white">
            <h3>Fullstack Developer, Instructor</h3>
            <h3>based in Myanmar .</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            corrupti obcaecati soluta mollitia molestiae nihil rerum tempora
            consectetur dolore voluptas quis voluptate non aspernatur, excepturi
            ullam ea accusamus architecto ratione?
          </p>

          <Link href="#story" className="flex justify-end">
            <p className="text-[orange] duration-300 ease-linear hover:translate-x-[-2rem]">
              My Story {" -> "}
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
