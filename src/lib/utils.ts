import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import db from "./database";
import { MedicineType } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createCodesList(input: string) {
  // splitting codes by lines
  const inputCodes: string[] = input.split("\n");

  // removing any spaces from the codes
  const removedSpacesCodes: string[] = inputCodes.map((code) =>
    code.replace(/\s/g, "")
  );

  // removing any empty strings
  const finalCodes = removedSpacesCodes.filter((code) => code.length > 0);

  return finalCodes;
}

export async function getAllMedicines() {
  const database = await db;
  const medicines: MedicineType[] = await database.select(
    "SELECT * FROM medicine_list;"
  );

  return medicines;
}

export async function deleteMedicine(id: string | number) {
  const database = await db;
  const result = await database.execute(
    `DELETE FROM medicine_list where id = ${id}`
  );
  return result;
}

export async function getQueuedMedcinesList() {
  const database = await db;
  const queueList = await database.select("SELECT * FROM medicine_queue_list;");

  return queueList;
}
