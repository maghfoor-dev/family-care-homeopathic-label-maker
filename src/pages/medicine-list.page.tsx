import db from "@/lib/database";
import { useState } from "react";

export default function MedicineListPage() {
  const [medicines, setMedicines] = useState([]);

  async function getMedicineList() {
    const response = await db.select("SELECT * FROM medicine_list;");

    console.log(response, "IS THE RESPONSE");
    setMedicines(response as any);
  }
  return (
    <section>
      <h1>THIS IS THE MEDICINE LIST PAGE.</h1>
      <button onClick={getMedicineList}>GET MEDICINES</button>
      <p>{JSON.stringify(medicines, null, 0)}</p>
    </section>
  );
}
