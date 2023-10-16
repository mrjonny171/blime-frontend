import { Button } from "../ui/button";
import { ModeToggle } from "@/components/dashboard/mode-toggle";
import { useTheme } from "../ui/theme-provider";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { LuLogOut } from "react-icons/lu";
import { logout } from "@/services/steam/steam";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

interface SideBarButtonProps {
  name: string;
  img: string;
  img_white: string;
}

interface SideBarProps {
  analyticsButtons: SideBarButtonProps[];
  profileButtons: SideBarButtonProps[];
  tradingButtons: SideBarButtonProps[];
  name: string;
  iconeUrl: string;
}

export const Sidebar: React.FC<SideBarProps> = ({
  analyticsButtons,
  profileButtons,
  tradingButtons,
  name,
  iconeUrl,
}) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handLogout = useCallback(async () => {
    const response = await logout();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    if (response.status == 200) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="sticky left-0 top-0 h-screen bg-gray-200 dark:text-gray-200 dark:bg-gray-800 w-64 border-r-2 dark:border-gray-700 overflow-y-auto">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-5 px-4 text-2xl font-semibold tracking-tight">Analytics</h2>
          <div className="space-y-1">
            {analyticsButtons.map((analyticsButton) => (
              <Link to={`/dashboard/${analyticsButton.name.toLowerCase()}`}>
                <Button
                  key={analyticsButton.name}
                  variant="ghost"
                  className="w-full justify-start hover:dark:bg-gray-600"
                >
                  <img
                    src={theme === "light" ? analyticsButton.img : analyticsButton.img_white}
                    width="25px"
                    height="10px"
                    className="mr-6"
                  />
                  {analyticsButton.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-5 px-4 text-2xl font-semibold tracking-tight">Profile</h2>
          <div className="space-y-1">
            {profileButtons.map((profileButton) => (
              <Link to={`/dashboard/${profileButton.name.toLowerCase()}`}>
                <Button
                  key={profileButton.name}
                  variant="ghost"
                  className="w-full justify-start hover:dark:bg-gray-600"
                >
                  <img
                    src={theme === "light" ? profileButton.img : profileButton.img_white}
                    width="25px"
                    height="10px"
                    className="mr-6"
                  />
                  {profileButton.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-5 px-4 text-2xl font-semibold tracking-tight">Trading</h2>
          <div className="space-y-1">
            {tradingButtons.map((tradingButton) => (
              <Link to={`/dashboard/${tradingButton.name.toLowerCase()}`}>
                <Button
                  key={tradingButton.name}
                  variant="ghost"
                  className="w-full justify-start hover:dark:bg-gray-600"
                >
                  <img
                    src={theme === "light" ? tradingButton.img : tradingButton.img_white}
                    width="25px"
                    height="10px"
                    className="mr-6 fill-gray-200"
                  />
                  {tradingButton.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-4 border-t border-black dark:border-gray-200" />
      <div className="mt-5 px-6 flex items-center justify-between">
        <Avatar className="h-9 w-9">
          <AvatarImage
            src={iconeUrl}
            alt="Profile icon"
          />
          <AvatarFallback>Steam Picture</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{name}</p>
        </div>
        <div className="flex items-center space-x-2 py-4">
          <Button
            variant="destructive"
            size="icon"
            className="border bg-gray-800 dark:bg-gray-600 border-gray-300 dark:border-gray-200 dark:hover:bg-red-600"
            onClick={handLogout}
          >
            <LuLogOut />
          </Button>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};
