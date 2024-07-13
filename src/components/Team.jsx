import React from "react";

function Team() {
  return (
    <div className="mt-16 max-w-[1240px] mx-auto px-8">
      <h2 className="text-3xl font-bold mb-4">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full"
            src="https://randomuser.me/api/portraits/men/4.jpg"
            alt="Team Member"
          />
          <p className="mt-2 text-lg font-bold">John Doe</p>
          <p className="text-gray-600">CEO</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full"
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Team Member"
          />
          <p className="mt-2 text-lg font-bold">John Smith</p>
          <p className="text-gray-600">CTO</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full"
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="Team Member"
          />
          <p className="mt-2 text-lg font-bold">Emil Johnson</p>
          <p className="text-gray-600">Lead Developer</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full"
            src="https://randomuser.me/api/portraits/men/2.jpg"
            alt="Team Member"
          />
          <p className="mt-2 text-lg font-bold">Michael Brown</p>
          <p className="text-gray-600">Marketing Manager</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
