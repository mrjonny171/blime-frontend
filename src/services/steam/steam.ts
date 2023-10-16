import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getProfileName = async (): Promise<string> => {
  try {
    const response = await api.get("steam/displayName", {
      withCredentials: true,
    });

    const username = response.data;

    return username;
  } catch (error: unknown) {
    console.error("[STEAM_USERNAME_ERROR]", error);
    return "";
  }
};

export const getInventory = async (steamID: unknown): Promise<any> => {
  try {
    const response: AxiosResponse = await api.get(`steam/inventory/${steamID.firstID}${steamID.secondID}`, {
      withCredentials: true,
    });
    // console.log(response)

    // Check if the response status is OK (status code 200)
    if (response.status === 200) {
      const inventory = response.data;
      return inventory;
    } else {
      console.error("[STEAM_USERNAME_ERROR] Invalid HTTP response:", response.status);
      return {}; // Return an empty object as a fallback
    }
  } catch (error: unknown) {
    console.error("[STEAM_USERNAME_ERROR]", error);
    return {}; // Return an empty object as a fallback
  }
};


export const getProfilePicture = async (): Promise<string> => {
  try {
    const response = await api.get("steam/picture", {
      withCredentials: true,
    });

    const picture = response.data;

    return picture;
  } catch (error: unknown) {
    console.error("[STEAM_PICTURE_ERROR]", error);
    return "";
  }
};

export const getSteamID = async (): Promise<string> => {
  try {
    const response = await api.get("steam/id", {
      withCredentials: true,
    });

    const steamId = response.data;
    console.log(response)

    return steamId;
  } catch (error: unknown) {
    console.error("[STEAM_ID_ERROR]", error);
    return "";
  }
};

export const isAuthenticated = async (): Promise<unknown> => {
  try {
    const response = await api.get("steam/alive", {
      withCredentials: true,
    });

    return response;
  } catch (error: unknown) {
    console.error("[STEAM_LOGOUT_ERROR]", error);
    return false;
  }
};

export const logout = async (): Promise<unknown> => {
  try {
    const response = await api.get("steam/logout", {
      withCredentials: true,
    });

    return response;
  } catch (error: unknown) {
    console.error("[STEAM_LOGOUT_ERROR]", error);
    return "";
  }
};
