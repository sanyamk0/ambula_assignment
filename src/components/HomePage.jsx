import React from "react";
import sanyam from "../assets/sanyam.png";

const HomePage = () => {
  return (
    <div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          HomePage
        </h2>
      </div>
      <div className="flex flex-col text-center">
        <h1 className="mt-6 text-3xl font-semibold">
          <span className="align-middle">
            Welcome to the Ambula Frontend Internship Assignment
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-12">
        <div className="flex flex-col col-span-2 mt-8 text-xl font-semibold text-left items-center p-20 tracking-widest">
          <p>
            My name is Sanyam Kumar and I am currently a 3rd Year Undergrad
            pursuing Information Technology at Indian Institute Of Information
            Technology, Bhopal.
          </p>
          <p>
            I am eager to apply the knowledge and skills I have gained through
            real world projects.
          </p>
        </div>
        <div className="flex justify-end">
          <img
            src={sanyam}
            alt="sanyam"
            className="flex mt-8 h-80 w-80 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
