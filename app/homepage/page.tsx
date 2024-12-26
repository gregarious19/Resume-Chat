import Header from "./header";
import TypingEffect from "../TypingEffect";
import QueryForm from "./Query";
const Homepage = () => {
  return (
    <div>
      <Header></Header>
      <div className="text-5xl h-96 grid justify-center place-content-center		">
        <TypingEffect text={"Heey there, I'm Pranay"}></TypingEffect>
      </div>
      <QueryForm />
    </div>
  );
};
export default Homepage;
