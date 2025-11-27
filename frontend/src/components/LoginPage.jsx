// import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
// import React, { useState } from "react";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import { useAuthStore } from "../../store/useAuthStore";
// import toast from "react-hot-toast";


// function LoginPage() {

//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const { isLogginin, login } = useAuthStore();

//   const validateForm = () => {
//     if (!formData.email.trim() || !formData.password.trim())
//       return toast.error("Fill all details ");

//     if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid Email format");
//     if (formData.password.length < 6) return toast.error("Password must me atleast 6 Characters");

//     return true;
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const success = validateForm();
//     if (success === true) login(formData);
//     // console.log("Login out succesfully")

//   };

//   return (
//     <div>
//       <h1>LoginPage</h1>
//       <div className="min-h-screen flex justify-center items-start ">
//         <div className="relative w-[50%] flex flex-col justify-center items-center p-6 sm:p-12  ">
//           <form onSubmit={handleSubmit} className="space-y-6">


//             {/* Email */}
//             <div className="form-control">
//               <label className="label mb-2">
//                 <span className="label-text font-medium text-base-content">
//                   Email
//                 </span>
//               </label>

//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="size-5 text-base-content/80 z-10" />
//                 </div>
//                 <input
//                   type="text"
//                   className="input input-bordered w-full pl-10"
//                   placeholder="abc@abc.abc"
//                   value={formData.email}
//                   onChange={(e) => {
//                     setFormData({ ...formData, email: e.target.value });
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div className="form-control">
//               <label className="label mb-2">
//                 <span className="label-text font-medium text-base-content">
//                   Password
//                 </span>
//               </label>

//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="size-5 text-base-content/80 z-10" />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className="input input-bordered w-full pl-10"
//                   placeholder="********"
//                   value={formData.password}
//                   onChange={(e) =>
//                     setFormData({ ...formData, password: e.target.value })
//                   }
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="size-5 text-base-content/60" />
//                   ) : (
//                     <Eye className="size-5 text-base-content/60" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Submit */}
//             <button type="submit" className="btn btn-primary w-full" disabled={isLogginin}>
//               {isLogginin ? (
//                 <>
//                   <Loader2 className="size-5 animate-spin" />
//                   Loading..
//                 </>
//               ) : (
//                 "Login"
//               )}
//             </button>
//           </form>
//           <div className="mt-3">
//             if new ,Register :{""}
//             <Link to="/signup" className=" p-1 bg-red-500 text-white rounded " >signin</Link>
//           </div>
//         </div>
//       </div>





//     </div>
//   );
// }

// export default LoginPage;
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Loader2, MessagesSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuthStore } from "../../store/useAuthStore";
import AuthImagePattern from "./AuthImagePattern";

