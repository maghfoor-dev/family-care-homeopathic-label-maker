import { getAllMedicines } from "@/lib/utils";
import { MedicineType } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";

type MedicinesContextType = {
  medicines: MedicineType[];
  updateMedicines: () => Promise<void>;
};
export const UpdateMedicinesContext = createContext<MedicinesContextType>({
  medicines: [],
  updateMedicines: async () =>
    console.log("Update medicines default funciton."),
});

export function useUpdateMedicines() {
  return useContext(UpdateMedicinesContext);
}

export function UpdateMedicinesProvider({ children }: { children: any }) {
  const [medicines, setMedicines] = useState<MedicineType[]>([]);

  useEffect(() => {
    updateMedicines();
  }, []);

  async function updateMedicines() {
    const newMedicines = await getAllMedicines();
    setMedicines(newMedicines);
  }

  const contextValue = { medicines, updateMedicines };
  return (
    <UpdateMedicinesContext.Provider value={contextValue}>
      {children}
    </UpdateMedicinesContext.Provider>
  );
}
