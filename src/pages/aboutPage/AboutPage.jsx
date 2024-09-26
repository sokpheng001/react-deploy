import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';

export function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main className="container py-8 mx-auto dark:text-white" >
        {/* <h1 className="mb-4 text-4xl font-bold text-center">
          About Tech-Deals Electronics Shop
        </h1>  */}
        {/* <!-- section 1 --> */}
        <section className="flex p-5 mb-12 w-[80%] m-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:w-1/2 " data-aos="fade-right">
              <h2 className="mb-4 text-5xl font-bold text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text font-[Poppins]">
                TechDeals
              </h2>
              <p className="mb-4 text-lg">
                Welcome to TechDeals. We are passionate about technology and
                dedicated to bringing you the latest and greatest in electronic
                devices, from sleek smartphones and innovative gadgets to high-
                performance computers and home entertainment systems.
              </p>
              <Link to="/">
              <button className="text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">
                Shop Now
              </button>
              </Link>
            </div>
            <div className="p-4 mt-8 md:w-1/2" data-aos="fade-up">
              <img
                alt="Illustration of a person shopping online with a 50% off discount on electronics"
                className="w-full mx-auto "
                src="./src/assets/OnlineShop.gif"
                width="600"
              />
            </div>
          </div>
        </section>

        {/* <!-- end section1 -->

   <!-- section 2 --> */}
        <section className="mb-12 xl:w-[80%] m-auto">
          <div className="flex flex-col items-center justify-center gap-20 md:flex-row">
            <div className="p-4 md:w-1/2" >
              <img
                alt="Illustration of people working in a Tech company"
                className="mx-auto"
                height="400"
                src="./src/assets/OurHistory.gif"
                width="600"
              />
            </div>
            <div className="mx-10 md:w-1/2" data-aos="fade-up">
              <h2 className="mb-4 text-4xl font-bold">
                Our{" "}
                <span className="text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text">
                  history
                </span>
              </h2>
              <p>
                TechTrends Electronics has created in 2024. Our journey began
                with a simple mission: to deliver high-quality, reliable
                technology solutions to individuals and businesses across the
                country for customer.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 xl:w-[80%] m-auto">
          <div className="flex flex-col items-center justify-center gap-20 m-auto md:flex-row sm:mx-10">
            <div className="md:w-1/2 xl:w-[80%] m-auto mx-10" data-aos="fade-up">
              <h2 className="mb-4 text-4xl font-bold " >
                Our{" "}
                <span className="text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text">
                  Mission
                </span>
              </h2>
              <p>
                We enable business transformation and enrichment of lives by
                delivering sustainable world className technology products,
                solutions and services in our chosen markets thereby creating
                superior shareholder.
              </p>
            </div>
            <div className="p-4 md:w-1/2">
              <img
                alt="Illustration of a person using a computer with a big sale sign"
                className="mx-auto"
                height="400"
                src="./src/assets/Online Groceries.gif"
                width="600"
              />
            </div>
          </div>
        </section>
        {/* <!-- end section 3 -->

   <!-- section 4 --> */}
        <section className="mb-12 xl:w-[80%] m-auto">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="p-4 md:w-1/2">
              <img
                alt="Illustration of people brainstorming and working together"
                className="mx-auto"
                height="400"
                src="./src/assets/vision.gif"
                width="600"
              />
            </div>
            <div className="p-4 mx-10 md:w-1/2" data-aos="fade-up">
              <h2 className="mb-4 text-4xl font-bold">Our <span className="text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text">Vision</span> </h2>
              <p>
                Empower customer with latest technology that enhance
                productivity, creativity and overall quality of new technology.
                Our goal is to be the leading provider of high-quality computer
                hardware, software, and IT services in Cambodia.
              </p>
            </div>
          </div>
        </section>
        {/* <!-- end section 4 -->

   <!-- section 5 --> */}
        <section className="p-5 mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Our <span className="text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text">Mentors</span> 
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-1/2 p-4 md:w-1/4">
              <img
                alt="Mentor 1"
                className="mx-auto mb-2 rounded-full"
                height="150"
                src="./src/assets/mentor_chhaya.png"
                width="150"
              />
              <p>Chan Chhaya</p>
              <p className="text-gray-600">TechDeals Mentor</p>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <img
                alt="Mentor 2"
                className="mx-auto mb-2 rounded-full object-fit"
                height="150"
                src="./src/assets/mentor_sokpeng.jpg"
                width="150"
              />
              <p>Kim Chansokpheng</p>
              <p className="text-gray-600">TechDeals Mentor</p>
            </div>
          </div>
        </section>
        {/* <!-- end section 5 -->

   <!-- section 6 --> */}
        <section className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Our <span className="text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text">Team Members</span></h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-1/2 p-4 md:w-1/4">
              <img
                alt="Team Member 1"
                className="mx-auto mb-2 rounded-full"
                height="150"
                src="./src/assets/pengseang2.png"
                width="150"
              />
              <p>Sim Pengseang</p>
              <p className="text-gray-600">Group Leader</p>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <img
                alt="Team Member 2"
                className="object-cover mx-auto mb-2 rounded-full"
                height="150"
                src="./src/assets/narak.png"
                width="150"
              />
              <p>Leng Narak</p>
              <p className="text-gray-600">Team Member</p>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <img
                alt="Team Member 3"
                className="mx-auto mb-2 rounded-full"
                height="150"
                src="./src/assets/sokheng.png"
                width="150"
              />
              <p>Ean Sokheng</p>
              <p className="text-gray-600">Team Member</p>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <img
                alt="Team Member 4"
                className="mx-auto mb-2 rounded-full"
                height="150"
                src="./src/assets/vuthy.png"
                width="150"
              />
              <p>Tourn Vuthy</p>
              <p className="text-gray-600">Team Member</p>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <img
                alt="Team Member 5"
                className="mx-auto mb-2 rounded-full"
                height="150"
                src="./src/assets/narin.png"
                width="150"
              />
              <p>Sri Narin</p>
              <p className="text-gray-600">Team Member</p>
            </div>
            <div className="w-1/2 p-4 md:w-1/4">
              <img
                alt="Team Member 6"
                className="mx-auto mb-2 rounded-full"
                height="150"
                src="./src/assets/rida.png"
                width="150"
              />
              <p>Gony Rida</p>
              <p className="text-gray-600">Team Member</p>
            </div>
            <div className="w-1/2 p-4 md:w-1/4 ">
              <img
                alt="Team Member 7"
                className="mx-auto mb-2 rounded-full"
                height="150"
                width="150"
                src="./src/assets/leaphea.png"
              />
              <p>Lim Ansoleaphea</p>
              <p className="text-gray-600">Team Member</p>
            </div>
          </div>
        </section>
        <section className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Our <span className="text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:bg-gradient-to-bl bg-clip-text">Office</span></h2>
          <p>#562B, St 562, Boeung Kok , Toul Kork, Phnom Penh</p>
          <div>
            <div className="mt-4 ">
              {/* <img
                alt="Map showing the location of the office"
                className=""
                src="./src/assets/map.png"
                width="800"
              /> */
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57329609.100925624!2d11.941946131126743!3d28.715910289497554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1skm!2skh!4v1726971442443!5m2!1skm!2skh"
                width="800"
                height="500"
                className="w-full mx-auto"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              }
              
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
