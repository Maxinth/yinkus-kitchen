import { motion } from "framer-motion";
import { useVariants } from "./useVariants";
import Button from "./Button";
import RotateDish from "../assets/rotate-dish.png";
import { RightArrow } from "../assets/icons";
import Highlight from "../assets/highlight.png";
import ChefCap from "../assets/chefCap.png";

const HeroSection = () => {
  const { variantProps, slideFromTop, pageVariant } = useVariants();
  return (
    <motion.div
      variants={slideFromTop}
      {...variantProps}
      className="bg-[#fff]  w-full h-[700px] bg-cover bg-no-repeat items-center  flex flex-col md:flex-row gap-4 px-8 py-10 pb-16"
    >
      <motion.div
        variants={pageVariant(2, 1)}
        className="w-full px-4 flex flex-col justify-center items-center md:block"
      >
        <h1 className="text-4xl mb-3  font-Mulish font-light text-[#000]">
          <div className="flex flex-col justify-center items-center">
            <img
              src={Highlight}
              alt="highlight"
              className="relative w-10 h-10 self-start hidden md:block   md:-left-8 md:top-4 md:w-fit md:h-fit"
            />
            <span className="md:mb-[20px] inline-block !text-[20px] md:!text-[32px] self-start text-center md:text-left uppercase w-full">
              {" "}
              Welcome to
            </span>{" "}
          </div>
          <br />
          <span className="font-[900] text-[#600] text-[45px] md:text-[72px] mb-[20px] inline-block text-center md:text-left w-full">
            Yinkus Kitchen
          </span>
        </h1>
        <p className="font-irishGrover md:text-[36px] text-[20px] text-center md:text-left  mb-[20px] ">
          A place where culinary magic happens!
        </p>
        <h2 className="text-base md:text-[20px] max-w-[430px] md:max-w-none mb-[32px] text-center md:text-left">
          Discover a world of flavors in every bite, every dish tells a
          delicious story...
        </h2>
        <Button
          textColor={"#660000"}
          bgColor="#fff"
          otherClasses="border duration-150 ease-in border-[#660000] hover:cursor-pointer rounded-[30px] flex items-center group gap-2 hover:!bg-[#660000] hover:!border-[#fff] hover:!text-[#fff] !w-fit"
        >
          Explore <RightArrow />
        </Button>
      </motion.div>
      <div className="relative">
        <img
          src={RotateDish}
          alt="rotate dish"
          className="animate-rotate-dish w-80 h-80 md:w-full md:h-full"
        />
        <img
          src={ChefCap}
          alt="cap"
          className="absolute top-[25%] right-[25%] left-[25%] bottom-[20%] w-40 h-40 md:top-[25%] md:bottom-[10%] md:left-[25%] md:right-[90%}  md:block md:w-fit md:h-fit"
        />
      </div>
    </motion.div>
  );
};

export default HeroSection;
