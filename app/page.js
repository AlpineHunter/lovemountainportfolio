import About from "@/components/About";
import Climbed from "@/components/Climbed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TopButton from "@/components/TopButton";
import Projects from "@/components/Projects";
import Image from "next/image";
import "../app/globals.css";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Climbed />
      <Projects />
      <Contact />
      <Footer />
      <TopButton />
    </>
  );
}
