import { motion } from "framer-motion";
import { useVariants } from "./useVariants";
import Button from "./Button";
import RotateDish from "../assets/rotate-dish.png";

const HeroSection = () => {
  const { variantProps, slideFromTop, pageVariant } = useVariants();
  return (
    <motion.div
      variants={slideFromTop}
      {...variantProps}
      className="bg-[#fff]  w-full h-[700px] bg-cover bg-no-repeat items-center  flex gap-4 px-8 py-10 pb-16"
    >
      <motion.div variants={pageVariant(2, 1)} className="">
        <h1 className="text-4xl mb-3  font-Mulish font-light text-[#000]">
          <span className="mb-[20px] inline-block"> Welcome to</span> <br />
          <span className="font-[900] text-[#600] text-[72px] mb-[20px] inline-block">
            Yinkus Kitchen
          </span>
        </h1>
        <p className="font-irishGrover text-[36px]  mb-[20px] ">
          A place where culinary magic happens!
        </p>
        <h2 className="text-[20px] max-w-[430px] md:max-w-none mb-[32px]">
          Discover a world of flavors in every bite, every dish tells a
          delicious story...
        </h2>
        <Button
          textColor={"#660000"}
          bgColor="#fff"
          otherClasses="border border-[#660000] rounded-[30px]"
        >
          Explore
        </Button>
      </motion.div>
      <div>
        <img src={RotateDish} alt="rotate dish" />
      </div>
    </motion.div>
  );
};

export default HeroSection;
