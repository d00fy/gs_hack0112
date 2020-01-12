import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const initialState = [];
function Ticket() {
  const [showData, setData] = useState(initialState);

  const uri = "http://192.168.10.189:8000/api/user/userName";

  async function getApi() {
    const res = await fetch(uri, {
      mode: "cors"
    });
    const data = await res.json();
    return data;
  }

  useEffect(() => {
    getApi()
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // let userId = {
  //   user_id: 1
  // };

  // const url = "http://192.168.10.189:8000/api/user/userPage";

  // async function postApi() {
  //   const res = await fetch(url, {
  //     method: "post",
  //     mode: "cors",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8"
  //     },
  //     body: JSON.stringify(userId)
  //   });
  //   const data = await res.json();
  //   return data;
  // }

  // // postApi()
  // //   .then(data => {
  // //     setData(data);
  // //   })
  // //   .catch(err => {
  // //     console.log(err);
  // //   });

  // useEffect(() => {
  //   postApi()
  //     .then(data => {
  //       // console.log(JSON.stringify(data));
  //       console.log(data);
  //       // const items = [];
  //       // items.push(data);
  //       // console.log(items);
  //       setData(data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   // console.log(showData);
  // }, []);

  console.log(showData);

  return (
    <>
      <h1>新規チケット発行</h1>
      <select>
        <option value="">誰に？</option>
        {showData.map(x => {
          const xx = [];
          xx.push(x);
          console.log(xx[0].id);
          return (
            <option value={xx[0].id} key={xx[0].id}>
              {xx[0].name}
            </option>
          );
        })}
      </select>
      <h2>チケット内容</h2>
      <div>
        <ul>
          <li>
            <Link to="/">発行する</Link>
          </li>
          <li>
            <Link to="/">キャンセル</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Ticket;
