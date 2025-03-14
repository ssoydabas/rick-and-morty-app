"use client";

import { useQuery } from "@tanstack/react-query";
import CharactersTable from "./CharactersTable";
import {
  charactersTableColumns,
  getUrlFilters,
} from "@/app/(dashboard)/_components/CharactersTable/utils";
import { GetCharactersResponse } from "@/lib/axios/response";
import { getCharacters } from "@/lib/axios";
import { useQueryState } from "nuqs";

interface ClientPageProps {
  initialPage: string;
  initialStatus: string;
  initialGender: string;
}

export default function ClientPage({
  initialPage,
  initialStatus,
  initialGender,
}: ClientPageProps) {
  const [page, setPage] = useQueryState("page", {
    defaultValue: initialPage,
  });
  const [status, setStatus] = useQueryState("status", {
    defaultValue: initialStatus,
  });
  const [gender, setGender] = useQueryState("gender", {
    defaultValue: initialGender,
  });

  const { data, isLoading, isError } = useQuery<GetCharactersResponse>({
    queryKey: ["characters", { page, status, gender }],
    queryFn: () => getCharacters(Number(page), status ?? "", gender ?? ""),
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage.toString());
  };

  const handleFilterChange = (filterType: string, value: string) => {
    if (filterType === "status") setStatus(value);
    else if (filterType === "gender") setGender(value);
    setPage("1");
  };

  const urlFilters = getUrlFilters(status, gender, handleFilterChange);

  if (isLoading)
    return <div className="p-8 text-center">Loading characters...</div>;
  if (isError)
    return <div className="p-8 text-center">Error loading characters</div>;
  return (
    <div className="px-4 py-2">
      <CharactersTable
        columns={charactersTableColumns}
        data={data?.results || []}
        filters={urlFilters}
        pagination={{
          currentPage: Number(page) ?? 1,
          totalPages: data?.info.pages || 1,
          onPageChange: handlePageChange,
        }}
      />
    </div>
  );
}
