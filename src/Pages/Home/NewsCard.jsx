import { CiShare2 } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { _id, title, image_url, details, author, rating, total_view } = news;
  return (
    <div className="space-y-2  rounded-lg p-3 shadow-2xl bg-[#282f38]">
      <div className="bg-slate-700 p-2 flex justify-between items-center">
        <div className=" flex gap-2 items-center">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={author.img} />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold">{author.name}</h4>
            <p className="text-sm">{author.published_date}</p>
          </div>
        </div>
        <div className="flex text-xl gap-3">
          <CiShare2 />
          <FaRegBookmark />
        </div>
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <img src={image_url} alt="" />

      <div>
        {details.length > 200 ? (
          <>
            <p className="text-sm">
              {details.slice(0, 200)}{" "}
              <Link
                to={`/news_details/${_id}`}
                className="text-lg font-semibold text-blue-600"
              >
                ...See more
              </Link>
            </p>
          </>
        ) : (
          <p className="text-sm">{details}</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center ">
          <div className="flex gap-1">
            <FaStar className="text-[#FFD700]" />
            <FaStar className="text-[#FFD700]" />
            <FaStar className="text-[#FFD700]" />
            <FaStar className="text-[#FFD700]" />
            <FaStar className="text-[#FFD700]" />
          </div>
          <h3 className="text-sm">{rating.number}</h3>
        </div>
        <div className="flex items-center gap-2">
          <FaEye className="text-xl" />
          <h3 className="text-md">{total_view}</h3>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
