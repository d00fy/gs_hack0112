import React from "react";

// import { BrowserRouter, Route, Switch } from "react-router-dom";

function Pay() {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const greet = async () => {
    console.log("おやすみ");

    try {
      await sleep(2000);
      console.log("おきた");
      console.log("おはよう");
    } catch (err) {
      console.log("睡眠時間", err);
    }
  };

  greet();

  return <>てすとー</>;
}

export default Pay;
