import React from "react";
import Testimonial from "./Components/Testimonial.jsx";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex  w-[100vw] h-[100vh] justify-center items-center bg-slate-300">
      <div className="text-center font-bold">
        <h1 className="text-4xl font-bold">"Explore the Beauty of Flowers"</h1>
        <div className="bg-violet-400 h-[4px] w-[1/5] mt-1 mx-auto"></div>
        <Testimonial reviews = {reviews}/>
      </div>
    </div>
  );
};

export default App;
