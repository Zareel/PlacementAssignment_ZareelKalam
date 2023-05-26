import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-6">
        <div className="w-full flex flex-col lgl:flex-row justify-between items-center lgl:gap-10">
          <div className="w-[80%] mdl:w-[50%] h-[65vh] flex justify-center items-center ">
            <img
              className="w-full mx-auto rounded-md"
              src="https://images.unsplash.com/photo-1584592487914-a29c64f25887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="w-[80%] mdl:w-[50%] flex flex-col justify-center items-center gap-2">
            <h1 className="text-5xl font-roboto text-gray-900 pb-2">
              About Us
            </h1>
            <p className="text-center">
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

export default About;
