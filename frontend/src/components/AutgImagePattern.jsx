import { useEffect, useState } from "react";

const AuthImagePattern = ({ title, subtitle }) => {
  // const [arr9,setarr9]=useState([...Array[9]].map(()=>{}))
  const [showOdd, setShowOdd] = useState(false);
  function alternate() {
    setShowOdd((prev) => !prev);
  }
  useEffect(() => {
    const timer = setInterval(alternate, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center ">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => {
            return (
              <div
                key={i}
                className={`aspect-square rounded-2xl bg-primary/10 ${
                  !showOdd
                    ? i % 2 !== 0
                      ? "animate-pulse bg-primary/20 transition-colors"
                      : ""
                    : i % 2 === 0
                    ? "animate-none bg-primary/20 transition-colors"
                    : ""
                }`}
              />
            );
          })}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
