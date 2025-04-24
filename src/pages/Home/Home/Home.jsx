import React from "react";
import Banner from "../../Banner/Banner";
import Products from "../Products/Products";
import NavigationBar from "../../NavigationBar/NavigationBar";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div className="space-y-2 p-5 ">
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};

export default Home;
