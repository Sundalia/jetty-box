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

export default function App() {
  return (
    <>
      <Header />
      <Hero />
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
