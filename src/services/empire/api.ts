import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/empire",
});

export const getListings = async (): Promise<unknown> => {
  try {
    const params = {
      game: "game",
      skinId: "skinId",
    };

    const response = await api.get("/listings", { params });
    return response.data;
  } catch (error: unknown) {
    console.error("[EMPIRE_LISTINGS_ERROR]", error);
  }
};
