import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="dark:bg-[#000300] bg-white dark:text-white pt-[8rem] px-8 w-full">
      <div className="w-full py-[3rem] px-8 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 dark:border-black">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Single}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              dedicated User
            </h2>
            <p className="text-center text-4xl font-bold">$149</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 10 GB</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Start Trial
            </button>
          </div>
          <div className="w-full shadow-xl bg-gray-100 dark:bg-gray-700 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
              src={Double}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Shared User</h2>
            <p className="text-center text-4xl font-bold">$49</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">100 GB Storage</p>
              <p className="py-2 border-b mx-8">2 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            </div>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Start Trial
            </button>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Triple}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Cloud User</h2>
            <p className="text-center text-4xl font-bold">$119</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">Multiple Granted Users</p>
              <p className="py-2 border-b mx-8">Send up to 5 GB</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
