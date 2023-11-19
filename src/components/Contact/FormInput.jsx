import PropTypes from "prop-types";
import DropFlag from "../../assets/drop-flag.svg";
const FormInput = ({
  labelName,
  placeholder,
  withFlag = false,
  withTextArea = false,
}) => {
  return (
    <label className="flex flex-col justify-start items-start w-full mb-[30px]">
      <span className="text-white mb-[14px] text-sm">{labelName}</span>
      <div className="w-full flex items-center gap-2">
        {withFlag && (
          <div className="flag ">
            <img src={DropFlag} alt="drop flag" className="cursor-pointer" />
          </div>
        )}

        {withTextArea ? (
          <textarea
            className=" h-[132px] resize-none outline-none rounded-[10px] p-2 py-[12px] bg-transparent border border-[#C0CCDA] text-[12px] placeholder:text-[#E0E0E0] text-white w-full"
            placeholder="Write message"
          ></textarea>
        ) : (
          <input
            type="text"
            placeholder={placeholder}
            className="outline-none rounded-[10px] p-2 py-[12px] bg-transparent border border-[#C0CCDA] text-[12px] placeholder:text-[#E0E0E0] text-white w-full"
          />
        )}
      </div>
    </label>
  );
};

FormInput.propTypes = {
  labelName: PropTypes.string,
  placeholder: PropTypes.string,
  withFlag: PropTypes.bool,

  withTextArea: PropTypes.bool,
};
export default FormInput;
