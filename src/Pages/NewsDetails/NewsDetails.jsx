import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import RightNavbar from "../Shared/RightNavbar/RightNavbar";
import Header from "../Shared/Header/Header";

const NewsDetails = () => {
  const userID = useParams();
  const allNews = useLoaderData();
  const ID = userID.userID;
  const news = allNews.find((news) => news._id === ID);

  const { image_url, title, details } = news;
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="md:grid grid-cols-4 gap-4">
        <div className="col-span-3 ">
          <h1 className="text-2xl font-semibold">Dragon News</h1>
          <div className="border rounded-lg p-5 mt-4 space-y-4">
            <img src={image_url} alt="" />
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-sm">{details}</p>
            <button className=" text-white bg-[#D72050] px-4 py-1 ">
              All news in this category
            </button>
          </div>
        </div>
        <div>
          <RightNavbar></RightNavbar>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
