import { useQuery } from "@tanstack/react-query";
import { CharacterType } from "@/lib/axios/types";
import axios from "axios";
import { env } from "@/env";

export function useCharacterDetails(characterId: number) {
  return useQuery<CharacterType>({
    queryKey: ["character", characterId],
    queryFn: async () => {
      const response = await axios.get<CharacterType>(
        `${env.NEXT_PUBLIC_API_URL}/character/${characterId}`,
      );
      return response.data;
    },
    enabled: !!characterId,
  });
}
