"use client";

import { Carousel } from "flowbite-react";

export function Carousel3() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-[40px] w-full">
      <Carousel>
        <img className="h-[400px] w-[100%] " src="https://dealkh-api.istad.co/images/1bfb5e22-7147-459f-b9c4-65cde07c1fd0.png" alt="..." />
        <img className="h-[400px] w-[100%] " src="https://dealkh-api.istad.co/images/97891d69-e429-4535-a5cf-70ae896aef8e.png" alt="..." />
        <img className="h-[400px] w-[100%] " src="https://dealkh-api.istad.co/images/97499f39-509c-4a0a-9516-272ea0479745.png" alt="..." />
        <img className="h-[400px] w-[100%] " src="https://dealkh-api.istad.co/images/e9fb9bdf-4ce1-444a-bfc1-34644ac31769.jpeg" alt="..." />
        <img className="h-[400px] w-[100%] " src="https://dealkh-api.istad.co/images/f1b412d0-b0f4-402b-a040-09fd5a539cf2.jpeg" alt="..." />
      </Carousel>
    </div>
  );
}
