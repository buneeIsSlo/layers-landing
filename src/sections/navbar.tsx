"use client";

import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="fixed top-0 z-50 w-full py-4 lg:py-8">
        <div className="container max-w-5xl">
          <div className="rounded-[27px] border border-white/15 bg-neutral-950/70 backdrop-blur md:rounded-full">
            <div className="grid grid-cols-2 items-center p-2 px-4 md:pr-2 lg:grid-cols-3">
              <div className="">
                <Image
                  src={logoImage}
                  alt="layers logo"
                  className="h-9 w-auto md:h-auto"
                />
              </div>

              <div className="hidden items-center justify-center lg:flex">
                <nav className="flex gap-6 font-medium">
                  {navLinks.map((link) => (
                    <a href={link.href} key={link.label}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex justify-end gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu cursor-pointer md:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-translate-y-1 rotate-45",
                    )}
                  ></line>
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge("transition", isOpen && "scale-0")}
                  ></line>
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "translate-y-1 -rotate-45",
                    )}
                  ></line>
                </svg>

                <Button
                  variant="secondary"
                  className="hidden cursor-pointer items-center md:inline-flex"
                >
                  Log In
                </Button>
                <Button
                  variant="primary"
                  className="hidden cursor-pointer items-center md:inline-flex"
                >
                  Sign Up
                </Button>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className=""
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {link.label}
                      </a>
                    ))}

                    <Button
                      variant="secondary"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Log In
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Sign Up
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]" aria-hidden></div>
    </>
  );
}
