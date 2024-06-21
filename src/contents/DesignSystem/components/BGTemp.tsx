import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

const COLORS = ["bg-slate", "bg-gray", "bg-zinc", "bg-neutral", "bg-stone"];

function BgTemp() {
  const [bgTemp, setBgTemp] = useState<string>("bg-slate");

  return (
    <div className="w-full min-w-0 flex mt-6">
      <div className="w-full p-4 rounded-md bg-zinc-800/50">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            Background Temperature Preview
          </h3>
          <div className="flex w-full flex-col items-center gap-2 mr-2 md:w-auto">
            <div className="flex items-center gap-4">
              {COLORS.map((color, index) => (
                <button
                  key={index}
                  className={`size-6 rounded-full ${color} bg-bg-500 ${
                    bgTemp === color
                      ? "ring-2 ring-zinc-100 ring-offset-2 ring-offset-bg-950"
                      : ""
                  }`}
                  onClick={() => {
                    setBgTemp(color);
                  }}
                ></button>
              ))}
            </div>
          </div>
        </div>
        <img
          src={`/assets/bgTemp/${COLORS.indexOf(bgTemp) + 1}.png`}
          alt="Light/Dark Mode"
          className="w-full mt-4 rounded-md"
        />
      </div>
    </div>
  );
}

export default BgTemp;
