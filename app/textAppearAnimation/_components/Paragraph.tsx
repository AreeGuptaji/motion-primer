"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import styles from "./styles.module.scss";
export default function Paragraph({ paragraph }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <motion.p
        ref={container}
        className={styles.Paragraph}
        style={{ opacity }}
      >
        {paragraph}
      </motion.p>
    </>
  );
}
