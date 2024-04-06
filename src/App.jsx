import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import Card from "./components/cards/Cards";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Blog from "./components/blog/Blog";
import DetailBlog from "./components/blog/DetailBlog";
// import Sidebar from "./components/admin/Sidebar";
import Dashboard from "./components/adminn/Dashboard";
import ContactUs from "./components/contact/contact";
import AboutUs from "./components/about/About";

import "./css/custom.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Body />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/card" element={<Card />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/detail/blog" element={<DetailBlog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/sidebar" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};
export default App;
