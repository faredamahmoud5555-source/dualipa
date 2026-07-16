"use client";

import { useState } from "react";
import SaveButton from "./SaveButton";
import Popup from "./Popup";
import { Item } from "@/lib/data";

interface Props {
  item: Item;
}

export default function GraphHero({ item }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-3">
        <SaveButton id={item.id} className="!bg-paper" />

        <button
          onClick={() => setOpen(true)}
          className="text-5xl transition hover:scale-110"
        >
          {item.emoji}
        </button>
      </div>

      <Popup
        open={open}
        onClose={() => setOpen(false)}
        item={item}
      />
    </>
  );
}