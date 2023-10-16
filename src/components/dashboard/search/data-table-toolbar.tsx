"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { DataTableViewOptions } from "./data-table-view-options";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";

import { wear } from "./data/data";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center space-x-4">
        <Input
          placeholder="Search"
          value={(table.getColumn("full_name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("full_name")?.setFilterValue(event.target.value)}
          className="w-64 dark:bg-gray-800 dark:text-white"
        />
        {table.getColumn("wear") && (
          <DataTableFacetedFilter
            column={table.getColumn("wear")}
            title="Wear"
            options={wear}
          />
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="ml-auto px-2 lg:px-3 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
