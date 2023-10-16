import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/waxpeer",
});

export const getListings = async (game: string, skinName: string): Promise<unknown> => {
  try {
    const params = {
      game: game,
      skin_name: skinName,
    };

    const response = await api.get("/listings", { params });
    return response.data;
  } catch (error: unknown) {
    console.error("[WAXPEER_LISTINGS_ERROR]", error);
  }
};

export const getBuyOrders = async (game: string, skinName: string): Promise<unknown> => {
  try {
    const params = {
      game: game,
      skin_name: skinName,
    };

    const response = await api.get("/buy_orders", { params });
    return response.data;
  } catch (error: unknown) {
    console.error("[WAXPEER_BUYORDERS_ERROR]", error);
  }
};

export const getPriceHistory = async (
  game: string,
  skinName: string,
  time: string
): Promise<unknown> => {
  try {
    const params = {
      game: game,
      skin_name: skinName,
      time: time,
    };

    const response = await api.get("/price_history", { params });
    return response.data;
  } catch (error: unknown) {
    console.error("[WAXPEER_PRICEHISTORY_ERROR]", error);
  }
};
