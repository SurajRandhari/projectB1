import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
