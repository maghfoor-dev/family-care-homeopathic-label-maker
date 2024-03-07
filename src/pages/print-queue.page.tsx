import { useQueuedMedicinesContext } from "@/context/print-queue-context";

export default function PrintQueuePage() {
  const { queue } = useQueuedMedicinesContext();
  console.log(queue, "IS THE QUEUE");
  return (
    <section>
      <h1>THIS IS THE PRINT QUEUE PAGE.</h1>
      <div className="flex flex-col justify-centre items-centre bg-red">
        {queue.map((medicine) => {
          return (
            <div>
              <p>{medicine.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
