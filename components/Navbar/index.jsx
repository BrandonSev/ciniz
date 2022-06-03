import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { AiFillFire, AiFillBell } from "react-icons/ai";

function Navbar() {
  const nav = useRef();
  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        nav.current.classList.add("!fixed");
        nav.current.classList.add("!bg-orange-500");
      } else {
        nav.current.classList.remove("!fixed");
        nav.current.classList.remove("!bg-orange-500");
      }
    });
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <nav
      className="absolute top-0 left-1/2 -translate-x-2/4 z-20 w-full transition-colors"
      ref={nav}
    >
      <div className="flex items-center justify-between container mx-auto py-2">
        <p className="text-xl md:text-3xl uppercase font-bold text-shadow">
          Cin<span className="text-yellow-500">iz</span>
        </p>
        <nav className="flex items-center gap-4">
          <AiFillFire className="md:text-2xl" />
          <AiFillBell className="md:text-2xl" />
          <div className="flex items-center gap-4">
            <picture className="relative w-4 md:w-6 h-4 md:h-6 ">
              <Image
                src={
                  "https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
                }
                layout="fill"
                className="rounded-full"
                alt=""
              />
            </picture>
            <p>Brandon #345</p>
          </div>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;
