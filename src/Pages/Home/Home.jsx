import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftNavbar from "../Shared/LeftNavbar/LeftNavbar";
import Navbar from "../Shared/Navbar/Navbar";
import RightNavbar from "../Shared/RightNavbar/RightNavbar";

import BreakingNews from "./BreakingNews";
import { useState } from "react";
const Home = () => {
  const [showCategory, setShowCategory] = useState(false);
  const handleShowCategory = () => {
    setShowCategory(!showCategory);
  };
  const handleNewsCategory = (catID) => {
    console.log("clicked");
    console.log(catID);
  };
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-4 gap-6">
        <div className="">
          <button
            onClick={handleShowCategory}
            className="block md:hidden  btn btn-info ms-auto"
          >
            {showCategory ? "Hide" : "Show"} Category
          </button>
          <div className={`${showCategory ? "block" : "hidden"} md:block`}>
            <LeftNavbar handleNewsCategory={handleNewsCategory}></LeftNavbar>
          </div>
        </div>
        <div className="col-span-2 ">
          <Outlet></Outlet>
        </div>
        <div className="">
          <RightNavbar></RightNavbar>
        </div>
      </div>
    </div>
  );
};

export default Home;
