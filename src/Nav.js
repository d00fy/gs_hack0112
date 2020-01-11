import React from "react";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/pay">払う</Link>
      <Link to="/paid">払われる</Link>
    </div>
  );
}

export default Nav;
