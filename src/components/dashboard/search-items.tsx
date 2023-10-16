import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import SearchSkins from "../ui/searchSkins";

const SearchItems = () => {
  return (
    <Tabs
      defaultValue="music"
      className="h-full space-y-6"
    >
      <div className="space-between flex items-center">
        <TabsList>
          <TabsTrigger
            value="all"
            className="relative"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="weapons"
            className="relative"
          >
            Weapons
          </TabsTrigger>
          <TabsTrigger
            value="knives"
            className="relative"
          >
            Knives
          </TabsTrigger>
          <TabsTrigger value="sticker">Stickers</TabsTrigger>
        </TabsList>
        <div className="ml-auto mr-4">
          <Button variant="ghost">Add music</Button>
        </div>
      </div>
      <TabsContent
        value="all"
        className="border-none p-0 outline-none"
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">Skins Search</h2>
            <p className="text-sm text-muted-foreground">Search for your favorite skin</p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <SearchSkins />
        </div>
        <div className="mt-6 space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
          <p className="text-sm text-muted-foreground">Your personal playlists. Updated daily.</p>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4"></div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </TabsContent>
      <TabsContent
        value="podcasts"
        className="h-full flex-col border-none p-0 data-[state=active]:flex"
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">New Episodes</h2>
            <p className="text-sm text-muted-foreground">Your favorite podcasts. Updated daily.</p>
          </div>
        </div>
        <Separator className="my-4" />
      </TabsContent>
    </Tabs>
  );
};

export default SearchItems;
