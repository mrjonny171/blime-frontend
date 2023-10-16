import usePathname from "@/hooks/pathname";
import LogIn from "./log-in";
import MainNav from "./main-nav";
import SignUp from "./sign-up";
import Logo from "../ui/logo";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { ModeToggle } from "../dashboard/mode-toggle";
import { useEffect, useState } from "react";
import { isAuthenticated } from "@/services/steam/steam";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const auth = await isAuthenticated();

      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        setLoggedIn(auth.data);
      } catch (error) {
        console.error("Error getting user profile:", error);
      }
    };
    checkAuthentication();
  });

  const pathname = usePathname();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const routes = [
    {
      href: `/overview`,
      label: "Overview",
      active: pathname === `/overview`,
    },
    {
      href: `/features`,
      label: "Features",
      active: pathname === `/features`,
    },
    {
      href: `/demo`,
      label: "Demo",
      active: pathname === `/demo`,
    },
    {
      href: `/reviews`,
      label: "Reviews",
      active: pathname === `/reviews`,
    },
    {
      href: `/price`,
      label: "Price",
      active: pathname === `/price`,
    },
    {
      href: `/team`,
      label: "Team",
      active: pathname === `/team`,
    },
  ];
  return (
    <div className="bg-white border-gray-200 sticky top-0 dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto h-16 dark:text-gray-200">
        <Logo name="Blime" />
        <MainNav
          routes={routes}
          className="mx-6"
        />
        <div className="flex mr-2 space-x-4">
          {loggedIn ? (
            <Button onClick={() => navigate("/dashboard/trending")}> Dashboard</Button>
          ) : (
            <div className="flex mr-2 space-x-4">
              <LogIn onOpen={() => loginModal.onOpen()} />
              <SignUp onOpen={() => registerModal.onOpen()} />
            </div>
          )}

          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
