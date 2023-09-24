import FoodOne from "../../assets/f-1.svg";
import FoodTwoOne from "../../assets/f2-1.svg";
import FoodTwoTwo from "../../assets/f2-2.svg";
import FoodThree from "../../assets/f3.svg";
import Button from "../Button";

const PatternedSection = () => {
  return (
    <section className="mt-48">
      <div className="relative md:flex items-center md:bg-[#EAE8E0]">
        <div className="text-center bg-[#FFFFFF] absolute md:relative z-50  top-[250px]   left-20 right-20 p-[35px] h-[280px] md:w-[904px] md:h-[150px] md:z-50 md:border md:top-20">
          <h4 className="font-poppins text-[28px] text-[#333333]">
            Gourmet meals
          </h4>
          <p className="mb-[30px]">
            Indulge your palate with our gourmet delights
          </p>
          <div className="md:hidden">
            <Button bgColor={"#600"} textColor={"#fff"}>
              Contact Us
            </Button>
          </div>
        </div>
        <div className="md:w-full md:relative md:-top-20">
          <img src={FoodOne} alt="--" className="w-full" />
        </div>
      </div>
      <div className=" w-full  bg-[#EAE8E0]">
        <div className="bg-[#EAE8E0] md:flex items-center justify-between gap-4">
          <div className="flex items-start w-full gap-4 mt-40 px-2 mb-4 md:p-0 flex-wrap">
            {" "}
            <img src={FoodTwoOne} alt="f-1" className="flex-1" />
            <img src={FoodTwoTwo} alt="f-2" className="flex-1" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="hidden md:block self-end md:p-4">
              <Button bgColor={"#600"} textColor={"#fff"}>
                Contact Us
              </Button>
            </div>
            <img src={FoodThree} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatternedSection;
