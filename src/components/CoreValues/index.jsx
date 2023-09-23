import ValuesBox from "./ValuesBox";
import { data } from "./data";
const CoreValues = () => {
  const { text } = data;
  return (
    <section className="w-full">
      <div className="mt-[50px] px-[33px] md:max-w-[920px] md:mx-auto">
        {text?.map((item, index) => (
          <p
            className="text-sm leading-5 text-[#1C280B] tracking-[0.14px] font-normal mb-4 md:text-base md:leading-[26px] md:tracking-[0.32px]"
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="mt-[50px]">
        <h3 className="uppercase text-center text-[18px] font-medium text-[#1C280B]">
          Our Core Values
        </h3>
        <ValuesBox />
      </div>
    </section>
  );
};

export default CoreValues;
