import React from "react";

export default function LoadingSpinner() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
