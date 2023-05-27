import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdress] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/signup`,
        {
          name,
          email,
          password,
          phone,
          address,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Signup page">
      <div className="w-full h-full flex justify-center items-center ">
        <h1 className="text-3xl font-roboto font-semibold py-6">Sign Up!</h1>
      </div>
      <section className="w-full flex justify-center ">
        <div className="w-[400px] flex justify-center  pt-10  shadow rounded-md">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="w-[280px] bg-transparent border border-gray-600 rounded-sm py-1 px-2"
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name"
              />
            </div>
            <br />
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
            <br />
            <div>
              <input
                className="w-[280px] bg-transparent border border-gray-600 rounded-sm py-1 px-2"
                id="phone"
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Phone"
              />
            </div>
            <br />
            <div>
              <input
                className="w-[280px] bg-transparent border border-gray-600 rounded-sm py-1 px-2"
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAdress(e.target.value)}
                required
                placeholder="address"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-violet-200 py-1 px-6 my-6 font-poppins font-semibold rounded-sm"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
