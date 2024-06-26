
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import ComboboxForm from "./ComboboxForm"
import { DataCalendar } from "./DataCalendar"

type AuctionFormProps = {
    title: string
    description: string
    price: number
    category: string
    promoted: boolean
    date: string | Date
    images: string[]
}


function AuctionForm() {

    const form = useForm<AuctionFormProps>({
        defaultValues: {
            title: "",
            description: "",
            price: 50,
            category: "",
            promoted: false,
            date: "",
            images: [],
        },
        reValidateMode: "onBlur"
    })


    function onSubmit(data: any) {
        const formData = new FormData()
                
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("price", data.price.toString()); // Ensure price is a string
        formData.append("category", data.category);
        formData.append("promoted", data.promoted.toString()); // Convert boolean to string
        formData.append("date", data.date);
        
        data.images.forEach((file: File, index: number) => {
            const blob = new Blob([file], { type: file.type })
            formData.append(`images[${index}]`, blob, file.name)
        })

        for (let [key, value] of formData.entries()) {
            console.log(`${key}:${value}`)
        }
        
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xs sm:max-w-sm lg:max-w-md mx-auto my-12 space-y-12">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title..." {...field} />
              </FormControl>
              {/* <FormDescription>
                Title for this auction.
              </FormDescription> */}
              <FormMessage />
            </div>
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Add description" {...field} />
              </FormControl>
              <FormDescription>
                Add a description to your auction.
              </FormDescription>
              <FormMessage />
            </div>
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <FormLabel>Starting price (RON)</FormLabel>
              <FormControl>
                <Input min={10} max={50000} type="number" placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                Add starting price
              </FormDescription>
              <FormMessage />
            </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <FormLabel>Category</FormLabel>
              <FormControl>
                <ComboboxForm {...field} />
              </FormControl>
              <FormDescription>
                Add category
              </FormDescription>
              <FormMessage />
            </div>
            </FormItem>
          )}
        />
              <FormField
            control={form.control}
            name="promoted"
            render={({ field }) => (
            <FormItem className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center flex-row">
                <FormControl>
                  <input className="w-4 h-4" type="checkbox" checked={field.value} onChange={field.onChange} />
                </FormControl>
                <FormLabel>Promote this auction</FormLabel>
              </div>
              <div className="">
                <FormDescription>
                Promote this auction for <span className="text-primary"> 500 credits </span>
              </FormDescription>
              </div>
                <FormMessage />
            </div>
            </FormItem>
        )} />
               <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
            <DataCalendar {...field} />
        )} />
        <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
            <FormItem className="flex  flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 flex-col">
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <Input 
                  id="images"
                  type="file"
                  multiple={true}
                  accept="image/png, image/gif, image/jpeg" 
                  onBlur={field.onBlur}
                  onChange={(e) => {
                    const files = Array.from(e.target.files as FileList);
                    const fileUrls = files?.map((file) =>
                      URL.createObjectURL(file)
                    );
                    field.onChange(fileUrls);
                  }}
                  />
                </FormControl>
              </div>
              <div className="">
                <FormDescription>
                Use images for this auction 
              </FormDescription>
              </div>
                <FormMessage />
            </div>
            </FormItem>
        )} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}


export default AuctionForm