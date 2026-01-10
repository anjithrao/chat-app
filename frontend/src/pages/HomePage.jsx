import React from "react";
import { useAuthStore } from "../../store/useAuthStore";
import SideBar from "../components/SideBar";
import ChatContainer from "../components/ChatContainer"
import PlaceHolder from "../components/PlaceHolder"
import { useChatStore } from "../../store/useChatStore";

function HomePage() {
  const { Logout, authUser } = useAuthStore();
  const {selectedUser} =useChatStore();

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
   
    <div className="h-screen  bg-base-200">
      <div className="flex items-center  justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-6rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <SideBar/>
            {selectedUser? <ChatContainer/>:<PlaceHolder/> }
          </div>
        </div>
      </div>
    </div>  
  
  );
}

export default HomePage;
