import Image from "next/image";
import React from "react";
import "./style.css";

type Props = {};

export default function Story({}: Props) {
  return (
    <>
      <div
        id="story"
        className="flex w-full flex-wrap-reverse justify-between bg-[#273146] p-10 items-center"
      >
        <div className="font-mono p-5 w-full lg:max-w-[50%]">
          <h1 className="font-bold">Hi......! 😀</h1>
          <p className="px-2 md:px-10 py-1 font-extrabold">
            Once upon a time in the vibrant city of Yangon, a young and
            passionate individual named jinn embarked on a remarkable journey
            that would transform his life. In the year 2020, with a burning
            curiosity for technology and an insatiable hunger for knowledge,
            jinn decided to venture into the world of programming. Jinn’s
            fascination with coding was ignited by a simple webpage that they
            stumbled upon one fateful afternoon. As they browsed the internet,
            they came across a beautifully designed website that piqued his
            curiosity. It was then that they realized the magic behind the
            digital world lay in the hands of programmers and developers.
          </p>
        </div>
        <div className="">
          <Image
            className="w-[600px]"
            src="/gif/coding.gif"
            width={10000}
            height={10000}
            alt="story-img-1"
          />
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-between bg-[#273146] p-10 items-center">
        <div className="">
          <Image
            className="w-[600px] h-[400px] rounded-full border shadow shadow-[#fff]"
            src="/gif/animal_coding.gif"
            width={10000}
            height={10000}
            alt="story-img-1"
          />
        </div>
        <div className="font-mono p-5 w-full md:max-w-[50%]">
          <h1>Continue......👀</h1>
          <p className="px-2 md:px-10 py-1 font-extrabold">
            Determined to unravel the secrets of this digital realm, Jinn began
            his programming journey. Armed with only a basic understanding of
            computer science, he embarked on the path to becoming a fullstack
            developer. The journey was challenging, to say the least. The first
            few months were filled with frustration and moments of doubt. But
            jinn’s determination knew no bounds. He immersed themselves in
            online tutorials, coding challenges, and open-source projects,
            determined to acquire the knowledge and skills necessary to become a
            proficient developer.
          </p>
        </div>
      </div>
    </>
  );
}
