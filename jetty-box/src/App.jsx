import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Application from "./components/Application";
import HowWeWork from "./components/HowWeWork";
import OurAreas from "./components/OurAreas";
import DropdownList from "./components/DropdownList";
import Slider from "./components/Slider";
import Box from "./components/Box";
import Marquee from "./components/Marquee";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
      <Box />
      <Marquee />
      <div className="relative">
        <Slider />
        <DropdownList />
      </div>
      <OurAreas />
      <HowWeWork />
      <Application />
      <Footer />
    </>
  );
}
