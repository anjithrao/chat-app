import React from "react";
import { useAuthStore } from "../../store/useAuthStore";

function HomePage() {
  const { Logout, authUser
  } = useAuthStore();


  return (
    <div className={`bg - [url(${authUser?.profilePic})]`}>
      <h1>Home Page</h1>
      <button className="btn bg-green-300 text-black" onClick={Logout}>hello</button>
      <div className="w-50 h-50 mx-auto">
        <img src={authUser?.profilePic || "/nakama.png"} alt="" />
      </div>
    </div>
  );
}

export default HomePage;
