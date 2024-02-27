import { ColumnDef } from "@tanstack/react-table";
import { MedicineType } from "@/types";


export const columns: ColumnDef<MedicineType>[] = [
    {
        accessorKey: 'name',
        header: 'Name'
    },
    {
        accessorKey: 'potency',
        header: 'Potency'
    },
    {
        accessorKey: 'quantity',
        header: 'Quantity'
    }
]