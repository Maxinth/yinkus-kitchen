import Logo from "../assets/fork-and-knife.svg";
import Yinkus from "../assets/Yinkus.svg";
import Button from "./Button";
import Hamburger from "../assets/hamburger.svg";

const Nav = () => {
  return (
    <nav className="w-full bg-[#660000]">
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
        <div className="hidden md:block">
          <Button textColor="#660000" bgColor="#FFFFFF">
            Contact us
          </Button>
        </div>
      </header>
    </nav>
  );
};

export default Nav;
