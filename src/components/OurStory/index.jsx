import FoodItem from "./FoodItem";
import { data } from "./data";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";
const OurStory = () => {
  const { variantProps, pageVariant } = useVariants();
  return (
    <div className="bg-[#333] pt-[70px] px-[55px] h-fit min-h-[1200px] md:min-h-[720px]">
      <motion.h3
        variants={pageVariant()}
        {...variantProps}
        className="text-[#E0E0E0] text-3xl font-medium text-center uppercase mb-16"
      >
        Our Story
      </motion.h3>
      <div className="foodItems grid grid-cols-2 md:grid-cols-5 h-fit gap-x-5 gap-y-5 n">
        {data?.map((item, index) => (
          <FoodItem key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default OurStory;
