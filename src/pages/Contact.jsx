import React from "react";
import { IoMailOpen, IoMap, IoPhonePortrait } from "react-icons/io5";

function Newsletter() {
  return (
    <div className="w-full py-16 px-8 bg-white dark:bg-[#000300] dark:text-white pt-[12rem] h-[100%]">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 px-8">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Sign up to our newsletter and stay up to date.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-between mt-4 py-2">
            <input
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black dark:bg-gray-700 dark:text-white">
              Notify Me
            </button>
          </form>
        </div>
        <div className="lg:col-span-1 my-4 flex flex-col justify-center items-start pl-16">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <ul className="text-gray-700 dark:text-gray-300">
            <li className="flex items-center py-1">
              <IoMap />

              <span className="px-2"> 123 Main Street , NY, USA</span>
            </li>
            <li className="flex items-center py-1">
              <IoPhonePortrait />

              <span className="px-2"> +1 (123) 456-7890</span>
            </li>
            <li className="flex items-center py-1">
              <IoMailOpen />
              <span className="px-2">info@ocloud.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
