import FoodItem from "./FoodItem";
import { data } from "./data";

const OurStory = () => {
  return (
    <div className="bg-[#333] pt-[70px] px-[55px] h-fit min-h-[1200px] md:min-h-[720px]">
      <h3 className="text-[#E0E0E0] text-3xl font-medium text-center uppercase mb-16">
        Our Story
      </h3>
      <div className="foodItems grid grid-cols-2 md:grid-cols-5 h-fit gap-x-5 gap-y-5 n">
        {data?.map((item, index) => (
          <FoodItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default OurStory;
