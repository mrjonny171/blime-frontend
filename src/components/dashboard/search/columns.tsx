import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { FolderSearch2, GitCompare } from "lucide-react";

export type skin = {
  full_name: string;
  name: string;
  skin: string;
  wear: string;
};

export const columns: ColumnDef<skin>[] = [
  {
    accessorKey: "full_name",
    header: "Full Name",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "skin",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Skin
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "wear",
    header: "Wear",
  },
  {
    id: "redirect",
    header: "Search",
    cell: ({ row }) => (
      <Button
        variant="ghost"
        onClick={() => console.log(row.original.name)}
      >
        <FolderSearch2 color="currentColor" />
      </Button>
    ),
  },
  {
    id: "redirect",
    header: "Add to Comparator",
    cell: ({ row }) => (
      <Button
        variant="ghost"
        onClick={() => console.log(row.original.name)}
      >
        <GitCompare color="currentColor" />
      </Button>
    ),
  },
];
