"use client";

import { PlusIcon } from "@/components/ui/icons/Icons";
import { useState } from "react";

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div key={item.question} className="rounded-[10px] border border-[var(--line)] bg-white">
            <h3>
              <button
                id={`faq-btn-${index}`}
                className="focus-ring flex w-full items-center justify-between gap-4 rounded-[10px] px-4 py-3.5 text-left text-base font-bold transition-colors hover:bg-[var(--cream-soft)]"
                aria-expanded={active}
                aria-controls={`faq-${index}`}
                onClick={() => setOpen(active ? -1 : index)}
              >
                {item.question}
                <PlusIcon className={`h-5 w-5 shrink-0 text-[var(--red)] transition-transform duration-300 ${active ? "rotate-45" : ""}`} />
              </button>
            </h3>
            <div
              id={`faq-${index}`}
              role="region"
              aria-labelledby={`faq-btn-${index}`}
              inert={!active}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-4 text-[15px] leading-6 text-[var(--muted)]">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
