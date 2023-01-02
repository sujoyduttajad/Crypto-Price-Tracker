import React from "react";

const Description = ({ data }) => {
  const text = data.description.en;
  return (
    <div className="market-container">
      <h3 className="desc-header">
        Learn about <span>{data.name}</span>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default Description;
