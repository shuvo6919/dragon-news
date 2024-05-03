import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className=" flex bg-slate-700 my-2 px-4 py-2">
      <button className=" text-white bg-[#D72050] px-4 py-1 me-2">
        Latest
      </button>
      <Marquee speed={100} gradient={true} gradientColor="#D72050">
        <Link className="me-8">
          I can be a React component, multiple React components, or just some
          text.....
        </Link>
        <Link className="me-8">
          I can be a React component, multiple React components, or just some
          text....
        </Link>
        <Link className="me-8">
          I can be a React component, multiple React components, or just some
          text....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
