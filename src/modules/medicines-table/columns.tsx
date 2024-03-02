import { ColumnDef } from "@tanstack/react-table";
import { MedicineType } from "@/types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-2xl">{medicine.name}</SheetTitle>
              <SheetDescription className="flex flex-col gap-2 text-xl text-black">
                <p>Stored Location: {medicine.stored_location}</p>
                <p>Potency: {medicine.potency}</p>
                <p>Quantity: {medicine.quantity}</p>
                <p>SKU Code: {medicine.sku_code}</p>
                <p>Category: {medicine.category}</p>
                <p>Sticker Name: {medicine.sticker_name}</p>
                <Button>Change</Button>
                <Button variant={"destructive"}>Delete</Button>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      );
    },
  },
];
