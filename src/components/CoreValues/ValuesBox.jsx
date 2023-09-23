import PropTypes from "prop-types";

const ValuesBox = ({ imgSrc, text }) => {
  return (
    <div className="bg-[#330000] w-full gap-[30px] flex flex-col items-center justify-center rounded-[10px] py-[24px] mb-[20px] md:mb-0 hover:scale-105 ease-in duration-100">
      <img src={imgSrc} alt="kxk" className="" />
      <span className="text-[#E0E0E0] text-[22px]">{text}</span>
    </div>
  );
};

ValuesBox.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string,
};

export default ValuesBox;
