import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   /*
//     why we used use effect here?
//     because if we don't, when the page will refresh, setIsLoggedIn will be called and
//     the component will be re-rendered multiple times, whenever the value of state changes.
//     so we set [] as dependency which means it will only run once
//   */
//   useEffect(() => {
//     const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

//     if (storedUserLoggedInInformation === "1") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const loginHandler = (email, password) => {
//     // We should of course check email and password
//     // But it's just a dummy/ demo anyways
//     localStorage.setItem("isLoggedIn", 1);
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem("isLoggedIn");
//     setIsLoggedIn(false);
//   };

//   return (
//     <React.Fragment>
//       {/* We used the provider here and wrapped everything because we need this context in all components
//         After we provide the value isLoggedIn false .. object it will only show admin.. as in navigation
//         component we have set ctx.isLoggedIn i.e false right now for users link

//         // so we will provide the state of isLogged IN to change it
//       */}

//       {/* <AuthContext.Provider value={{ isLoggedIn: false }}> */}

//       {/*  now the users link will also  be shown  */}
//       <AuthContext.Provider
//         value={{ isLoggedIn: isLoggedIn, onLogout: loginHandler }}
//       >
//         {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
//         <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
//         <main>
//           {/* here we pass onLogin and onLogout because we are not forwarding it to
//           another child , we are directly using it in login and home page */}
//           {!isLoggedIn && <Login onLogin={loginHandler} />}
//           {isLoggedIn && <Home onLogout={logoutHandler} />}
//         </main>
//       </AuthContext.Provider>
//     </React.Fragment>
//   );
// }

// AS WE MANAGED ALL STATE AND FUNCTIONS FOR AUTH IN CONTEXT/AUTH-CONTEXT.JS
// WE WILL NOW WRAP WHOLE APP COMPONENT IN THE INDEX.JS WITH CONTEXT

function App() {
  const ctxValue = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctxValue.isLoggedIn && <Login />}
        {ctxValue.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
