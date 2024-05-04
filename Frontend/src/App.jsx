import React from "react";
import { Routes, Route} from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />}></Route>
      <Route path="/signup" element={<SignUpForm />}></Route> 
      <Route path="/user" element={<UserInfo />}></Route> 
    </Routes>
  );
}

export default App;
