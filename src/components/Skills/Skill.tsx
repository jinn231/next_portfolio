"use client";

import React, { useState } from "react";
import Card from "./Card/Card";
import "./style.css";
import { LanguageProps } from "../../../types/types";
import Image from "next/image";

const Descriptions = {
  html: "HTML is the standard markup language for web pages. When I started learning HTML, I was just 16, and I have been working with HTML for 2 years.",
  css: "CSS is the language we use to style an HTML document. I learned CSS for one month, and I am still using it in all of my projects.",
  js: "JavaScript (JS) is one of my favorite programming languages. It is a versatile language that allows me to create interactive and dynamic web applications. I've been using JS for several years, and its ability to work seamlessly with HTML and CSS makes it an essential tool in my development projects.",
  react:
    "I began my journey in web development with a strong interest in creating dynamic and responsive user interfaces. React, the JavaScript library, quickly caught my attention. It was fascinating to see how React's component-based architecture made it easier to create reusable and interactive UI elements. Starting at the age of 16, I embarked on my journey to master React.",
  next: "As I delved deeper into the world of web development, I realized that React alone could take me far, but there were tools and frameworks that could enhance its capabilities. That's when I discovered Next.js, a framework built on top of React. Next.js was a game-changer for me. It offered server-side rendering, automatic code splitting, and a robust routing system, making it perfect for building high-performance web applications.",
  remix:
    " Remix.js, a modern web framework that I integrated into my skill set. Remix.js focused on optimizing performance and developer experience. With its server-side rendering and routing capabilities, it elevated my ability to create web applications that were not only fast but also accessible and SEO-friendly. Remix.js's flexibility allowed me to fine-tune data fetching and rendering to meet the unique needs of each project.",
  node: " I explored Node.js, the server-side runtime environment for JavaScript. Node.js allowed me to extend my skills beyond the browser and develop server-side applications and APIs. Its event-driven, non-blocking architecture was a revelation, enabling me to build real-time applications and handle data-intensive tasks with ease.",
  typescript:
    "TypeScript has been an integral part of my development stack. I appreciate its strong typing system, which catches errors at compile time and enhances code quality. It has proven invaluable for building scalable applications.",
  git: "Git is my go-to version control system. It empowers me to collaborate effectively with fellow developers and keeps our codebase organized. Whether it's branching, merging, or tracking changes, Git is a reliable companion.",
  python:
    "Python's simplicity and versatility are a perfect fit for my various projects. Whether it's web development, data analysis, or scripting, Python's extensive libraries and clean syntax make it my language of choice.",
  prisma:
    "Prisma has streamlined database access in my Node.js applications. Its type-safe queries and automatic migrations simplify database interactions. Prisma is a time-saver and a key tool in my stack.",
  tailwind:
    "Tailwind CSS has revolutionized my front-end development workflow. Its utility-first approach lets me build responsive, customized designs with ease. It's a fantastic choice for projects that demand a rapid, consistent, and visually appealing interface.",
  bootstrap:
    "Bootstrap has played a pivotal role in many of my web projects. Its pre-designed components save development time, and its responsive features ensure that my applications look great on all devices.",
  sql: " SQL is the language I use to manage and query relational databases. From creating complex queries to ensuring data integrity, SQL is indispensable for working with database systems like PostgreSQL and MySQL.",
  postgresql:
    "PostgreSQL is my trusted RDBMS. Its scalability, extensibility, and support for advanced data types make it a robust choice for projects that require the highest levels of data integrity and complex queries.",
  mongodb:
    "MongoDB, on the other hand, has been my go-to NoSQL database system. It excels in handling large volumes of unstructured data and is perfect for projects that demand horizontal scaling and rapid development.",
  express:
    "Express has become my go-to framework for building web APIs, handling routing, and managing HTTP requests and responses. Its simplicity and modularity allow me to customize my server's behavior according to project requirements.",
};

