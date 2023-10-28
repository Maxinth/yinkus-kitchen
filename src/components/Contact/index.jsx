import BannerImg from "../../assets/flowers.svg";
import FormInput from "./FormInput";

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <img src={BannerImg} alt="bannerImg" />
      <form className="bg-gradient-to-r from-[#770933] to-[#330000] w-full rounded-[10px] py-[50px] px-[20px]">
        <FormInput />
      </form>
    </div>
  );
};

export default ContactUs;
