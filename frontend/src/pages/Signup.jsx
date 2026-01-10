import React, { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessagesSquare,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();
  const validateForm = () => {
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.password.trim())
      return toast.error("Fill all details ");

    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid Email format");
    if (formData.password.length < 6) return toast.error("Password must me atleast 6 Characters");

    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };
  return (

    <div className="min-h-screen grid lg:grid-cols-2">

      <div className="relative w-full flex flex-col justify-center items-center p-6 sm:p-12  ">
        <div
          className="absolute z-0 inset-0 bg-[url('/nakama.png')]  blur-[2px]
          bg-cover bg-left"
        />
        {/* Blurred Background Card */}
        <div className="relative w-full  max-w-md p-10 rounded-box overflow-hidden border border-content/20">
          {/* Background (blurred) */}
          <div
            className="absolute inset-0 
                  z-5 bg-base-100 blur-[2.5px] opacity-100"
          />
          {/* Foreground Content */}
          <div className="relative z-10 space-y-8">

            {/* Logo */}
            <div className="text-center mb-8">
              <div className="flex flex-col items-center gap-2 group hover:bg-yellow-600/20 p-2 rounded-2xl  text-base-content">
                <div className="size-12 rounded-xl  bg-accent/20 flex justify-center items-center group-hover:bg-primary/20 transition-colors">
                  <MessagesSquare className="size-6 text-accent" />
                </div>
                <h1 className="text-2xl font-bold mt-2">Create Account</h1>
                <p className="font-bold">Get started with free Account</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Full Name */}
              <div className="form-control">
                <label className="label mb-2">
                  <span className="label-text font-medium text-base-content">
                    Full Name
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="input w-full pl-10"
                    placeholder="ABC"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="size-5 text-base-content/80 z-10" />
                  </div>
                </div>
              </div>

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
                      <Eye className="size-5 text-base-content/60" />
                    ) : (
                      <EyeOff className="size-5 text-base-content/60" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
                {isSigningUp ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    Loading..
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="text-center">
              <div className="text-primary-content/60" />
              Already have an account ?{" "}
              <Link to="/login" className="link text-primary-content link-white bg-primary p-3 no-underline btn ">
                Login
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

export default Signup;