export default function LoginPage() {
  // const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const { isLogginin, login } = useAuthStore();

  const validateForm = () => {
    if (!formData.email.trim() || !formData.password.trim())
      return toast.error("Fill all details");

    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid Email format");

    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();

    if (success === true) {

      login(formData);
    }
  };

  return (
    // <div>


    //   <div className="min-h-screen flex items-start pt-10">
    //     {/* LEFT SIDE FORM WRAPPER */}
    //     <div className="ml-20 w-full max-w-md p-6 sm:p-12 bg-white/20 rounded-2xl ">
    //       <h1 className="text-xl font-semibold pl-29">LoginPage</h1>
    //       <form onSubmit={handleSubmit} className="space-y-6 py-12  ">

    //         {/* Email */}
    //         <div className="form-control">
    //           <label className="label mb-2">
    //             <span className="label-text font-medium text-base-content">
    //               Email
    //             </span>
    //           </label>

    //           <div className="relative">
    //             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    //               <Mail className="size-5 text-base-content/80 z-10" />
    //             </div>

    //             <input
    //               type="text"
    //               className="input input-bordered w-full pl-10"
    //               placeholder="abc@abc.abc"
    //               value={formData.email}
    //               onChange={(e) =>
    //                 setFormData({ ...formData, email: e.target.value })
    //               }
    //             />
    //           </div>
    //         </div>

    //         {/* Password */}
    //         <div className="form-control">
    //           <label className="label mb-2">
    //             <span className="label-text font-medium text-base-content">
    //               Password
    //             </span>
    //           </label>

    //           <div className="relative">
    //             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    //               <Lock className="size-5 text-base-content/80 z-10" />
    //             </div>

    //             <input
    //               type={showPassword ? "text" : "password"}
    //               className="input input-bordered w-full pl-10"
    //               placeholder="********"
    //               value={formData.password}
    //               onChange={(e) =>
    //                 setFormData({ ...formData, password: e.target.value })
    //               }
    //             />

    //             <button
    //               type="button"
    //               className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"
    //               onClick={() => setShowPassword(!showPassword)}
    //             >
    //               {showPassword ? (
    //                 <EyeOff className="size-5 text-base-content/60" />
    //               ) : (
    //                 <Eye className="size-5 text-base-content/60" />
    //               )}
    //             </button>
    //           </div>
    //         </div>

    //         {/* Submit */}
    //         <button
    //           type="submit"
    //           className="btn btn-primary w-full"
    //           disabled={isLogginin}
    //         >
    //           {isLogginin ? (
    //             <>
    //               <Loader2 className="size-5 animate-spin" />
    //               Loading..
    //             </>
    //           ) : (
    //             "Login"
    //           )}
    //         </button>
    //       </form>

    //       {/* Register Link */}
    //       <div className="mt-3">
    //         if new, Register:
    //         <Link
    //           to="/signup"
    //           className="p-1 bg-red-500 text-white rounded ml-2"
    //         >
    //           signin
    //         </Link>
    //       </div>

    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen grid lg:grid-cols-2">

      <div className="relative w-full flex flex-col justify-center items-center p-6 sm:p-12  ">
        <div
          className="absolute z-0 inset-0 bg-[url('/nakama.png')]  blur-[2px]
          bg-cover bg-left"
        />
        {/* Blurred Background Card */}
        <div className="relative w-full  max-w-md p-10 rounded-box overflow-hidden border border-white/20">
          {/* Background (blurred) */}
          <div
            className="absolute inset-0 
                  z-5 bg-gray-500/90 blur-[2.5px] opacity-100"
          />
          {/* Foreground Content */}
          <div className="relative z-10 space-y-8">

            {/* Logo */}
            <div className="text-center mb-8">
              <div className="flex flex-col items-center gap-2 group bg-gray-200/20 hover:bg-yellow-600/20 p-2 rounded-2xl text-blue-950 ">
                <div className="size-12 rounded-xl bg-green-200/30 flex justify-center items-center group-hover:bg-primary/20 transition-colors">
                  <MessagesSquare className="size-6 text-green-300" />
                </div>
                <h1 className="text-2xl font-bold mt-2">Login </h1>
                <p className="font-bold">Sign in into your existing account</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Email */}
              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text font-medium text-base-content">
                    Email
                  </span>
                </label>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="size-5 text-base-content/80 z-10" />
                  </div>
                  <input
                    type="text"
                    className="input input-bordered w-full pl-10"
                    placeholder="abc@abc.abc"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                    }}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text font-medium text-base-content">
                    Password
                  </span>
                </label>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="size-5 text-base-content/80 z-10" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full pl-10"
                    placeholder="********"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="size-5 text-base-content/60" />
                    ) : (
                      <Eye className="size-5 text-base-content/60" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="btn btn-primary w-full" disabled={isLogginin}>
                {isLogginin ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    Loading..
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="text-center">
              <div className="text-base-content/60" />
              Doesn't have an account?{" "}
              <Link to="/signup" className="link link-white bg-primary p-1 no-underline rounded ">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  );
}
