import Logo from "../assets/fork-and-knife.svg";
import Yinkus from "../assets/Yinkus.svg";
import Button from "./Button";
import Hamburger from "../assets/hamburger.svg";
import { motion } from "framer-motion";
import { useVariants } from "./useVariants";

const Nav = () => {
  const { pageVariant, variantProps } = useVariants();
  return (
    <motion.nav
      variants={pageVariant(1, 0)}
      {...variantProps}
      className="w-full bg-[#660000]"
    >
      <header className="p-[28px] flex items-center justify-between mx-auto max-w-[1400px]  w-full">
        <div className="logo flex items-center gap-2 ">
          <img src={Logo} alt="logo" />
          <img src={Yinkus} alt="logoName" className="lg:hiddend" />
        </div>
        <img
          src={Hamburger}
          alt="hamburger"
          className="md:hidden cursor-pointer"
        />
        <div className="hidden md:flex items-center gap-[30px]">
          <div className="flex items-center gap-[30px] text-[#fff]">
            <a href="#our-story">Our Story</a>
            <a href="#our-core-values">Our core values</a>
            <a href="#our-clients">Our clients</a>
          </div>
          <Button textColor="#660000" bgColor="#FFFFFF">
            Contact us
          </Button>
        </div>
      </header>
    </motion.nav>
  );
};

export default Nav;
