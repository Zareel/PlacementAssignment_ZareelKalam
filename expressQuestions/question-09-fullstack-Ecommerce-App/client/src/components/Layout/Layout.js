import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, desription, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={desription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="min-h-[70vh]">{children}</main>
      <Toaster />
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce App - smartBazar shopOnline",
  discription: "MERN Stack Ecommerce Project",
  keywords: "MongoDB, ExpressJS, ReactJS, NodeJS",
  autor: "Zareel Kalam",
};

export default Layout;
