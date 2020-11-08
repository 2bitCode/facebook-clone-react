import React from "react";
import "./App.css";
import Header from "./Header/Header";
import SideBar from "./Body/SideBar/SideBar";
import Feed from "./Body/Feed/Feed";
import Widget from "./Body/Widget/Widget";
import { useStateValue } from "./StateProvider/StateProvider";
import Login from "./LoginPage/Login";

function App() {
  const [{ menu, user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="App__body">
            {!menu ? (
              <>
                <SideBar />
                <Feed />
                <Widget />
              </>
            ) : (
              <>
                <SideBar style={{ display: "flex" }} />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
