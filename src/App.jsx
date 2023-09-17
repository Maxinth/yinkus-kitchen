import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import OurStory from "./components/OurStory";

function App() {
  return (
    <main className="w-full">
      <Nav />
      <HeroSection />
      <section className="bg-[#fff] mt-[70px]">
        <OurStory />
      </section>
    </main>
  );
}

export default App;
