import FoodItem from "./FoodItem";
import { data } from "./data";

const OurStory = () => {
  return (
    <div className="bg-[#333] pt-[70px] px-[55px] h-full md:min-h-[720px]">
      <h3 className="text-[#E0E0E0] text-3xl font-medium text-center uppercase mb-16">
        Our Story
      </h3>
      <div className="foodItems grid  grid-cols-5 h-full gap-x-5 gap-y-10">
        {/* <FoodItem />
        <FoodItem shiftDown />
        <FoodItem />
        <FoodItem shiftDown />
        <FoodItem />
        <FoodItem />
        <FoodItem shiftDown />
        <FoodItem />
        <FoodItem shiftDown />
        <FoodItem /> */}

        {data?.map((item, index) => (
          <FoodItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default OurStory;
