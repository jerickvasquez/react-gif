//import React, { useEffect, useState } from "react";

import { GifGridItem } from "./GifGridItem";
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  //!Solo quiero se ejecute el componente cuando el objeto es renderizado por primera vez

  return (
    <>
      <h1 className="animate__zoomInDown">{category}</h1>
      {loading && <p className="animate__shakeY">Loading...</p>}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
