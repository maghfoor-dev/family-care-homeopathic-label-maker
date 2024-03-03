"use client";

import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import db from "@/lib/database";
import { MedicineType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  potency: z.enum(["6C", "30C", "200C", "1M"]),
  quantity: z.enum(["8g", "16g", "25g", "10mL", "30mL"]),
  sticker_name: z.string().min(2),
  sku_code: z.string().min(2),
  category: z.enum([
    "P",
    "Q",
    "AIDS",
    "CREAM",
    "TABLETS",
    "OIL",
    "TST",
    "TSLF",
    "DROPS",
  ]),
  stored_location: z.string().min(2),
});

async function addMedicineToDatabase(data: z.infer<typeof formSchema>) {
  const {
    name,
    potency,
    quantity,
    sticker_name,
    sku_code,
    category,
    stored_location,
  } = data;

  const query = `INSERT INTO medicine_list (name, potency, quantity, sticker_name, sku_code, category, stored_location) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)`;
  const params = [
    name,
    potency,
    quantity,
    sticker_name,
    sku_code,
    category,
    stored_location,
  ];
  const database = await db;
  const response = await database.execute(query, params);
  return response;
}

export default function UpdateMedicineForm({
  currentMedicine,
}: {
  currentMedicine: MedicineType;
}) {

    console.log(currentMedicine, 'IS THE CURRENT MEDICINE PASSED INTO THE FORM')
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const successfullyAdded = await addMedicineToDatabase(values);
    console.log(
      successfullyAdded,
      "IS THE SUCESSFULLY ADDED VALUE ON SUBMITTING THE FORM"
    );
    if (successfullyAdded) {
      toast({
        title: "Medicine Added!",
        description: `${values.name} has been added sucessfully.`,
        variant: "success",
      });
    } else if (!successfullyAdded) {
      toast({
        title: "Oops!",
        description:
          "Something has gone wrong. Please make sure input is correct.",
        variant: "destructive",
      });
    }
  }

  return (
    <section>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2 p-4 max-w-xl mx-auto"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-100"
                    placeholder="Arnica"
                    {...field}
                    defaultValue={currentMedicine.name}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="potency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Potency</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={currentMedicine.potency}
                >
                  <FormControl>
                    <SelectTrigger className="bg-gray-100">
                      <SelectValue placeholder="Select Potency" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="6C">6C</SelectItem>
                    <SelectItem value="30C">30C</SelectItem>
                    <SelectItem value="200C">200C</SelectItem>
                    <SelectItem value="1M">1M</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={currentMedicine.quantity}
                >
                  <FormControl>
                    <SelectTrigger className="bg-gray-100">
                      <SelectValue placeholder="Select Quantity" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="8g">8g</SelectItem>
                    <SelectItem value="16g">16g</SelectItem>
                    <SelectItem value="25g">25g</SelectItem>
                    <SelectItem value="10mL">10mL</SelectItem>
                    <SelectItem value="30mL">30mL</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={currentMedicine.category}
                >
                  <FormControl>
                    <SelectTrigger className="bg-gray-100">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="P">P</SelectItem>
                    <SelectItem value="Q">Q</SelectItem>
                    <SelectItem value="AIDS">AIDS</SelectItem>
                    <SelectItem value="CREAM">CREAM</SelectItem>
                    <SelectItem value="DROPS">DROPS</SelectItem>
                    <SelectItem value="OIL">OIL</SelectItem>
                    <SelectItem value="TABLETS">TABLETS</SelectItem>
                    <SelectItem value="TST">TST</SelectItem>
                    <SelectItem value="TSLF">TSLF</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sticker_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sticker Name</FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-100"
                    placeholder="Arnica"
                    {...field}
                    defaultValue={currentMedicine.sticker_name}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stored_location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stored Location</FormLabel>
                <FormControl>
                  <Input className="bg-gray-100" placeholder="2A2" defaultValue={currentMedicine.stored_location} {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sku_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SKU Code</FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-100"
                    placeholder="ARNECA-30C-25g-2A2-P-10023"
                    {...field}
                    defaultValue={currentMedicine.sku_code}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        <DialogClose asChild> 
          <Button type="submit">Update</Button>
         </DialogClose> 
        </form>
      </Form>
    </section>
  );
}
