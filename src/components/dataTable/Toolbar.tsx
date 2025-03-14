"use client";

import { type ReactNode } from "react";
import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./ViewOptions";

import { DataTableFacetedFilter } from "./FacetedFilter";
import type { DataTableFilterConfig } from "./types";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filters?: DataTableFilterConfig[];
  createButton?: ReactNode;
}

export function DataTableToolbar<TData>({
  table,
  filters,
  createButton,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search"
          value={(table.getState().globalFilter as string) ?? ""}
          onChange={(event) => table.setGlobalFilter(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />

        {filters &&
          filters.map(({ columnName, title, options }) => {
            const column = table.getColumn(columnName);
            return (
              column && (
                <DataTableFacetedFilter
                  key={columnName}
                  column={column}
                  title={title}
                  options={options}
                />
              )
            );
          })}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
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
