import CoreValues from "./components/CoreValues";
import HeroSection from "./components/HeroSection";
import PatternedSection from "./components/PatternedSection";
import Nav from "./components/Nav";
import OurStory from "./components/OurStory";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <main className="w-full ease-in duration-100 font-Graphik">
      <Nav />
      <HeroSection />
      <section className="bg-[#fff] mt-[150px] md:mt-[50px]" id="our-story">
        <OurStory />
      </section>
      <CoreValues />
      <PatternedSection />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
