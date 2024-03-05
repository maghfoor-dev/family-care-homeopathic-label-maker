import { getAllMedicines } from "@/lib/utils";
import { MedicineType } from "@/types";
import { useEffect, useState } from "react";

export default function useGetMedicines() {
  const [medicines, setMedicines] = useState<MedicineType[]>([]);

  useEffect(() => {
    updateMedicines();
  }, []);

  async function updateMedicines() {
    const newMedicineData = await getAllMedicines();
    setMedicines(newMedicineData);
  }

  return {
    medicines,
    updateMedicines,
  };
}
