import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

/* Now lets remove the isLoggedIn and onLogout prop  */

const MainHeader = () => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      {/* <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      /> */}
      <Navigation />
    </header>
  );
};

export default MainHeader;
