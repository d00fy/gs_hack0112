import React from "react";

import { useState } from "react";

// import { BrowserRouter, Route, Switch } from "react-router-dom";
const initialState = [];
function Paid() {
  const [showData, setData] = useState(initialState);

  let userId = {
    user_id: 1
  };

  const url = "http://192.168.10.189:8000/api/user/userPage";

  async function postApi() {
    const res = await fetch(url, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(userId)
    });
    const data = await res.json();
    return data;
  }

  postApi()
    .then(data => {
      setData(data);
    })
    .catch(err => {
      console.log(err);
    });

  return (
    <div>
      <p>{showData.user_id} </p>
    </div>
  );
}

export default Paid;
