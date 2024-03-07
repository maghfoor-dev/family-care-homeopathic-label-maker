import { MedicineType } from "@/types";
import { createContext, useEffect, useState } from "react";

type QueuedMedicine = MedicineType & {
  queueId: number;
};

type PrintQueueContextProperties = {
  queue: QueuedMedicine[];
  addToQueue: (medicine: QueuedMedicine) => void;
};

export const QueuedMedicinesContext =
  createContext<PrintQueueContextProperties>({
    queue: [],
    addToQueue: () => console.log("empty function"),
  });

export function QueuedMedicinesProvider({ children }: { children: any }) {
  const [queue, setQueue] = useState<QueuedMedicine[]>([]);

  function addToQueue(medicine: QueuedMedicine) {
    setQueue([...queue, medicine]);
  }

  const contextValue = { queue, addToQueue };
  return (
    <QueuedMedicinesContext.Provider value={contextValue}>
      {children}
    </QueuedMedicinesContext.Provider>
  );
}
