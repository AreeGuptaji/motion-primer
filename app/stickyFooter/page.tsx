"use client";
import { useEffect } from "react";
import Intro from "./_components/Intro";
import Footer from "./_components/Footer1";
import Lenis from "lenis";

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
    <main>
      <Intro />
      <Footer />
    </main>
  );
}
