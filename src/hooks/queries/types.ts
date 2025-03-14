import { CharacterType } from "@/lib/axios/types";

export interface QueryConfig {
  enabled?: boolean;
  staleTime?: number;
  cacheTime?: number;
  refetchOnWindowFocus?: boolean;
  refetchOnMount?: boolean;
  refetchOnReconnect?: boolean;
  retry?: boolean | number;
  retryDelay?: number;
}

export interface CharactersQueryParams {
  page?: number;
  status?: string;
  gender?: string;
}

export interface CharacterQueryParams {
  id: number;
}

export interface CharactersData {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: CharacterType[];
}
