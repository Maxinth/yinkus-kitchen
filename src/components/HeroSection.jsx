const HeroSection = () => {
  return (
    <div
      className="bg-hero-banner text-center w-full h-[700px] bg-cover bg-no-repeat b text-white flex flex-col items-center justify-end px-[15px] pb-16"
      //   style={{ background: "rgba(0, 0, 0, 0.25)" }}
    >
      <h1 className="text-4xl mb-3 font-medium">
        Welcome to Yinkus Kitchen, where culinary magic happens!
      </h1>
      <h2 className="text-[20px] max-w-[430px] md:max-w-none">
        Discover a world of flavors in every bite, every dish tells a delicious
        story...
      </h2>
    </div>
  );
};

export default HeroSection;
