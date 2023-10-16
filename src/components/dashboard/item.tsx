import { Sticker } from "lucide-react";
import React, { useEffect } from "react";

interface itemProps {
  image: string;
  skin: string;
  price: number;
  float: number;
}

const Item: React.FC<itemProps> = ({ image, skin, price, float }) => {
  // const srcAttributes = stickers.match(/src="([^"]+)"/g);
  // const links = srcAttributes?.map((srcAttribute) => srcAttribute.match(/src="([^"]+)"/)?.[1] ?? "") ?? [];

  // const caretPos = Math.round(97.5 * float) + "%";
  return (
    <div className="relative mx-auto w-full">
      <a
        href="#"
        className="relative inline-block duration-300 ease-in-out transition-transform transform w-full"
      >
        <div className="shadow p-4 rounded-lg bg-gray-800">
          <div className="flex justify-center relative rounded-lg overflow-hidden h-[10rem]">
            <div className="transition-transform duration-500 transform w-full">
              <div className="absolute inset-0 bg-gray-800">
                <figure className="relative mx-auto aspect-[4/3] w-10/12 ">
                  <img alt="AWP | Medusa (Field-Tested)" loading="lazy" decoding="async" data-nimg="fill" src={image} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                </figure>
              </div>
            </div>

            {/* <div className="absolute flex justify-center right-0 mb-3">
              <div className="transform scale-[0.15] translate-x-[7rem] -translate-y-[26rem] overflow-hidden">
                {/* {links.map((item, index) => (
                  <img
                  src={item}
                  alt=""
                />
                  ))}
                {stickers} 
                <img
                  src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRcWEDRSfCshZ-CBBJ4LBVosLWsJzhs0uHPdHMVuIS3x4bTx_GtYu-GzmgIsJZziLDHrNnx3gfjrUpuYWumJoWQdwE3fxiOreF1Ikhw/260fx260f"
                  alt=""
                />
                <img
                  src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRcWEDRSfCshZ-CBBJ4LBVosLWsJzhs0uHPdHMVuIS3x4bTx_GtYu-GzmgIsJZziLDHrNnx3gfjrUpuYWumJoWQdwE3fxiOreF1Ikhw/260fx260f"
                  alt=""
                />
                <img
                  src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRcWEDRSfCshZ-CBBJ4LBVosLWsJzhs0uHPdHMVuIS3x4bTx_GtYu-GzmgIsJZziLDHrNnx3gfjrUpuYWumJoWQdwE3fxiOreF1Ikhw/260fx260f"
                  alt=""
                />
                <img
                  src="https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRcWEDRSfCshZ-CBBJ4LBVosLWsJzhs0uHPdHMVuIS3x4bTx_GtYu-GzmgIsJZziLDHrNnx3gfjrUpuYWumJoWQdwE3fxiOreF1Ikhw/260fx260f"
                  alt=""
                />
              </div>
            </div>*/}
          </div> 

          <div className="mt-4">
            <h2
              className="font-medium text-base md:text-lg text-white line-clamp-1"
              title={skin}
            >
              {skin}
            </h2>
          </div>
          <div className="flex justify-center">
            <p className="text-white inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
              <span className="text-lg">${price}</span>
            </p>
          </div>
        </div > 
      </a >
    </div >
  );
};

export default Item;
