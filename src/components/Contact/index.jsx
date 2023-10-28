import BannerImg from "../../assets/flowers.svg";
import Button from "../Button";
import FormInput from "./FormInput";

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 w-full md:flex-row">
      <img
        src={BannerImg}
        alt="bannerImg"
        className="w-full md:max-w-[600px] md:w-1/2 md:relative md:-top-40"
      />
      <div className="w-full p-4 md:w-1/2 md:p-0 md:relative md:right-10">
        <form className="bg-gradient-to-r from-[#770933] to-[#330000] w-full rounded-[10px] py-[50px] px-[20px]">
          <h1 className="pb-[16px] border-b border-b-[#E0E0E0] text-[#E0E0E0] mb-[20px] font-semibold">
            Contact Us
          </h1>
          <div className="flex items-center gap-2">
            <FormInput labelName="First name*" placeholder="Enter first name" />
            <FormInput labelName="Last name" placeholder="Enter last name" />
          </div>
          <FormInput labelName="Email*" placeholder="Enter email address" />
          <FormInput
            labelName="Phone number"
            placeholder="861867081"
            withFlag
          />
          <FormInput
            labelName="Message"
            placeholder="Write message"
            withTextArea
          />

          <Button textColor="#660000" bgColor="#FFFFFF" isFullWidth>
            Let&apos;s talk about food
          </Button>
        </form>
        <div className="w-full text-right mt-[20px]">
          You can also contact us on:{" "}
          <span className="font-bold">+2348130568632</span> or <br />
          <a
            href="mailto:yinkuskitchen56@gmail.com"
            className="text-[#2C32ED] underline text-sm"
          >
            yinkuskitchen56@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
