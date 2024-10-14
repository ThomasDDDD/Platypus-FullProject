import { NavLink } from "react-router-dom";
import { IconNavBar } from "../components/IconNavBar.jsx";
import { Footer } from "../components/Footer.jsx";
import "./Home.css";

function Home() {
  return (
    <div
      className="
    backgroundImg"
    >
      <main>
        <h2>MAKE YOUR</h2>
        <h1>HOME BEATIFUL</h1>
        <article>
          <p>The best simple place where you discover most wonderful furnitures and make your home beatiful</p>
        </article>
        <button>Get Started</button>
      </main>
      <IconNavBar />
      <Footer />
    </div>
  );
}
export default Home;
