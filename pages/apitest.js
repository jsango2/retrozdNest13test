import { useState, useEffect } from "react";
const Fetch = () => {
  useEffect(() => {
    fetch("https://retrozadar.com/.netlify/functions/fetch")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <h1>The value of customKey is: {process.env.customKey}</h1>;
};
export default Fetch;
