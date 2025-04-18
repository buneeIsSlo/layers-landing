"use client";

import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Button from "@/components/button";
import Cursor from "@/components/cursor";
import Image from "next/image";
import { motion, useAnimate } from "motion/react";
import { useRef, useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftCursorScope, leftCursorAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightCursorScope, rightCursorAnimate] = useAnimate();
  const constraintRef = useRef(null);

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    leftCursorAnimate([
      [leftCursorScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftCursorScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftCursorScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);

    rightCursorAnimate([
      [rightCursorScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightCursorScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [
        rightCursorScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);

  return (
    <section
      className="overflow-x-clip py-24"
      style={{ cursor: `url(${cursorYouImage.src}), auto` }}
      ref={constraintRef}
    >
      <div className="relative container">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          dragConstraints={constraintRef}
          className="absolute top-16 -left-32 hidden lg:block"
        >
          <Image
            src={designExample1Image}
            alt="design example 1 image"
            draggable={false}
          />
        </motion.div>
        <motion.div
          ref={leftCursorScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute top-96 left-56 hidden lg:block"
        >
          <Cursor name="Andrea" />
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          drag
          dragConstraints={constraintRef}
          className="absolute -top-16 -right-64 hidden lg:block"
        >
          <Image
            src={designExample2Image}
            alt="design example 2 image"
            draggable={false}
          />
        </motion.div>
        <motion.div
          ref={rightCursorScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="absolute -top-4 right-80 hidden lg:block"
        >
          <Cursor name="Bryan" color="red" />
        </motion.div>
        <div className="flex items-center justify-center">
          <div className="inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 font-semibold text-neutral-950">
            ✨ £7.5M seed round raised
          </div>
        </div>
        <h1 className="mt-6 text-center text-6xl font-medium md:px-20 md:text-7xl lg:text-8xl">
          Impactful design, created effortlessly
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xl text-white/50">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>
        <form className="border- mx-auto mt-8 flex max-w-lg items-center gap-2 rounded-full border border-white/15 p-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent px-4 outline-none md:flex-1"
          />
          <Button
            type="submit"
            variant="primary"
            className="cursor-Cursor whitespace-nowrap hover:opacity-90"
            size="sm"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
