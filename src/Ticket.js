import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const initialState = { Data: [], value: 0 };
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
        setData((showData.Data = data));
        console.log(showData.Data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // const handleChange = e => {
  //   console.log(11223);
  //   setData({ value: e.target.value });
  // };

  console.log(showData.Data);
  return (
    <>
      <h1>新規チケット発行</h1>
      <select
        // onChange={() => {
        //   handleChange().bind(this);
        // }}
        onChange={e => setData({ value: e.target.value })}
      >
        <option value="">誰に？</option>
        {showData.Data.map(x => {
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
