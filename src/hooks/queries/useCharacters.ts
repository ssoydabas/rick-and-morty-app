import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { GetCharactersResponse } from "@/lib/axios/response";

interface UseCharactersParams {
  page?: number;
  status?: string;
  gender?: string;
}

export function useCharacters({
  page = 1,
  status = "",
  gender = "",
}: UseCharactersParams = {}) {
  return useQuery<GetCharactersResponse>({
    queryKey: ["characters", { page, status, gender }],
    queryFn: () => api.getCharacters(page, status, gender),
  });
}
