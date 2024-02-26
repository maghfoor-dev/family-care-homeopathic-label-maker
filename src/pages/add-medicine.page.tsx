"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import z from "zod";
const formSchema = z.object({
    name: z.string().min(2),
    potency: z.string(),
    quantity: z.string(),
    sticker_name: z.string(),
    sku_code: z.string(),
    category: z.string(),
    stored_location: z.string()
})
export default function AddMedicineForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values, 'ARE THE FORM INPUT VALUES')
    }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField control={form.control} name="name" render={({ field} ) => (
               <FormItem>
                <FormLabel>Medicine Name</FormLabel>
                <FormControl>
                    <Input placeholder="Enter medicine name..." {...field}/>
                </FormControl>
               </FormItem> 
            )}/>
            <FormField control={form.control} name="potency" render={({ field} ) => (
               <FormItem>
                <FormLabel>Medicine Potency</FormLabel>
                <FormControl>
                    <Input placeholder="Enter medicine potentcy..." {...field}/>
                </FormControl>
               </FormItem> 
            )}/>
            <FormField control={form.control} name="quantity" render={({ field} ) => (
               <FormItem>
                <FormLabel>Medicine Quantity</FormLabel>
                <FormControl>
                    <Input placeholder="Enter medicine quantity..." {...field}/>
                </FormControl>
               </FormItem> 
            )}/>
            <FormField control={form.control} name="sticker_name" render={({ field} ) => (
               <FormItem>
                <FormLabel>Medicine Sticker Name</FormLabel>
                <FormControl>
                    <Input placeholder="Enter medicine sticker name..." {...field}/>
                </FormControl>
               </FormItem> 
            )}/>
            <FormField control={form.control} name="sku_code" render={({ field} ) => (
               <FormItem>
                <FormLabel>Medicine SKU Code</FormLabel>
                <FormControl>
                    <Input placeholder="Enter medicine sku code..." {...field}/>
                </FormControl>
               </FormItem> 
            )}/>
            <FormField control={form.control} name="category" render={({ field} ) => (
               <FormItem>
                <FormLabel>Medicine Category</FormLabel>
                <FormControl>
                    <Input placeholder="Enter medicine category..." {...field}/>
                </FormControl>
               </FormItem> 
            )}/>
            <FormField control={form.control} name="stored_location" render={({ field} ) => (
               <FormItem>
                <FormLabel>Medicine Stored Location</FormLabel>
                <FormControl>
                    <Input placeholder="Enter medicine storage location..." {...field}/>
                </FormControl>
               </FormItem> 
            )}/>
                
            <Button type="submit">Submit</Button> 
            </form>
    </Form>
  )
}