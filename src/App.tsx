import React from "react"
import logo from './logo.svg';
import './App.css';
import LoginRegister from "./Components/LoginRegister/LoginRegister";
import UserProfile from "./Components/UserProfile/UserProfile";
import UserProfile2 from "./Components/UserProfile/UserProfile2";



function App() {

  return (
    <div>
      {/* <LoginRegister /> */}
      <UserProfile />
      <UserProfile2 />
    </div>
  );
}

export default App;
