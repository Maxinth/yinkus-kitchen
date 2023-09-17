import Logo from "../assets/fork-and-knife.svg";
import Yinkus from "../assets/Yinkus.svg";
import Button from "./Button";

const Nav = () => {
  return (
    <nav className="w-full bg-[#660000] ">
      <header className="p-[28px] flex items-center justify-between mx-auto md:w-[1202px]">
        <div className="logo flex items-center gap-2 ">
          <img src={Logo} alt="logo" />
          <img src={Yinkus} alt="logoName" />
        </div>
        <Button text="Contact us" textColor="#660000" bgColor="#FFFFFF" />
      </header>
    </nav>
  );
};

export default Nav;
