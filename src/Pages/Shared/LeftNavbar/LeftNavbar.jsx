import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./leftNavbar.css";

const LeftNavbar = ({ handleNewsCategory }) => {
  const [categories, setCategories] = useState([]);
  const [newses, setNewses] = useState([]);
  useEffect(() => {
    fetch("../news.json")
      .then((res) => res.json())
      .then((data) => setNewses(data));
  }, []);
  useEffect(() => {
    fetch("../categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  console.log(newses);
  return (
    <div>
      <h1 className="text-xl font-semibold">All Categories</h1>
      <div className="flex flex-col  mt-3  CATEGORY-CONTAINER">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            onClick={() => handleNewsCategory(category.id)}
            className="text-xl ps-6 py-3 "
            key={category.id}
          >
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
