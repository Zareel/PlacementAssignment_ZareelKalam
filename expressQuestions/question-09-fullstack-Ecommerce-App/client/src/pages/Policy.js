import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title="Privacy policy - smartBazar">
      <div className="max-w-6xl mx-auto py-6">
        <div className="w-full flex flex-col lgl:flex-row justify-between items-center lgl:gap-10">
          <div className="w-[80%] mdl:w-[50%] h-[65vh] flex justify-center items-center ">
            <img
              className="rounded-md"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="img"
            />
          </div>
          <div className="w-[80%] mdl:w-[50%] flex flex-col justify-center items-center gap-2">
            <h1 className="text-5xl font-roboto text-blue pb-2">
              Privcy Policy
            </h1>
            <p className="text-center text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              error maxime molestias quo? Id accusamus sed molestias officiis
              qui debitis impedit, ipsa illo quod cum eum incidunt odit
              blanditiis pariatur minus nulla consequuntur aliquam neque!
              Molestiae minima deleniti corporis natus dolor enim nulla, unde
              veritatis eveniet vero perferendis eaque earum adipisci pariatur
              dolore quos labore ipsam harum quibusdam. Rerum voluptatibus
              corrupti perspiciatis cupiditate ex a sed praesentium quam, natus,
              rem magni dolorem molestias commodi saepe quas debitis? Laudantium
              molestias incidunt cupiditate harum, quaerat tempora pariatur
              eveniet laborum unde nisi corrupti similique, maxime id possimus
              eaque repellendus. Iste odio est sunt!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
