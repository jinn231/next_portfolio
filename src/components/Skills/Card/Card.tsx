import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime";
import Image from "next/image";
import React, { ComponentProps, Dispatch, SetStateAction } from "react";

type Props = {
  lang: string;
};

export default function Card({
  lang,
  ...buttonProps
}: ComponentProps<"button"> & Props) {
  return (
    <button
      {...buttonProps}
      className="bg-[#2f2f4b] p-3 rounded border border-[#d19f43] flex gap-5 items-center hover:translate-y-[-10px] duration-300 cursor-pointer shadow shadow-[orange] active:scale-[1.1]"
    >
      <Image
        className="lang-img"
        src={`/images/languages/${lang.toLowerCase()}.png`}
        alt={lang}
        width={10000}
        height={10000}
      />
      <p className="whitespace-wrap">{lang}</p>
    </button>
  );
}
