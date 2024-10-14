import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import ProductCard from "../components/ProductCard";
import { NavLink, useParams } from "react-router-dom";
import "../pages/CategoryPage.css";

import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { IconNavBar } from "../components/IconNavBar";

function CategoryPage() {
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    fetchData("product")
      .then((data) => setProductsData(data))
      .catch((e) => setError(JSON.stringify(e)));
  }, []);

  // console.log(productsData);

  return (
    <div className="categoryPage">
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          {productsData?.length > 0 && Array.isArray(productsData) && (
            <>
              <div className="categoryHeader">
                <NavLink to="#">
                  <HiMagnifyingGlass className="icons" />
                </NavLink>
                <h1>
                  Make home <span>BEAUTIFUL</span>
                </h1>
                <NavLink to="#">
                  <IoCartOutline className="icons" />
                </NavLink>
              </div>
              <IconNavBar />
              {category ? <h2>{category}</h2> : <h2>Products</h2>}
              <div className="productsContainer">
                {productsData.map((product) => {
                  if (!category) {
                    return <ProductCard product={product} key={product._id} />;
                  } else if (product.category === category) {
                    return <ProductCard product={product} key={product._id} />;
                  }
                })}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
export default CategoryPage;
