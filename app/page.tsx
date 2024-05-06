import About from "@/components/pages/LandingPage/About";
import HeroSection from "@/components/pages/LandingPage/HeroSection";
import Enkripsi from "@/components/pages/LandingPage/Enkripsi";

import ListFitur from "@/components/pages/LandingPage/ListFitur";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Enkripsi/>
      <ListFitur/>
      <About/>
    </>
  );
}
