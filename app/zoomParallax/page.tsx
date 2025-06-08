"use client";
import { useEffect } from "react";
import styles from "./page.module.scss";
import Lenis from "lenis";

import ZoomParallax from "./_components/ZoomParallax";

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
      <main className={styles.main}>
        <ZoomParallax />
      </main>
    </>
  );
}
