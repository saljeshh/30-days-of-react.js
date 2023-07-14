import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../context/auth-context";

/*
 now using useContext simple, just use useContext hook and send AuthContext 
 i.e context we created inside context folder/auth-context.js and it will 
 return us an context value that we provided in the provider
 */

const Navigation = () => {
  const ctxValue = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctxValue.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctxValue.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctxValue.isLoggedIn && (
          <li>
            <button onClick={ctxValue.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
