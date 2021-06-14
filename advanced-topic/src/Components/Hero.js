import React from "react";

function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("Joker is not  allowed");
  }
  return <h1>{heroName}</h1>;
}

export default Hero;
