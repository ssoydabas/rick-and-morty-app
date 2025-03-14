import axios from "axios";
import { env } from "@/env";
import { GetCharactersResponse } from "./response";

const axiosClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export const api = {
  async getCharacters(page = 1, status = "", gender = "") {
    try {
      const response = await axiosClient.get<GetCharactersResponse>(
        `/character?page=${page}&status=${status}&gender=${gender}`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export async function getCharacters(
  page: number,
  status: string,
  gender: string,
): Promise<GetCharactersResponse> {
  const params = new URLSearchParams();
  if (page) params.set("page", page.toString());
  if (status) params.set("status", status);
  if (gender) params.set("gender", gender);
  const response = await api.getCharacters(page, status, gender);
  return response;
}
