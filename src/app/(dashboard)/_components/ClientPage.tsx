"use client";

import { keepPreviousData } from "@tanstack/react-query";
import CharactersTable from "./CharactersTable";
import {
  charactersTableColumns,
  getUrlFilters,
} from "@/app/(dashboard)/_components/CharactersTable/utils";
import { useQueryState } from "nuqs";
import { useCharacters } from "@/hooks/queries";

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

  const { data, isLoading, isError } = useCharacters({
    page: Number(page),
    status: status || "",
    gender: gender || "",
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
