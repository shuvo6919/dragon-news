import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard";

const Category = () => {
  const allNews = useLoaderData();
  const currentID = useParams().userID;
  console.log("checking", currentID);
  let filteredNews = [...allNews];

  if (currentID === "0") {
    filteredNews = [...allNews];
  } else {
    filteredNews = allNews.filter((news) => news.category_id === currentID);
  }

  console.log("in category page", currentID);
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">
        News:{filteredNews.length}
      </h1>
      <div className="mt-4 space-y-8">
        {filteredNews.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
