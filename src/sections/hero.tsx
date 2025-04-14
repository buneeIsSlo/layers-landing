import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Button from "@/components/button";
import Cursor from "@/components/cursor";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="overflow-clip py-24">
      <div className="@container relative">
        <div className="absolute top-16 -left-32 hidden lg:block">
          <Image src={designExample1Image} alt="design example 1 image" />
        </div>
        <div className="absolute -top-16 -right-64 hidden lg:block">
          <Image src={designExample2Image} alt="design example 2 image" />
        </div>
        <div className="absolute top-96 left-56 hidden lg:block">
          <Cursor name="Andrea" />
        </div>
        <div className="absolute -top-4 right-80 hidden lg:block">
          <Cursor name="Bryan" color="red" />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 font-semibold text-neutral-950">
            ✨ £7.5M seed round raised
          </div>
        </div>
        <h1 className="mt-6 text-center text-6xl font-medium md:text-7xl lg:text-8xl">
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
            className="min-w-0 flex-1 bg-transparent px-4 outline-none"
          />
          <Button
            type="submit"
            variant="primary"
            className="cursor-pointer px-4 py-2 whitespace-nowrap hover:opacity-90"
            size="sm"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
