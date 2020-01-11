import React from "react";
import { Link } from "react-router-dom";

function Ticket() {
  return (
    <>
      <h1>新規チケット発行</h1>
      <h2>誰に</h2>
      <h2>チケット内容</h2>
      <div>
        <Link to="/">発行する</Link>
        <Link to="/">キャンセル</Link>
      </div>
    </>
  );
}

export default Ticket;
