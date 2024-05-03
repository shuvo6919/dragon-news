import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  const [newses, setNewses] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNewses(data));
  }, []);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h1 className="text-xl font-semibold">All Categories</h1>
      <div className="flex flex-col gap-4 mt-3 ms-8 CATEGORY-CONTAINER">
        {categories.map((category) => (
          <NavLink className="text-xl" key={category.id}>
            {category.name}
          </NavLink>
        ))}
      </div>
      <div className="mt-4">
        {newses.slice(0, 3).map((news) => (
          <div className="mt-4" key={news._id}>
            <img src={news.image_url} alt="" />
            <h3 className="mt-2 font-bold">{news.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
