import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Profile from "./components/user/Profile";
import Login from "./components/user/Login";
import ChangeColor from "./components/user/ChangeColor";

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
