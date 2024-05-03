import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const HomePage = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">
        News:{allNews.length}
      </h1>
      <div className="mt-4 space-y-8">
        {allNews.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
