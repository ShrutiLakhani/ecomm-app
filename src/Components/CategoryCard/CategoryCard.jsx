import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFilter } from "../../context/filter-context";
import "./CategoryCard.css";

export function CategoryCard() {
  const { filterDispatch } = useFilter();
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  const categorizedList = (categoryName) => {
    window.scroll(0, 0);
    filterDispatch({ type: "CATEGORY", payload: categoryName });
  };
  return (
    <div className="card-category-shop">
      {categories.map(({ id, categoryName, categoryImage }) => (
        <div className="card2-container category-card category-img">
          <Link to={"/product"}>
            <img
              src={categoryImage}
              alt={categoryName}
              key={id}
              onClick={() => categorizedList(categoryName)}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
