"use client";

import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { Item } from "@/lib/data";

interface PopupProps {
  open: boolean;
  onClose: () => void;
  item: Item;
}

export default function Popup({
  open,
  onClose,
  item,
}: PopupProps) {
  if (!open) return null;

console.log(item);
console.log(item.image);


  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md p-6">
      <div className="relative w-full max-w-5xl rounded-[36px] bg-white border-2 border-[#17142A] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 w-12 h-12 rounded-full border-2 border-[#17142A] bg-white flex items-center justify-center hover:scale-110 transition"
        >
          <X size={22} />
        </button>

        <div className="grid md:grid-cols-2 min-h-[520px]">

          {/* LEFT */}
          <div className="relative bg-[#F5F4F2] flex items-center justify-center p-10">

            {item.image ? (
   <Image
  src={item.image}
                alt={item.title}
                width={350}
                height={520}
                className="rounded-2xl shadow-2xl object-cover"
              />
            ) : (
              <div className="text-8xl">
                {item.emoji}
              </div>
            )}

          </div>

          {/* RIGHT */}
          <div className="p-12 flex flex-col">

            <span className="uppercase tracking-[0.25em] text-sm text-gray-500">
              {item.type}
            </span>

            <h1 className="mt-4 text-5xl font-black">
              {item.title}
            </h1>

            <p className="text-lg text-gray-500 mt-3">
              {item.subtitle}
            </p>

            <p className="mt-8 leading-8 text-gray-700">
              {item.blurb}
            </p>

            <div className="mt-10 space-y-4">

              {item.links?.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border-2 border-[#17142A] px-6 py-5 hover:bg-black hover:text-white transition-all duration-300"
                >
                  <span>{link.title}</span>

                  <ExternalLink size={20} />
                </a>
              ))}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}