import React, { useEffect } from "react";

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

  useEffect(() => {
    postApi()
      .then(data => {
        const receiveList = [];
        console.log(data.receiveList.length);
        for (let count = 0; count < data.receiveList.length; count++) {
          receiveList.push(data.receiveList[count]);
        }
        setData(receiveList);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <table>
        <tr>
          <td>名前</td>
          <td>内容</td>
          <td>発行日</td>
          <td>ステータス</td>
        </tr>
        {showData.map(x => {
          return (
            <tr>
              <td>{x.name}</td>
              <td>{x.content}</td>
              <td>{x.time}</td>
              <td>{x.status ? "true" : "false"}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Paid;
