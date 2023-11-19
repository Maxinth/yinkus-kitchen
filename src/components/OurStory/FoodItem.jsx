import PropTypes from "prop-types";

const FoodItem = ({ shiftDown = false, imgSrc }) => {
  return (
    <img
      data-aos="fade-up"
      src={imgSrc}
      alt="foodOne"
      className={`cursor-pointer ${
        shiftDown ? "relative top-10" : ""
      } hover:scale-110 ease-out duration-150`}
    />
  );
};

FoodItem.propTypes = {
  shiftDown: PropTypes.bool,
  imgSrc: PropTypes.string,
  index: PropTypes.number,
};

export default FoodItem;
