import { useContext, useState } from "react";
// import { invoke } from "@tauri-apps/api/tauri";
// import {
//   NavigationMenu,
//   NavigationMenuLink,
//   navigationMenuTriggerStyle,
// } from "../components/ui/navigation-menu";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";
import { createCodesList, getAllMedicines } from "../lib/utils";
import { UpdateMedicinesContext } from "@/context/medicines-context";
import { MedicineType } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SKU_IDS = [
  "code-1",
  "code-2",
  "code-3",
  "code-4",
  "code-5",
  "code-6",
  "code-7",
];

export default function HomePage() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");
  const [addedCodes, setAddedCodes] = useState<string[]>([]);
  const [foundMedicines, setFoudnMedicines] = useState<MedicineType[]>([]);
  const [searchingMedicines, setSearchingMedicines] = useState<boolean>(false);
  const { medicines } = useContext(UpdateMedicinesContext);
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  function handleCodesInput(input: string) {
    const inputtedCodes = createCodesList(input);
    setAddedCodes(inputtedCodes);
  }

  async function handleFindCodes() {
    setSearchingMedicines(true);
    const foundCodesArr: MedicineType[] = [];

    // const medicineIds = medicines.map((medicine) => medicine.sku_code);

    /* for (const code of addedCodes) {
      if (medicineIds.includes(code)) {
        foundCodesArr.push(code);
      }
    } */

    const sku_medicines: { [key: string]: MedicineType } = {};

    for (const medicine of medicines) {
      sku_medicines[medicine.sku_code] = medicine;
    }
    for (const code of addedCodes) {
      if (code in sku_medicines) {
        foundCodesArr.push(sku_medicines[code]);
      }
    }

    setFoudnMedicines(foundCodesArr);
    setSearchingMedicines(false);
  }

  return (
    <div className="flex flex-col max-w-7xl mx-auto gap-9">
      {/* <h1>Welcome to Tauri!</h1>
  
        <p>Click on the Tauri, Vite, and React logos to learn more.</p>
  
        <form
          className="row"
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="submit">Greet</button>
        </form>
  
        <p>{greetMsg}</p> */}

      <section className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex flex-col justify-center gap-4">
          <Card className="min-card-width min-card-height">
            <CardHeader>
              <CardTitle>SKU Codes ({addedCodes.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                className="h-[400px] bg-gray-300"
                placeholder="Add your SKU codes here..."
                onChange={(event) => handleCodesInput(event.target.value)}
              ></Textarea>
            </CardContent>
          </Card>
          <Button
            disabled={searchingMedicines}
            variant={"secondary"}
            onClick={handleFindCodes}
          >
            Search Codes
          </Button>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <Card className="min-card-width min-card-height">
            <CardHeader>
              <CardTitle>Found Codes ({foundMedicines.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-300 h-[400px] py-2 px-3 rounded-md flex flex-col gap-1 overflow-scroll overflow-x-hidden">
                {foundMedicines.map((foundMedicine) => {
                  return (
                    <Card className="bg-[#F2F5DE] p-2 text-sm cursor-pointer">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div>{foundMedicine.sku_code}</div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>{foundMedicine.name}</DialogTitle>
                            <DialogDescription>
                              <p>
                                Stored Location: {foundMedicine.stored_location}
                              </p>
                              <p>Potency: {foundMedicine.potency}</p>
                              <p>Quantity: {foundMedicine.quantity}</p>
                              <p>SKU Code: {foundMedicine.sku_code}</p>
                              <p>Category: {foundMedicine.category}</p>
                              <p>Sticker Name: {foundMedicine.sticker_name}</p>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>{" "}
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          <Button variant={"secondary"}>Add to Queue</Button>
        </div>
      </section>
      <div>{JSON.stringify(addedCodes, null, 0)}</div>
    </div>
  );
}
