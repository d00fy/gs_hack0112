import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/pay">払う</Link>
        </li>
        <li>
          <Link to="/paid">払われる</Link>
        </li>
        <li>
          <Link to="/ticket">チケット発行</Link>
        </li>
      </ul>

      <hr />
    </div>
  );
}

export default Nav;
