import { type ReactNode } from "react";
import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTableViewOptions } from "./ViewOptions";
import { FacetedFilter } from "./FacetedFilter";
import { DataTableFiltering } from "@/app/(dashboard)/_components/CharactersTable/types";

interface ToolbarProps<TData> {
  table: Table<TData>;
  filters?: DataTableFiltering[];
  createButton?: ReactNode;
}

export function Toolbar<TData>({
  table,
  filters,
  createButton,
}: ToolbarProps<TData>) {
  const hasActiveFilters = filters?.some((filter) => filter.value !== "");

  const handleResetFilters = () => {
    filters?.forEach((filter) => {
      filter.onChange("");
    });
  };

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex flex-1 items-center space-x-2">
        {filters &&
          filters.map(({ columnName, title, options, value, onChange }) => (
            <FacetedFilter
              key={columnName}
              title={title}
              options={options}
              value={value}
              onChange={onChange}
            />
          ))}

        {hasActiveFilters && (
          <Button
            variant="ghost"
            onClick={handleResetFilters}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>
      <div className="flex items-center gap-2">
        <DataTableViewOptions table={table} />
        {createButton}
      </div>
    </div>
  );
}
