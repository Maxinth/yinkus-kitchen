import Clients from "../Clients";
import PatternedBox from "./PatternedBox";
import { data } from "./data";

const PatternedSection = () => {
  return (
    <>
      <PatternedBox {...data[0]} />
      <Clients />
      <PatternedBox {...data[1]} />
    </>
  );
};

export default PatternedSection;
