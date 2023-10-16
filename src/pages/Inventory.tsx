import Item from "@/components/dashboard/item";
import { Input } from "@/components/ui/input";
import { getInventory, getSteamID } from "@/services/steam/steam";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";

// Define the type for your inventory items
type InventoryItem = {
  id: number;
  count: number;
  assetid: number;
  classid: number;
  instanceid: number;
  markethashname: string;
  marketname: string;
  hashid: string;
  nameid: string;
  color: string;
  bordercolor: string;
  type: string;
  rarity: string;
  quality: string;
  collectionname: string;
  marketable: boolean;
  tradable: boolean;
  price: number;
  pricelatest: number;
  pricemedian: number;
  pricesafe: number;
  priceavg: number;
  pricemin: number;
  pricemax: number;
  pricesafe7d: number;
  pricesafe24h: number;
  pricesafe30d: number;
  pricesafe90d: number;
  buyorderprice: number;
  sellorderprice: number;
  buyorderquantity: number;
  sellorderquantity: number;
  sold7d: number;
  sold24h: number;
  sold30d: number;
  sold90d: number;
  slug: string;
  itemImages: string[];
  wear: number;
  insertid: string;
  tag: string;
  steamprice: number;
  createdat: string;
  deletedat: string | null;
  unstable: boolean;
  unstablereason: string | null;
  stattrack: boolean;
  dailysoldvolume: number;
  firstseentime: string;
  iscase: boolean;
  iskey: boolean;
  isgraffiti: boolean;
  issticker: boolean;
  itemgroup: string;
  isstar: boolean;
  actions: string[];
  marketactions: string[];
  descriptions: string[];
  markettradablerestriction: string | null;
  tags: string[];
  inspectlink: string;
  inspectlinkparsed: string;
  updatedat: string;
};

const Inventory = () => {
  // Initialize the state with an empty array of InventoryItem
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await getSteamID();
        // console.log(res)
        const response = await getInventory(res);
        setInventory(response);
      } catch (error) {
        console.error("Error getting user inventory:", error);
      }
    };
    // Call the fetchInventory function to load inventory data
    fetchInventory();
  }, []);


  const priceAscending = () => {
    setInventory([...inventory].sort((a, b) => a.priceavg - b.priceavg));
  }
  const priceDescending = () => {
    setInventory([...inventory].sort((a, b) => b.priceavg - a.priceavg));
  }

  const nameAscending = () => {
    setInventory([...inventory].sort((a, b) => a.markethashname > b.markethashname ? 1 : -1));
  }
  const nameDescending = () => {
    setInventory([...inventory].sort((a, b) => a.markethashname < b.markethashname ? 1 : -1));
  }

  const totalPrice = inventory
    .map((item) => item.priceavg)
    .reduce((prev, curr) => prev + curr, 0)
    .toFixed(2);

  return (

    <div className="col-span-5">
      <div className="grid grid-cols-2 gap-4 px-10 py-4">
        <Input
          placeholder="Search"
          className="dark:bg-gray-800 dark:text-white"
        />
        <div className="grid grid-cols-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="ml-auto hidden h-10 w-full lg:flex dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                <MixerHorizontalIcon className="mr-2 h-4 w-4" />
                View
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[150px] dark:bg-gray-900"
            >
              <DropdownMenuItem className="DropdownMenuItem">
                <button onClick={priceAscending}>Price Ascending</button>
              </DropdownMenuItem>
              <DropdownMenuItem className="DropdownMenuItem">
              <button onClick={priceDescending}>Price Descending</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <h1 className="col-end-5 font-sans font-bold tracking-wide flex h-10 justify-center items-center rounded-md shadow bg-gray-700 text-white">{totalPrice}$</h1>
        </div>


      </div>
      <div className="grid grid-cols-4 gap-4 px-10 py-4">
        {inventory.map((item, index) => (
          <div key={index} className="col-span-1">
            {item.steamprice}
            <Item image={item.itemImages[0]} skin={item.markethashname} price={item.priceavg} float={1} />
            {/* Render other properties as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;