import React from "react";

const Description = ({ data }) => {
  const text = data.description.en;
  return (
    <div className="market-container">
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default Description;
