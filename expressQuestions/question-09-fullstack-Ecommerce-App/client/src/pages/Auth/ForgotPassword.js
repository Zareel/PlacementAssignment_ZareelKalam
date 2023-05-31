import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/fogot-password`,
        {
          email,
          newPassword,
          dateOfBirth,
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
    <Layout title={"forgot password page"}>
      <div className="w-full h-full flex justify-center items-center ">
        <h1 className="text-3xl font-roboto font-semibold py-6">
          Reset Password!
        </h1>
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
              <label className="text-gray-400" htmlFor="date">
                Date of Birth
              </label>
              <br />
              <input
                className="w-[280px] bg-transparent border border-gray-600 rounded-sm py-1 px-2 text-gray-400"
                id="date"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
                placeholder="Date of Birth"
              />
            </div>
            <br />
            <div>
              <input
                className="w-[280px] bg-transparent border border-gray-600 rounded-sm py-1 px-2"
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                placeholder="new password"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="border hover:border-[2px] border-violet-400 hover:bg-transparent hover:text-blue bg-violet-200 py-1 px-6 my-6 font-poppins font-semibold rounded-sm"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ForgotPassword;
