import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/buff163",
});

export const getListings = async (game: string, skinId: string): Promise<unknown> => {
  try {
    const params = {
      game: game,
      skinId: skinId,
    };

    const response = await api.get("/listings", { params });
    return response.data;
  } catch (error: unknown) {
    console.error("[BUFF163_LISTINGS_ERROR]", error);
  }
};

export const getBuyOrders = async (game: string, skinId: string): Promise<unknown> => {
  try {
    const params = {
      game: game,
      skinId: skinId,
    };

    const response = await api.get("/buy_orders", { params });
    return response.data;
  } catch (error: unknown) {
    console.error("[BUFF163_BUYORDERS_ERROR]", error);
  }
};

export const getRecentSales = async (game: string, skinId: string): Promise<unknown> => {
  try {
    const params = {
      game: game,
      skinId: skinId,
    };

    const response = await api.get("/recent_sales", { params });
    return response.data;
  } catch (error: unknown) {
    console.error("[BUFF163_RECENTSALES_ERROR]", error);
  }
};

export const getPriceHistory = async (
  game: string,
  skinId: string,
  days: string,
  currency: string
): Promise<unknown> => {
  try {
    const params = {
      game: game,
      skinId: skinId,
      days: days,
      currency: currency,
    };

    const response = await api.get("/price_history", { params });
    return response.data;
  } catch (error: unknown) {
    console.error("[BUFF163_PRICEHISTORY_ERROR]", error);
  }
};
