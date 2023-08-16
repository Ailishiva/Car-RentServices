import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PaymentDetailsPage from "../components/UI/PaymentDetailsPage";

const Routers = () => {
  return (
    <Routes>
      {/* /:slug */}
      {/* <Route path="/" element={<Navigate to="/" />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/cars/:slug/confirmation" element={<PaymentDetailsPage/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
