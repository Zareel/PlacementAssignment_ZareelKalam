import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center gap-6 font-roboto text-2xl">
      Redirecting to Login page in {count} sectonds
      <div className="w-16 h-16  border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
    </div>
  );
};

export default Spinner;
