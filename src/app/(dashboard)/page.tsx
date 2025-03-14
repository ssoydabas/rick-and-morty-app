"use client";

import { useCharacters } from "@/hooks/queries/useCharacters";
import CharactersTable from "./_components/CharactersTable";
import {
  charactersTableColumns,
  charactersTableFilters,
} from "@/app/(dashboard)/_components/CharactersTable/utils";
import { useQueryState } from "nuqs";

export default function Home() {
  const [page, setPage] = useQueryState("page", {
    defaultValue: "1",
    parse: (value) => value,
  });

  const [status, setStatus] = useQueryState("status", {
    defaultValue: "",
    parse: (value) => value,
  });

  const [gender, setGender] = useQueryState("gender", {
    defaultValue: "",
    parse: (value) => value,
  });

  const { data, isLoading, isError } = useCharacters({
    page: Number(page),
    status,
    gender,
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage.toString());
  };

  const handleFilterChange = (filterType: string, value: string) => {
    if (filterType === "status") setStatus(value);
    else if (filterType === "gender") setGender(value);
    setPage("1");
  };

  if (isLoading)
    return <div className="p-8 text-center">Loading characters...</div>;
  if (isError)
    return <div className="p-8 text-center">Error loading characters</div>;
  return (
    <div className="px-4 py-2">
      <CharactersTable
        columns={charactersTableColumns}
        data={data?.results || []}
        filters={charactersTableFilters}
        pagination={{
          currentPage: Number(page),
          totalPages: data?.info.pages || 1,
          onPageChange: handlePageChange,
        }}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}
