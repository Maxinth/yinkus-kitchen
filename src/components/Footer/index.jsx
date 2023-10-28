import Logo from "../../assets/fork-and-knife.svg";
import Yinkus from "../../assets/Yinkus.svg";
import Insta from "../../assets/insta.svg";

const Footer = () => {
  return (
    <footer className="bg-[#660000] px-[49px] py-[27px] flex items-center justify-center md:justify-between text-white mt-[80px]">
      <div className="logo  items-center gap-2 hidden md:flex">
        <img src={Logo} alt="logo" />
        <img src={Yinkus} alt="logoName" />
      </div>
      <div>© 2023 Yinkus Kitchen Limited. All rights reserved.</div>
      <div className=" items-center hidden md:flex">
        <img src={Insta} alt="instagram" />
        <a
          href="https://www.instagram.com/yinkuskitchen56/"
          className="font-normal"
        >
          @yinkuskitchen56
        </a>
      </div>
    </footer>
  );
};

export default Footer;
