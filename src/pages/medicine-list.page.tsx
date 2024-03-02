import { Button } from "@/components/ui/button";
import { getAllMedicines } from "@/lib/utils";
import { columns } from "@/modules/medicines-table/columns";
import { DataTable } from "@/modules/medicines-table/data-table";
import { MedicineType } from "@/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MedicineListPage() {
  const [medicines, setMedicines] = useState<MedicineType[]>([]);

  async function setMedicineList() {
    const response = await getAllMedicines();

    setMedicines(response);
  }

  useEffect(() => {
    setMedicineList();
  }, []);
  return (
    <section className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Link to={"/add-medicine"}>
          <Button>Add a Medicine</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={medicines} />
    </section>
  );
}
