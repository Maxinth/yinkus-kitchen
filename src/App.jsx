import CoreValues from "./components/CoreValues";
import HeroSection from "./components/HeroSection";
import PatternedSection from "./components/PatternedSection";
import Nav from "./components/Nav";
import OurStory from "./components/OurStory";
import ContactUs from "./components/Contact";

function App() {
  return (
    <main className="w-full ease-in duration-100">
      <Nav />
      <HeroSection />
      <section className="bg-[#fff] mt-[70px]">
        <OurStory />
      </section>
      <CoreValues />
      <PatternedSection />
      <ContactUs />
    </main>
  );
}

export default App;
