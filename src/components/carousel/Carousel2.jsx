
"use client";

import { Carousel } from "flowbite-react";

export function Carousel2() {
  return (
    <div className="grid h-56 gap-4 xl:grid-cols-2 sm:h-64 xl:h-80 2xl:h-96 sm:grid-cols-1 md:grid-cols-2">
      <Carousel>
        <img src="https://dealkh-api.istad.co/images/b46b5b13-2122-4b93-9370-913fe415ab34.png" alt="..." />
        <img src="https://dealkh-api.istad.co/images/07b079c2-a61a-42cf-a9fc-7d07a2f8ec99.png" alt="..." />
        <img src="https://dealkh-api.istad.co/images/7b388463-02a7-4b64-8a5f-a713b1d070ac.png" alt="..." />
        <img src="https://img.freepik.com/free-vector/hand-drawn-fast-food-sale-banner_23-2150970567.jpg?t=st=1717934947~exp=1717938547~hmac=58c8ea86733d88849707b728b3db59c8fea2a3eb7f0c83aafb02112d07442ad8&w=1060" alt="..." />
        <img src="https://dealkh-api.istad.co/images/51c9b731-68b9-44c4-9202-7d9d6d69f65d.png" alt="..." />
      </Carousel>
      <Carousel indicators={false}>
        <img src="https://dealkh-api.istad.co/images/2451de25-17b5-4a98-8347-584ebab828eb.png" alt="..." />
        <img src="https://dealkh-api.istad.co/images/ba889e68-0298-4252-a119-548ef59562f5.jpeg" alt="..." />
        <img src="https://romand.us/cdn/shop/files/PC_1.png?v=1719967761&width=1728" alt="..." />
        <img src="https://dealkh-api.istad.co/images/61d9c14d-1a58-47de-a95c-152b5aac81a1.png" alt="..." />
        <img src="https://dealkh-api.istad.co/images/f178431d-7e00-4544-84af-dea315db89f8.jpeg" alt="..." />
      </Carousel>
    </div>
  );
}
