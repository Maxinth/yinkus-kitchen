import PropTypes from "prop-types";

const Button = ({ bgColor, textColor, children, isFullWidth = false }) => {
  return (
    <button
      className={`px-[30px] py-[10px] font-medium rounded-[20px] cursor-pointer flex gap-2 items-center ${
        isFullWidth ? "w-full justify-center" : ""
      }`}
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.object,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  isFullWidth: PropTypes.bool,
};

export default Button;
