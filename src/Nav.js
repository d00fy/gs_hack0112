import React from "react";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/pay">払う</Link>
      <Link to="/paid">払われる</Link>
      <Link to="/ticket">チケット発行</Link>
    </div>
  );
}

export default Nav;
