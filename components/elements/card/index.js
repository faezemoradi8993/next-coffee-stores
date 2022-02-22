import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
  return (
    <Link
      href={`coffee-store/[id]`}
      as={`coffee-store/${props.to.toString()}`}
      className=""
    >
      <a className="text-white text-[15px] hover:cursor-pointer font-bold bg-pink-200 w-full p-5 rounded-lg shadow-sm hover:bg-pink-100 hover:shadow-xl h-[260px] flex items-center justify-between flex-col group">
        <h1 className="leading-9 mb-5 group-hover:text-pink-300 ">
          {props.name} >
        </h1>
        <div className="flex justify-end items-center bg-white rounded-lg ">
          <Image
            src={"/static/hero-image.png"}
            alt={props.name}
            width={200}
            height={150}
          />
        </div>
      </a>
    </Link>
  );
}