export default function Skill() {
  const [percentage, setPercentage] = useState<number>(95);
  const [selectedLang, setSelectedLang] = useState<{
    title: LanguageProps;
    desc: string;
  }>({
    title: "HTML",
    desc: Descriptions.html,
  });

  return (
    <div id="experience" className="bg-[#303030] p-10 flex justify-between flex-wrap gap-2 py-20 h-auto lg:h-screen items-center">
      {/* Score */}
      <div className="flex flex-col gap-2 lg:max-w-[45%]">
        <span className="flex items-center gap-5">
          <input
            type="range"
            name="skill_range"
            min={0}
            max={100}
            value={percentage}
            disabled
          />
          <p className="whitespace-nowrap">{percentage} %</p>
        </span>
        <p className="font-extrabold">{selectedLang?.title}</p>

        <p className="text-sm font-mono py-2">{selectedLang.desc}</p>

        <h1 className="font-extrabold my-2 text-xl">
          Operating System Compatibility
        </h1>
        <div className="flex gap-4 flex-wrap">
          <div className="bg-[#2f2f4b] p-3 rounded border border-[#d19f43] flex gap-5 items-center duration-300 shadow shadow-[red]">
            <Image
              className="lang-img"
              src={`/images/languages/kali.png`}
              alt="kali"
              width={10000}
              height={10000}
            />
            <p className="font-mono font-bold">Kali Linux</p>
          </div>
          <div className="bg-[#2f2f4b] p-3 rounded border border-[#d19f43] flex gap-5 items-center duration-300 shadow shadow-[red]">
            <Image
              className="lang-img"
              src={`/images/languages/window.png`}
              alt="kali"
              width={10000}
              height={10000}
            />
            <p className="font-mono font-bold">Window</p>
          </div>
          <div className="bg-[#2f2f4b] p-3 rounded border border-[#d19f43] flex gap-5 items-center duration-300 shadow shadow-[red]">
            <Image
              className="lang-img"
              src={`/images/languages/ubuntu.png`}
              alt="Ubuntu"
              width={10000}
              height={10000}
            />
            <p className="font-mono font-bold">Ubuntu</p>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="w-full lg:w-1/2 ">
        <h1 className="font-extrabold text-xl">
          Most Used Languages and Frameworks
        </h1>
        <div className="w-10 h-1 bg-[orange] mb-3"></div>
        <div className="w-full flex flex-wrap gap-2 my-2">
          <Card
            lang="HTML"
            onClick={() => {
              setPercentage(95);
              setSelectedLang({ title: "HTML", desc: Descriptions.html });
            }}
          />
          <Card
            lang="CSS"
            onClick={() => {
              setPercentage(90);
              setSelectedLang({ title: "CSS", desc: Descriptions.css });
            }}
          />
          <Card
            lang="JS"
            onClick={() => {
              setPercentage(70);
              setSelectedLang({ title: "JS", desc: Descriptions.js });
            }}
          />
          <Card
            lang="ReactJs"
            onClick={() => {
              setPercentage(89);
              setSelectedLang({ title: "ReactJs", desc: Descriptions.react });
            }}
          />
          <Card
            lang="NodeJs"
            onClick={() => {
              setSelectedLang({ title: "NodeJs", desc: Descriptions.node });
              setPercentage(78);
            }}
          />
          <Card
            lang="ExpressJs"
            onClick={() => {
              setSelectedLang({
                title: "ExpressJs",
                desc: Descriptions.express,
              });
              setPercentage(80);
            }}
          />
          <Card
            lang="NextJs"
            onClick={() => {
              setPercentage(83);
              setSelectedLang({ title: "NextJs", desc: Descriptions.next });
            }}
          />
          <Card
            lang="RemixJs"
            onClick={() => {
              setPercentage(95);
              setSelectedLang({ title: "RemixJs", desc: Descriptions.remix });
            }}
          />
          <Card
            lang="GitHub"
            onClick={() => {
              setPercentage(90);
              setSelectedLang({ title: "Git", desc: Descriptions.git });
            }}
          />
          <Card
            lang="Typescript"
            onClick={() => {
              setPercentage(70);
              setSelectedLang({
                title: "Typescript",
                desc: Descriptions.typescript,
              });
            }}
          />
          <Card
            lang="Python"
            onClick={() => {
              setSelectedLang({ title: "Python", desc: Descriptions.python });
              setPercentage(55);
            }}
          />
          <Card
            lang="Prisma"
            onClick={() => {
              setSelectedLang({ title: "Prisma", desc: Descriptions.prisma });
              setPercentage(95);
            }}
          />
          <Card
            lang="Tailwind"
            onClick={() => {
              setPercentage(70);
              setSelectedLang({
                title: "Tailwind",
                desc: Descriptions.tailwind,
              });
            }}
          />
          <Card
            lang="Bootstrap"
            onClick={() => {
              setPercentage(50);
              setSelectedLang({
                title: "Bootstrap",
                desc: Descriptions.bootstrap,
              });
            }}
          />
          <Card
            lang="Sql"
            onClick={() => {
              setPercentage(89);
              setSelectedLang({ title: "Sql", desc: Descriptions.sql });
            }}
          />
          <Card
            lang="PostgreSql"
            onClick={() => {
              setPercentage(95);
              setSelectedLang({
                title: "PostgreSql",
                desc: Descriptions.postgresql,
              });
            }}
          />
          <Card
            lang="MongoDb"
            onClick={() => {
              setPercentage(100);
              setSelectedLang({ title: "MongoDb", desc: Descriptions.mongodb });
            }}
          />
        </div>
      </div>
    </div>
  );
}
