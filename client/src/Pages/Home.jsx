// import React from 'react'
import Navbar from "../components/Navbar";
import Home_comp1 from "../components/Home_comp1";
import Home_comp2 from "../components/Home_comp2";
import Home_comp3 from "../components/Home_comp3";
import Home_comp4 from "../components/Home_comp4";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Home_comp1 />
      </div>
      <div className="">
        <Home_comp2 />
      </div>
      <div>
        <Home_comp3 />
      </div>
      <div>
        <Home_comp4 />
      </div>
    </>
  );
};

export default Home;
