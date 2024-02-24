import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
