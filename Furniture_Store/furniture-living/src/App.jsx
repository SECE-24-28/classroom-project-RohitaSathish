import React from "react";
import Navbar from "./NavBar/navbar";
import Home from "./Home/Home";
import FeatureBox from "./Features/FeatureBox";
import Categories from "./Categories/Categories";
import TrendingProducts from "./Trending/TrendingProducts";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Categories />
        <FeatureBox />
        <TrendingProducts />
          <Footer />
    </div>
  );
}

export default App;
