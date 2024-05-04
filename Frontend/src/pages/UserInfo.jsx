import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
const auth = getAuth();

function UserInfo() {
  const [user, setUser] = useState(null);
    const navigate = useNavigate();


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // console.log(user);
      } else {
        console.log("no user signed in");
        setUser(null);
        navigate("/");
      }
    });
  }, []);

  if(user!==null) {
  return (
    <div className="userInfo">
      <h1>hello {user.email} </h1>
    







      <button
        onClick={() => {
          signOut(auth);
        }}
      >
        Log out
      </button>
    </div>
  )};
}

export default UserInfo;
