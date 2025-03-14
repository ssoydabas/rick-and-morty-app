import { CharacterType } from "@/lib/axios/types";

export type GetCharactersResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: CharacterType[];
};
