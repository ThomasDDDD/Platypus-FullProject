import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import SingleProduct from "../pages/ProductPage.jsx";
import CategoryPage from "../pages/CategoryPage.jsx";
import { ContactPage } from "../pages/ContactPage.jsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <ContactPage />
      },
      {
        path: "/CategoryPage",
        element: <CategoryPage />,
        children: [
          {
            path: ":category",
            element: <CategoryPage />,
          },
          {
            path: ":id",
            element: <SingleProduct />,
          },
        ],
      },
    ],
  },
]);

export default AppRouter;
