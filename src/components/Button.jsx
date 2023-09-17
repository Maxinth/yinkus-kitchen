import PropTypes from "prop-types";

const Button = ({ text, bgColor, textColor }) => {
  return (
    <button
      className="px-[30px] py-[19px] font-medium rounded-[20px]"
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Button;
