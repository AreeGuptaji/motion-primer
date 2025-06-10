"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Loader from "./_components/Loader/index";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      <main className="flex justify-center items-center">
        <h1 className="text-5xl">Hello World</h1>
      </main>
    </>
  );
}
