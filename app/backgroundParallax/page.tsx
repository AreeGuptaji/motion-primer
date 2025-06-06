"use client";
import Lenis from "lenis";
import Intro from "./_components/Intro";
import Description from "./_components/Description";
import Section from "./_components/Section";
import { useEffect } from "react";
export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <main>
        <Intro />
        <Description />
        <Section />
        <div className="h-screen"></div>
      </main>
    </>
  );
}
