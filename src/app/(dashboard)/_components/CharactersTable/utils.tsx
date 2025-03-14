"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/dataTable/ColumnHeader";
import { DataTableFilterConfig } from "@/components/dataTable/types";
import { CharacterType } from "@/lib/axios/types";
import CharacterImage from "./CharacterImage";
import { DataTableFiltering } from "@/app/(dashboard)/_components/CharactersTable/types";

export const charactersTableColumns: ColumnDef<CharacterType>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} sort title="ID" />
    ),
    cell: ({ row }) => (
      <div className="flex w-full justify-center">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} sort title="Name" />
    ),
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} sort title="Status" />
    ),
    cell: ({ row }) => <div>{row.getValue("status")}</div>,
  },
  {
    accessorKey: "species",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} sort title="Species" />
    ),
    cell: ({ row }) => <div>{row.getValue("species")}</div>,
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} sort title="Type" />
    ),
    cell: ({ row }) => <div>{row.getValue("type")}</div>,
  },
  {
    accessorKey: "gender",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} sort title="Gender" />
    ),
    cell: ({ row }) => <div>{row.getValue("gender")}</div>,
  },
  {
    accessorKey: "image",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} sort title="Image" />
    ),
    cell: ({ row }) => (
      <CharacterImage src={row.getValue("image")} alt={row.getValue("name")} />
    ),
  },
];

export const charactersTableFilters: DataTableFilterConfig[] = [
  {
    columnName: "gender",
    title: "Gender",
    options: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
      { value: "unknown", label: "Unknown" },
    ],
  },
  {
    columnName: "status",
    title: "Status",
    options: [
      { value: "Alive", label: "Alive" },
      { value: "Dead", label: "Dead" },
      { value: "unknown", label: "Unknown" },
    ],
  },
];

export const getUrlFilters = (
  status: string,
  gender: string,
  handleFilterChange: (filterType: string, value: string) => void,
): DataTableFiltering[] => [
  {
    columnName: "status",
    title: "Status",
    options:
      charactersTableFilters.find((f) => f.columnName === "status")?.options ||
      [],
    value: status || "",
    onChange: (value: string) => handleFilterChange("status", value),
  },
  {
    columnName: "gender",
    title: "Gender",
    options:
      charactersTableFilters.find((f) => f.columnName === "gender")?.options ||
      [],
    value: gender || "",
    onChange: (value: string) => handleFilterChange("gender", value),
  },
];
