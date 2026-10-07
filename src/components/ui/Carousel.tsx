"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const gallery = [
  "/images/galeria-1.webp",
  "/images/galeria-2.webp",
  "/images/galeria-3.webp",
  "/images/galeria-4.webp",
];

export function Carousel() {
  const [active, setActive] = useState(0);
  const startX = useRef<number | null>(null);

  const go = (next: number) => setActive((next + gallery.length) % gallery.length);

  return (
    <div className="md:hidden">
      <div
        className="relative overflow-hidden rounded-[16px]"
        onTouchStart={(event) => {
          startX.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (startX.current === null) return;
          const delta = event.changedTouches[0].clientX - startX.current;
          startX.current = null;
          // arrastar para o lado troca a foto
          if (Math.abs(delta) > 40) go(active + (delta < 0 ? 1 : -1));
        }}
      >
        <Image
          key={gallery[active]}
          src={gallery[active]}
          alt="Registro de treinamento comercial"
          width={900}
          height={600}
          className="enter aspect-[3/2] w-full object-cover"
          style={{ animationDuration: "500ms" }}
        />
      </div>
      <div className="mt-2 flex items-center justify-center">
        {gallery.map((item, index) => (
          <button
            key={item}
            className="focus-ring group grid h-8 min-w-8 place-items-center rounded-full"
            aria-label={`Mostrar foto ${index + 1}`}
            aria-current={active === index}
            onClick={() => setActive(index)}
          >
            <span className={`h-2.5 rounded-full transition-all ${active === index ? "w-7 bg-[var(--orange)]" : "w-2.5 bg-white/40"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
