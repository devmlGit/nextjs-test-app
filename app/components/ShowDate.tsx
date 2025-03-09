"use client";
import React from "react";

function ShowDate() {
  return <p>{new Date().toLocaleTimeString()}</p>;
}

export default ShowDate;
