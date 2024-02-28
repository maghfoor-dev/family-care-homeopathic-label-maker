import { Button } from "@/components/ui/button";
import db from "@/lib/database";
import { columns } from "@/modules/medicines-table/columns";
import { DataTable } from "@/modules/medicines-table/data-table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MedicineListPage() {
  const [medicines, setMedicines] = useState([]);

  async function getMedicineList() {
    const response = await (await db).select("SELECT * FROM medicine_list;");

    setMedicines(response as any);
  }

  useEffect(() => {
    getMedicineList()
  }, [])
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
