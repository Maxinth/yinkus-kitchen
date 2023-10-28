const FormInput = () => {
  return (
    <label className="flex flex-col justify-start items-start">
      <span className="text-white mb-[14px]">Name</span>
      <input
        type="text"
        placeholder=""
        className="outline-none rounded-[10px] py-[17px] px-[14px]"
      />
    </label>
  );
};

export default FormInput;
