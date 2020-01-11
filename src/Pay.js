import React from "react";

import { useState } from "react";

// import { BrowserRouter, Route, Switch } from "react-router-dom";
const initialState = [];
function Pay() {
  const [showData, setData] = useState(initialState);
  const url = "http://192.168.10.189:8000/api/user/userName";
  async function getApi() {
    const res = await fetch(url, {
      mode: "cors"
    });
    const data = await res.json();
    return data;
  }

  getApi()
    .then(data => {
      console.log(JSON.stringify(data));
      setData(JSON.stringify(data));
    })
    .catch(err => {
      console.log(err);
    });

  //
  const url2 = "http://192.168.10.189:8000/api/ticket/create";
  let user = {
    menter_id: 2,
    student_id: 2,
    content: "焼肉"
  };

  async function postApi() {
    await fetch(url2, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(user)
    });
  }

  // let result = await response.json();
  // alert(result.message);

  return (
    <div>
      <p>{showData} </p>
      <button
        onClick={() => {
          postApi();
        }}
      >
        送信
      </button>
    </div>
  );
}

export default Pay;
