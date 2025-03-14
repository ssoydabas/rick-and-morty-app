"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter, usePathname } from "next/navigation";
import CharactersTable from "./CharactersTable";
import {
  charactersTableColumns,
  charactersTableFilters,
} from "@/app/(dashboard)/_components/CharactersTable/utils";
import { useEffect, useState } from "react";
import { GetCharactersResponse } from "@/lib/axios/response";
import { getCharacters } from "@/lib/axios";

interface ClientPageProps {
  initialPage: number;
  initialStatus: string;
  initialGender: string;
}
export default function ClientPage({
  initialPage,
  initialStatus,
  initialGender,
}: ClientPageProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [page, setPage] = useState(initialPage);
  const [status, setStatus] = useState(initialStatus);
  const [gender, setGender] = useState(initialGender);

  const { data, isLoading, isError } = useQuery<GetCharactersResponse>({
    queryKey: ["characters", { page, status, gender }],
    queryFn: () => getCharacters(page, status, gender),
  });

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("page", page.toString());
    if (status) params.set("status", status);
    if (gender) params.set("gender", gender);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [page, status, gender, router, pathname]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    if (filterType === "status") setStatus(value);
    else if (filterType === "gender") setGender(value);
    setPage(1);
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
          currentPage: page,
          totalPages: data?.info.pages || 1,
          onPageChange: handlePageChange,
        }}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}
