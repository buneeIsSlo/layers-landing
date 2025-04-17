import Faqs from "@/components/faqs";
import Features from "@/sections/features";
import Hero from "@/sections/hero";
import Integrations from "@/sections/integrations";
import Intro from "@/sections/intro";
import LogoTicker from "@/sections/logo-ticker";
import CallToAction from "../sections/cta";
import Footer from "@/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Intro />
      <Features />
      <Integrations />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  );
}
