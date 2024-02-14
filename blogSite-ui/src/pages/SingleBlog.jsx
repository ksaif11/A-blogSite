import React from "react";
import { FaClock, FaUser } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import SideBar from "../components/SideBar";

const SingleBlog = () => {
  const data = useLoaderData();
 // const { title, image, author, published_date, reading_time, content } = data[ 12];
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Single BlogPage
        </h1>
      </div>
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
         
          {/* <h2 className="3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">{title}</h2>
          <p className="mb-3 text-gray-600 "><FaUser className="inline-flex items-center mr-2"/>{author} | {published_dat0e}</p>
          <p className="mb-3 text-gray-600 "><FaClock className="inline-flex items-center mr-2"/>{reading_time}</p>
          <p className="text-base text-gray-500 mb-6">{content}</p> */}
          <div className="text-base text-gray-500">
            <p>Lorem ipsumsoluta modi ipsum necessitatibus,
             voluptate inventore dolores voluptatum ut porro doloribus esse deserunt, magni labore?
             Lorem ipselit a amet illum assumenda
              earum voluptate fuga reprehenderit, quisquam eligendi numquam? Aliquam.</p>
              <p>Lorem ipsumsoluta modi ipsum necessitatibus,
             voluptate inventore dolores voluptatum ut porro doloribus esse deserunt, magni labore?
             Lorem ipselit a amet illum assumenda
              earum voluptate fuga reprehenderit, quisquam eligendi numquam? Aliquam.</p>
              <p>Lorem ipsum dolores voluptatum ut porro  soluta modi ipsum necessitatibus,
             voluptate inventore dolores voluptatum ut porro doloribus esse deserunt, magni labore?
             Lorem ipselit a amet illum assumenda
              earum voluptate fuga reprehenderit, quisquam eligendi numquam? Aliquam.</p>
          </div>
        </div>
        <div className="lg:w-1/2">
            <SideBar/>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
