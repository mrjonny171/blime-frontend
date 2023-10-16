import { Sidebar } from "@/components/dashboard/side-bar";
import Table from "@/components/dashboard/search/table";
import { getProfileName, getProfilePicture, isAuthenticated } from "@/services/steam/steam";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Inventory from "./Inventory";

const Dashboard = () => {
  const navigate = useNavigate();
  const { component } = useParams();

  const [username, setUsername] = useState("");
  const [iconeUrl, setIconeUrl] = useState("");

  useEffect(() => {
    const checkAuthentication = async () => {
      const auth = await isAuthenticated();

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      if (!auth.data) {
        navigate("/");
      }

      try {
        const username = await getProfileName();
        const icone = await getProfilePicture();

        setUsername(username);
        setIconeUrl(icone);
      } catch (error) {
        console.error("Error getting user profile:", error);
      }
    };
    checkAuthentication();
  }, [navigate]);

  const AnalyticsButtons = [
    {
      name: "Trending",
      img: "../icons/trend.png",
      img_white: "../icons/trend_white.png",
    },
    {
      name: "Search",
      img: "../icons/search.png",
      img_white: "../icons/search_white.png",
    },
    {
      name: "Comparator",
      img: "../icons/compare.png",
      img_white: "../icons/compare_white.png",
    },
  ];

  const ProfileButtons = [
    {
      name: "My Wallet",
      img: "../icons/wallet.png",
      img_white: "../icons/wallet_white.png",
    },
    {
      name: "My Inventory",
      img: "../icons/inventory.png",
      img_white: "../icons/inventory_white.png",
    },
    {
      name: "My Favorites",
      img: "../icons/favorite.png",
      img_white: "../icons/favorite_white.png",
    },
    {
      name: "My Transactions",
      img: "../icons/transaction.png",
      img_white: "../icons/transaction_white.png",
    },
    {
      name: "Investment Tracker",
      img: "../icons/investment.png",
      img_white: "../icons/investment_white.png",
    },
    {
      name: "Referals",
      img: "../icons/refer.png",
      img_white: "../icons/refer_white.png",
    },
  ];

  const TradingButtons = [
    {
      name: "My Bots",
      img: "../icons/robot.png",
      img_white: "../icons/robot_white.png",
    },
    {
      name: "Live Tracking",
      img: "../icons/live.png",
      img_white: "../icons/live_white.png",
    },
  ];

  return (
    <div className="max-w-screen-3xl dark:bg-gray-300 h-full">
      <div className="grid grid-cols-6">
        <Sidebar
          analyticsButtons={AnalyticsButtons}
          profileButtons={ProfileButtons}
          tradingButtons={TradingButtons}
          name={username}
          iconeUrl={iconeUrl}
        />

        {component === "trending" && <Table />}
        {component === "search" && <Table />}
        {component === "comparator" && <Table />}
        {component === "my wallet" && <Table />}
        {component === "my inventory" && <Inventory />}
        {component === "my favorites" && <Table />}
        {component === "investment tracker" && <Table />}
        {component === "referals" && <Table />}
        {component === "my bots" && <Table />}
        {component === "live tracking" && <Table />}
      </div>
    </div>
  );
};

export default Dashboard;
