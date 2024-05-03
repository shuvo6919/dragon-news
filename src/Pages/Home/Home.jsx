import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftNavbar from "../Shared/LeftNavbar/LeftNavbar";
import Navbar from "../Shared/Navbar/Navbar";
import RightNavbar from "../Shared/RightNavbar/RightNavbar";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-4 gap-6">
        <div className="">
          <LeftNavbar></LeftNavbar>
        </div>
        <div className="col-span-2">
          <h1 className="text-2xl font-semibold">All News</h1>
          <div className="mt-4 space-y-8">
            {allNews.map((news) => (
              <NewsCard key={news._id} news={news}></NewsCard>
            ))}
          </div>
        </div>
        <div className="">
          <RightNavbar></RightNavbar>
        </div>
      </div>
    </div>
  );
};

export default Home;
