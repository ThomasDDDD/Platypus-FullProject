import { NavLink } from "react-router-dom";
import "../components/ProductCard.css";

function ProductCard({ product }) {
  return (
    <NavLink to={product._id}>
      <div className="product-Card">
        <img src={product.image}></img>
        <p>{product.title}</p>
        <p>$ {product.price}</p>
      </div>
    </NavLink>
  );
}
export default ProductCard;
