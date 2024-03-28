import { MedicineType } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

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
    addToQueue: () => console.log("empty addToQueue function"),
  });

export function useQueuedMedicinesContext() {
  return useContext(QueuedMedicinesContext);
}

export function QueuedMedicinesProvider({ children }: { children: any }) {
  const [queue, setQueue] = useState<QueuedMedicine[]>([]);

  function addToQueue(medicine: QueuedMedicine) {
    setQueue([medicine]);
  }

  const contextValue = { queue, addToQueue };
  return (
    <QueuedMedicinesContext.Provider value={contextValue}>
      {children}
    </QueuedMedicinesContext.Provider>
  );
}
