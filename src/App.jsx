import CoreValues from "./components/CoreValues";
import HeroSection from "./components/HeroSection";
import PatternedSection from "./components/PatternedSection";
import Nav from "./components/Nav";
import OurStory from "./components/OurStory";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="w-full ease-in duration-100 font-Graphik">
      <Nav />
      <HeroSection />
      <section className="bg-[#fff] mt-[70px]">
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
