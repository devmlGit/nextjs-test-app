"use client";
import React from "react";

const AddToCart = () => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        console.log("hey");
      }}
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
