import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

const Homepage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title="Homepage - smartBazar">
      <h1>homepage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default Homepage;
