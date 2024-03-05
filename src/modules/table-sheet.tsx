import { MedicineType } from "@/types";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deleteMedicine } from "@/lib/utils";
import UpdateMedicineForm from "./update-medicine-form";
import useGetMedicines from "@/hooks/use-get-medicines";

export default function TableSheet({ medicine }: { medicine: MedicineType }) {
  const { updateMedicines } = useGetMedicines();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl">{medicine.name}</SheetTitle>
          <SheetDescription className="flex flex-col gap-2 text-xl text-black">
            <p>Stored Location: {medicine.stored_location}</p>
            <p>Potency: {medicine.potency}</p>
            <p>Quantity: {medicine.quantity}</p>
            <p>SKU Code: {medicine.sku_code}</p>
            <p>Category: {medicine.category}</p>
            <p>Sticker Name: {medicine.sticker_name}</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Change</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Change Medicine</DialogTitle>
                  <DialogDescription>
                    Make changes to the medicine here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <UpdateMedicineForm currentMedicine={medicine} />
              </DialogContent>
            </Dialog>{" "}
            <SheetClose asChild>
              <Button
                variant={"destructive"}
                onClick={async () => {
                  await deleteMedicine(medicine.id);
                  updateMedicines();
                }}
              >
                Delete
              </Button>
            </SheetClose>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
