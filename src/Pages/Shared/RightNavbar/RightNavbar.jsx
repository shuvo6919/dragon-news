import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import qZone1 from "../../../../src/assets/images/qZone1.png";
import qZone2 from "../../../../src/assets/images/qZone2.png";
import qZone3 from "../../../../src/assets/images/qZone3.png";
import addBG from "../../../../src/assets/images/bg.png";

const RightNavbar = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold">Login With</h1>
      <div className="mt-4 space-y-2">
        <button className="btn btn-outline btn-info w-full ">
          <FaGoogle /> Login With Google
        </button>
        <button className="btn btn-outline btn-info w-full">
          <FaGithub />
          Login With GitHub
        </button>
      </div>
      <h1 className="text-xl font-semibold mt-8">Find Us On</h1>
      <div className="mt-4">
        <Link className="flex items-center border  p-3 rounded-t-lg">
          <FaFacebook className="me-2 text-lg" />
          Facebook
        </Link>
        <Link className="flex items-center border  p-3 border-y-0 border-x-1">
          <AiFillTwitterCircle className="me-2 text-2xl" />
          Twitter
        </Link>
        <Link className="flex items-center border  p-3 rounded-b-lg">
          <GrInstagram className="me-2 text-xl" />
          Instagram
        </Link>
      </div>
      <h1 className="text-xl font-semibold mt-8">Q-Zone</h1>

      <div className="mt-4">
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>

      <div className="mt-8 relative">
        <img className="w-full" src={addBG} alt="" />
        <div className="flex flex-col items-center absolute top-32 left-1">
          <h1 className="text-3xl text-center font-bold text-white">
            Create an Amazing Newspaper
          </h1>
          <Link className="text-white bg-[#D72050] px-4 py-1   mt-4 ">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightNavbar;
