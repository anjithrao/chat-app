import { Handshake, HeartHandshake, Home, LogOut, MessagesSquare, Settings, Skull, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

const NavBar = () => {
  const { authUser, Logout } = useAuthStore();
  return (
    <>
      <header
        className="fixed bg-base-300/80   border-b border-base-300  w-full top-0 z-40 backdrop-blur-lg "
      >
        <div className="container mx-auto px-4 h-16">
          <div className="flex items-center  justify-between h-full">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items=center gap-2.5 hover:opacity-80 transition-all ">
                <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center  ">
                  <HeartHandshake className="size-5 text-primary" />
                </div>
                <h1 className="text-lg font-bold">MiTram</h1>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link to={"/"}
                className={`btn btn-sm gap-2 transition-colors hover:border-base-content/80`} >
                <Home className="size-4" />
                <span className="hidden sm:inline">Home</span>
              </Link>
              <Link to={"/settings"}
                className={`btn btn-sm gap-2 transition-colors hover:border-base-content/80`} >
                <Settings className="size-4" />
                <span className="hidden sm:inline">Settings</span>
              </Link>
              {authUser && (
                <>
                  <Link to={"/profile"}
                    className={`btn btn-sm gap-2 hover:border-base-content/80`}>
                    <User className="size-5" />
                    <span className="hidden sm:inline">Profile</span>
                  </Link>
                  <button className="flex gap-2 items-center btn hover:border-base-content/80 " onClick={Logout}>
                    <LogOut className="size-5 text-error" />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </>
              )

              }






            </div>
          </div>
        </div>


      </header>
    </>
  );
};

export default NavBar;
