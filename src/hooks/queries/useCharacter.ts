import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { CharacterQueryParams, QueryConfig } from "./types";
import { CharacterType } from "@/lib/axios/types";

export const characterQueryKey = "character";

export function useCharacter(
  params: CharacterQueryParams,
  config: QueryConfig = {},
) {
  const { id } = params;

  return useQuery<CharacterType>({
    queryKey: [characterQueryKey, id],
    queryFn: async () => {
      const response = await api.getCharacter(id);
      return response;
    },
    enabled: !!id,
    ...config,
  });
}
