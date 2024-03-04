import { ColumnDef } from "@tanstack/react-table";
import { MedicineType } from "@/types";
import TableSheet from "../table-sheet";

export const columns: ColumnDef<MedicineType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "potency",
    header: "Potency",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "sku_code",
    header: "SKU Code",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "stored_location",
    header: "Stored Location",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const medicine = row.original;

      return (
        <TableSheet medicine={medicine}/>
      )
    },
  },
];
