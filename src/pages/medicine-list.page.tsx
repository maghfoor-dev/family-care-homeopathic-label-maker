import { Button } from "@/components/ui/button";
import { columns } from "@/modules/medicines-table/columns";
import { DataTable } from "@/modules/medicines-table/data-table";
import { Link } from "react-router-dom";
import { RefreshCcwIcon } from "lucide-react";
import { useContext } from "react";
import { UpdateMedicinesContext } from "@/context/medicines-context";

export default function MedicineListPage() {
  const { medicines, updateMedicines } = useContext(UpdateMedicinesContext);

  return (
    <section className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Link to={"/add-medicine"}>
          <Button>Add a Medicine</Button>
        </Link>
        <Button onClick={updateMedicines}>
          <RefreshCcwIcon />
        </Button>
      </div>
      <DataTable columns={columns} data={medicines} />
    </section>
  );
}
