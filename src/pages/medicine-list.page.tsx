import { Button } from "@/components/ui/button";
import useGetMedicines from "@/hooks/use-get-medicines";
import { columns } from "@/modules/medicines-table/columns";
import { DataTable } from "@/modules/medicines-table/data-table";
import { Link } from "react-router-dom";

export default function MedicineListPage() {
  const { medicines } = useGetMedicines();
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
