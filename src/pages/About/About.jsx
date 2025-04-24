import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";

const About = () => {
  return (
    <div>
      <div>
        {" "}
        <NavigationBar></NavigationBar>{" "}
      </div>
      <div>
        <div className="bg-gray-50 py-12 px-6 lg:px-24 min-h-screen">
          <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
              About Us
            </h1>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              Welcome to{" "}
              <span className="font-semibold text-green-600">Refabry</span>,
              where innovation meets craftsmanship. Our mission is to deliver
              exceptional products with precision, style, and sustainability.
              With a team of experienced professionals and a customer-first
              mindset, we take pride in redefining quality and value.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
              Why Choose Us?
            </h2>

            <table className="min-w-full table-auto border border-gray-200 text-gray-700 text-sm md:text-base">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Feature</th>
                  <th className="px-6 py-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100 transition">
                  <td className="px-6 py-4 font-medium">Experience</td>
                  <td className="px-6 py-4">
                    Over 10 years in manufacturing & innovation
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 transition">
                  <td className="px-6 py-4 font-medium">Product Quality</td>
                  <td className="px-6 py-4">
                    Premium materials with rigorous quality control
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 transition">
                  <td className="px-6 py-4 font-medium">Customization</td>
                  <td className="px-6 py-4">
                    Tailored solutions to meet individual needs
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 transition">
                  <td className="px-6 py-4 font-medium">Customer Support</td>
                  <td className="px-6 py-4">
                    24/7 support with real-time order tracking
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 transition">
                  <td className="px-6 py-4 font-medium">Sustainability</td>
                  <td className="px-6 py-4">
                    Eco-friendly practices across all operations
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-10 text-gray-700">
              <p>
                At <span className="text-green-600 font-semibold">Refabry</span>
                , we believe that great products are made with passion,
                integrity, and a relentless pursuit of perfection. Let us be a
                part of your journey to quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
