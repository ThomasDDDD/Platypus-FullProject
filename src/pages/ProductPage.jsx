import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchData.js";
import SingleProductCard from "../components/SingleProductCard.jsx";

function ProductPage() {
  const [productsData, setProductsData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData("product")
      .then((data) => setProductsData(data))
      .catch((e) => setError(JSON.stringify(e)));
  }, []);

  const searchId = id;

  const product = productsData.find((product) => String(product._id) === searchId);

  return <div>{productsData?.length > 0 ? <SingleProductCard product={product} /> : <p>Product not found</p>}</div>;
}
export default ProductPage;
