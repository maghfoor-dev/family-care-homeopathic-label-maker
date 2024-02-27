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
export default function AddMedicineForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, "ARE THE FORM INPUT VALUES");
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
