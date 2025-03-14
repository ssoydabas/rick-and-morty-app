"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/dataTable/ColumnHeader";
import { DataTableFilterConfig } from "@/components/dataTable/types";
import { CharacterType } from "@/lib/axios/types";

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
    cell: ({ row }) => <div>{row.getValue("image")}</div>,
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
