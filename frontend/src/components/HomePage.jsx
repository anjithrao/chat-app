import React from "react";
import { useAuthStore } from "../../store/useAuthStore";

function HomePage() {
  const { Logout, authUser } = useAuthStore();


  return (
    // <div style={{
    //   backgroundImage: `url(${authUser?.profilePic})`, backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat"
    // }} className="w-full h-screen  ">
    //   <h1>Home Page</h1>
    //   <button className="btn bg-accent/45 text-base-100" onClick={Logout}>hello</button>
    //   <div className="w-50 h-50 mx-auto">

    //   </div>
    // </div>
    <div className="h-screen bg-base-200"></div>

  );
}

export default HomePage;
