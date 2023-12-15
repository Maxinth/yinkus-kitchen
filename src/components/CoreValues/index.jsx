import ValuesBox from "./ValuesBox";
import { data } from "./data";
const CoreValues = () => {
  const { text, values } = data;

  return (
    <section className="w-full" id="our-core-values">
      <div className="mt-[50px] px-[33px] md:max-w-[920px] md:mx-auto">
        {text?.map((item, index) => (
          <p
            data-aos="fade-down"
            className="text-sm leading-5 text-[#1C280B] tracking-[0.14px] font-normal mb-4 md:text-base md:leading-[26px] md:tracking-[0.32px]"
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="mt-[50px]">
        <h3 className="uppercase text-center text-[18px] font-medium text-[#1C280B] mb-[30px] md:text-[22px]">
          Our Core Values
        </h3>
        <div className="px-[90px] md:flex md:items-center md:justify-evenly gap-5 w-full md:px-16">
          {values?.map((item) => (
            <ValuesBox key={item?.text} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
