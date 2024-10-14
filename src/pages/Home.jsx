import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>hier könnte Ihre Werbung stehen</p>
      <NavLink to="/CategoryPage">Products</NavLink>
    </>
  );
}
export default Home;
