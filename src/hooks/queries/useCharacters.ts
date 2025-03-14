import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getCharacters } from "@/lib/axios";
import { CharactersData, CharactersQueryParams, QueryConfig } from "./types";

export const charactersQueryKey = "characters";

export function useCharacters(
  params: CharactersQueryParams = {},
  config: QueryConfig = {},
) {
  const { page = 1, status = "", gender = "" } = params;

  return useQuery<CharactersData>({
    queryKey: [charactersQueryKey, { page, status, gender }],
    queryFn: () => getCharacters(page, status, gender),
    placeholderData: keepPreviousData,
    ...config,
  });
}
