import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/skinPort",
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
    console.error("[SKINPORT_LISTINGS_ERROR]", error);
  }
};
