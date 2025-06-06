"use client";
// 'here we make use of lenis'
import { useRef, useEffect } from "react";
import Image from "next/image";
import Image1 from "@/public/textParallax/image1.png";
import Image2 from "@/public/textParallax/image2.png";
import Image3 from "@/public/textParallax/image3.png";
import { useTransform, motion, useScroll } from "motion/react";

import Lenis from "lenis";
export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="overflow-hidden">
      <div className="h-[100vh]" />
      <div ref={container}>
        <Slide
          src={Image1}
          direction={"left"}
          left={"-40%"}
          progress={scrollYProgress}
        />
        <Slide
          src={Image2}
          direction={"right"}
          left={"-25%"}
          progress={scrollYProgress}
        />
        <Slide
          src={Image3}
          direction={"left"}
          left={"-75%"}
          progress={scrollYProgress}
        />
      </div>
      <div className="h-[100vh]" />
    </main>
  );
}

const Slide = (props) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
    </motion.div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div className={"px-5 flex gap-5 items-center"}>
      <p className="text-[7.5vw]">Front End Developer</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};
