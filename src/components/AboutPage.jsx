import React from "react";

const AboutPage = () => {
  return (
    <>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About Us
        </h2>
      </div>
      <div className="flex justify-start">
        <div className="w-1/2 text-xl font-semibold text-left items-center p-5 tracking-widest">
          <h1 className="text-3xl font-semibold mb-3">About Ambula</h1>
          <p>
            Ambula is an App based on UHI(Unified Health Interface) popularly
            known as 'Ayushman Bharat Digital Mission' envisioned by our
            honourable Prime Minister which connects patients live with the
            unified health network across India for all healthcare needs. Ambula
            is committed to bridge all the communication gaps prevalent in
            healthcare delivery and Ambula will impart it's contribution to this
            Noble Vision.
          </p>
          <p>
            We are always available there for you if you find any discomfort of
            health. Your trust empowers us to serve you more.
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-1/2 text-xl font-semibold text-left items-center p-5 tracking-widest">
          <h1 className="text-3xl font-semibold mb-3">Our Team</h1>
          <p>
            The Ambula team is a collaborative and innovative group of
            professionals dedicated to delivering exceptional results. With
            diverse expertise, we prioritize effective communication,
            adaptability, and continuous improvement.
          </p>
          <p>
            Our proactive approach, combined with a strong work ethic, drives
            project success. We embrace creativity and stay updated with
            industry trends, ensuring cutting-edge solutions for our clients.
            Proud of our achievements, we look forward to conquering new
            challenges together.
          </p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="text-left justify-end tracking-wide text-xl p-5 w-1/2 ">
          <p className="text-3xl font-semibold mb-3">
            This Project includes following:
          </p>
          <ul className="w-1/2 text-xl font-semibold text-left items-center tracking-widest list-disc ml-6">
            <li>ToDoList</li>
            <li>Shopping Cart</li>
            <li>Weather Widget</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
