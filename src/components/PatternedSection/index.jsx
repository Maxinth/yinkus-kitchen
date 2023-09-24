import PatternedBox from "./PatternedBox";
import { data } from "./data";

const PatternedSection = () => {
  return (
    <>
      {data?.map((item, index) => (
        <PatternedBox key={index} {...item} />
      ))}
    </>
  );
};

export default PatternedSection;
