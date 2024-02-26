import { Button } from "@/components/ui/button";
import db from "@/lib/database";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MedicineListPage() {
  const [medicines, setMedicines] = useState([]);

  async function getMedicineList() {
    const response = await (await db).select("SELECT * FROM medicine_list;");

    console.log(response, "IS THE RESPONSE");
    setMedicines(response as any);
  }
  return (
    <section className="flex flex-col gap-2">
      <Link to={"/add-medicine"}>
      <Button>Add a Medicine</Button>
     </Link> 
     <div>
      <Button onClick={getMedicineList}>GET MEDICINES</Button>
     </div> 
      <p>{JSON.stringify(medicines, null, 0)}</p>
    </section>
  );
}
