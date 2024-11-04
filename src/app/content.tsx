"use client";

import React from "react";

import { useEffect, useState } from "react";

export default function Content() {
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div
      className={`duration-1000 flex w-full justify-start    my-5 ${
        isLoading ? "px-10" : "opacity-0 h-10 px-0"
      }`}
    >
      <div className="bg-gray-700 text-white px-10 py-5 hover:pr-40 duration-1000 rounded-lg">
        <p className="text-2xl">Mr. Patarajarin Napakarn</p>
        <p className="font-bold text-xl my-3">Gabel</p>
        <hr />
        <p className="my-2">Studen ID : 64011224</p>
        <p className="my-2">Faculty Of Engineering</p>
      </div>
      <div className="">
        <img
          src="/aboutus_gabel.jpg"
          width={200}
          height={200}
          alt="gabel"
          className="rounded-xl shadow-md shadow-gray-800"
        />
      </div>
    </div>
  );
}
