import Button from "../Button";
import ArrowUp from "../../assets/arrow-up-right.svg";
import PropTypes from "prop-types";

const PatternedBox = ({
  firstText,
  secondText,
  imgOne,
  imgTwoOne,
  imgTwoTwo,
  imgThree,
  scale = false,
}) => {
  return (
    <section className="mt-48">
      <div className="relative md:flex items-center md:bg-[#EAE8E0]">
        <div className="text-center flex flex-col items-center justify-center bg-[#FFFFFF] absolute md:relative z-50  top-[250px] pattern:top-[60px]  left-20 right-20 p-[35px] h-[280px] md:w-[904px] md:h-[150px] md:z-50 md:border md:top-20">
          <h4 className="font-poppins text-[28px] text-[#333333] uppercase">
            {firstText}
          </h4>
          <p className="mb-[30px]">{secondText}</p>
          <div className="md:hidden text-center">
            <Button bgColor={"#600"} textColor={"#fff"}>
              Contact Us
              <img src={ArrowUp} alt="arrow up" />
            </Button>
          </div>
        </div>
        <div className="md:w-full md:relative md:-top-20">
          <img src={imgOne} alt="--" className="w-full" />
        </div>
      </div>
      <div className=" w-fullbg-[#EAE8E0] md:relative md:-top-16">
        <div className="bg-[#EAE8E0] md:flex items-center justify-between gap-4">
          <div
            className={`flex items-start w-full gap-4 mt-40 px-2 mb-4 md:p-0 ${
              scale ? "pattern:flex-wrap" : "flex-wrap"
            } md:mt-2`}
          >
            <img
              src={imgTwoOne}
              alt="f-1"
              className={`${scale ? "w-1/2" : "flex-1"}`}
            />
            <img
              src={imgTwoTwo}
              alt="f-2"
              className={`${scale ? "w-1/2" : "flex-1"}`}
            />
          </div>
          <div className="flex flex-col items-center justify-center self-start">
            <div className="hidden md:block self-end md:p-4">
              <Button bgColor={"#600"} textColor={"#fff"}>
                Contact Us
                <img src={ArrowUp} alt="arrow up" />
              </Button>
            </div>
            <img src={imgThree} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

PatternedBox.propTypes = {
  imgOne: PropTypes.string,
  imgThree: PropTypes.string,
  imgTwoOne: PropTypes.string,
  imgTwoTwo: PropTypes.string,
  firstText: PropTypes.string,
  secondText: PropTypes.string,
  scale: PropTypes.bool,
};

export default PatternedBox;
