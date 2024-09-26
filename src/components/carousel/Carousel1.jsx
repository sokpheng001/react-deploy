

"use client";

import { Carousel } from "flowbite-react";
export function Carousel1() {
  return (
    <section className="flex justify-end mt-5 mr-10 xl:mb-5 lg:mb-10 md:mb-20 sm:w-full sm:mb-36 ">
      <div className="h-60 w-[80%] sm:h-40 sm:w-full sm:mx-10 md:h-60 lg:w-[70%] 2xl:h-96 xl:w-[77%] ">
        <Carousel leftControl="" rightControl="" className="h-[350px]">
          <img
            className="object-cover w-full h-full" // Ensures the image fills the container
            src="https://dealkh-api.istad.co/images/1bfb5e22-7147-459f-b9c4-65cde07c1fd0.png"
            alt="..."
          />
          <img
            className="object-cover w-full h-full"
            src="https://dealkh-api.istad.co/images/97891d69-e429-4535-a5cf-70ae896aef8e.png"
            alt="..."
          />
          <img
            className="object-cover w-full h-full"
            src="https://dealkh-api.istad.co/images/97499f39-509c-4a0a-9516-272ea0479745.png"
            alt="..."
          />
          <img
            className="object-cover w-full h-full"
            src="https://dealkh-api.istad.co/images/e9fb9bdf-4ce1-444a-bfc1-34644ac31769.jpeg"
            alt="..."
          />
          <img
            className="object-cover w-full h-full"
            src="https://dealkh-api.istad.co/images/f1b412d0-b0f4-402b-a040-09fd5a539cf2.jpeg"
            alt="..."
          />
        </Carousel>
      </div>
    </section>
  );
}
