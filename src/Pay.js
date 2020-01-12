import React from "react";

import { useState } from "react";

// import { BrowserRouter, Route, Switch } from "react-router-dom";
const initialState = [];
function Pay() {
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

  // async function getApi() {
  //   const res = await fetch(url, {
  //     method: "post",
  //     mode: "cors"
  //   });
  //   const data = await res.json();
  //   return data;
  // }

  // getApi()
  // .then(data => {
  //   console.log(JSON.stringify(data));
  //   setData(JSON.stringify(data));
  // })
  // .catch(err => {
  //   console.log(err);
  // });

  //
  // const url2 = "http://192.168.10.189:8000/api/ticket/create";
  // let user = {
  //   menter_id: 2,
  //   student_id: 2,
  //   content: "焼肉"
  // };

  // let result = await response.json();
  // alert(result.message);

  return (
    <div>
      <p>{showData.user_id} </p>
    </div>
  );
}

export default Pay;
