import React from "react";

export const Thumbnails = ({ item }) => {
  return (
    <div className="thumbnails">
      {/* <img src={item} /> */}
      <h2>{item.name}</h2>
    </div>
  );
};

function Carousel({ content }) {
  return (
    <div className="content-wrapper">
      {/* 1. */}
      <div className="second-wrapper">
        {/* 2. */}
        <div className="third-wrapper">
          {/* 3 */}
          {content.map((item) => {
            return (
              <Thumbnails key={item.id} item={item} />
            );
          })}
          {content.map((item) => {
            return (
              <Thumbnails key={item.id} item={item} /> 
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
