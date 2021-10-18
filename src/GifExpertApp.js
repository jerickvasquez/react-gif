import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

//!Snipper rafc para que se haga la funcion más rapido
const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  //! Control k + control c para comentar las lineas

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
