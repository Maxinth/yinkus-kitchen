import PropTypes from "prop-types";

const Button = ({
  bgColor,
  textColor,
  children,
  isFullWidth = false,
  otherClasses = "",
}) => {
  return (
    <button
      className={`md:px-[30px] md:py-[10px] font-medium rounded-[20px] cursor-pointer flex gap-2 items-center text-[12px] md:text-base p-4  ${
        isFullWidth ? "w-full justify-center" : ""
      } ${otherClasses?.length ? otherClasses : ""}`}
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.object,
  textColor: PropTypes.string,
  otherClasses: PropTypes.string,
  bgColor: PropTypes.string,
  isFullWidth: PropTypes.bool,
};

export default Button;
