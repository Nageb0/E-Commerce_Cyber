import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import ContactUs from "./page/ContactUs";
import Blog from "./page/Blog";
import Layout from "./components/Layout";
import Product_Detail from "./components/Product_Detail";
import { Toaster } from "react-hot-toast";
import ShopCard from "./components/ShopCard";
export default function App() {
  return (
    <div>
      <Toaster position="bottom-left" reverseOrder={true} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="blog" element={<Blog />} />
            <Route path="product/:productId" element={<Product_Detail />} />
            <Route path="shopcard" element={<ShopCard />} />
          </Route>

          <Route path="*" element={<h1>Not Found || 404 Error</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
