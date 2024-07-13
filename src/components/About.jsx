import React from "react";
import Laptop from "../assets/laptop.jpg";
import { Link, Outlet } from "react-router-dom";

function Analytics() {
  return (
    <div className="dark:bg-[#000300] bg-white dark:text-white px-8 py-[6rem] w-full ">
      <div className="w-full py-8 px-8  ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img
            className="w-full md:w-[500px] mx-auto my-4 rounded-lg shadow-xl"
            src={Laptop}
            alt="Laptop"
          />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">OUR STORY</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
              Empowering the Cloud Community
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {/* Ensure the path matches your nested route */}
            <Link to="/about/team">
              <button className="bg-[#00df9a] text-black dark:text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                Meet our team
              </button>
            </Link>
          </div>
        </div>

        {/* Team Members Section */}
        <Outlet />
      </div>
    </div>
  );
}

export default Analytics;
