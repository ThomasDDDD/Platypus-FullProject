function SingleProductCard({ product }) {
  console.log(product);
  return (
    <div className="singleProductCardContainer">
      <img src={product.image}></img>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.reviews}</p>
      <p>{product.description}</p>
    </div>
  );
}
export default SingleProductCard;
