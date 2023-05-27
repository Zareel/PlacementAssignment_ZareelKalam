import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Login page">
      <div className="w-full h-full flex justify-center items-center ">
        <h1 className="text-3xl font-roboto font-semibold py-6">Login!</h1>
      </div>
      <section className="w-full flex justify-center ">
        <div className="w-[400px] flex justify-center  pt-10  shadow rounded-md">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="w-[280px] bg-transparent border border-gray-600 rounded-sm py-1 px-2"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="email"
              />
            </div>
            <br />
            <div>
              <input
                className="w-[280px] bg-transparent border border-gray-600 rounded-sm py-1 px-2"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="password"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-violet-200 py-1 px-6 my-6 font-poppins font-semibold rounded-sm"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
