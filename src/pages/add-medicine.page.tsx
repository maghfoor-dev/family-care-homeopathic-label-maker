"use client";

import { Button } from "@/components/ui/button";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
const formSchema = z.object({
  name: z.string().min(2),
  potency: z.string().min(2),
  quantity: z.string().min(2),
  sticker_name: z.string().min(2),
  sku_code: z.string().min(2),
  category: z.string().min(1),
  stored_location: z.string().min(2),
});

async function addMedicineToDatabase(data: z.infer<typeof formSchema>) {
  console.log(data, 'IS THE DATA')
  const {name, potency, quantity, sticker_name, sku_code, category, stored_location } = data;

  const query = `INSERT INTO medicine_list (name, potency, quantity, sticker_name, sku_code, category, stored_location) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)`;
  const params = [name, potency, quantity, sticker_name, sku_code, category, stored_location]
  const database = await db;
  const response = await database.execute(query, params)
  return response
}

export default function AddMedicineForm() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const successfullyAdded = await addMedicineToDatabase(values)
    console.log(successfullyAdded, 'IS THE SUCESSFULLY ADDED VALUE ON SUBMITTING THE FORM')
    if (successfullyAdded) {
      toast({
       title: 'Medicine Added!',
       description: `${values.name} has been added sucessfully.`,
       variant: 'success'
      })
    } else if (!successfullyAdded) {
      toast({
        title: 'Oops!',
        description: 'Something has gone wrong. Please make sure input is correct.',
        variant: "destructive"
      })
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
                <FormLabel>Medicine Name</FormLabel>
                <FormControl>
                  <Input placeholder="Arneca" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="potency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Medicine Potency</FormLabel>
                <FormControl>
                  <Input placeholder="30c" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Medicine Quantity</FormLabel>
                <FormControl>
                  <Input placeholder="25g" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sticker_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Medicine Sticker Name</FormLabel>
                <FormControl>
                  <Input placeholder="Arneca" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sku_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Medicine SKU Code</FormLabel>
                <FormControl>
                  <Input placeholder="ARNECA-30C-25g-2A2-P-10023" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stored_location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Medicine Stored Location</FormLabel>
                <FormControl>
                  <Input placeholder="2A2" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Medicine Stored Location</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="P">P</SelectItem>
                    <SelectItem value="Q">Q</SelectItem>
                    <SelectItem value="AIDS">AIDS</SelectItem>
                    <SelectItem value="CREAM">CREAM</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
}
