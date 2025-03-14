import axios from "axios";
import { env } from "@/env";
import { GetCharactersResponse } from "./response";
import { CharacterType } from "@/lib/axios/types";

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
  async getCharacter(id: number) {
    try {
      const response = await axiosClient.get<CharacterType>(`/character/${id}`);
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

export async function getCharacter(id: number): Promise<CharacterType> {
  const response = await api.getCharacter(id);
  return response;
}
