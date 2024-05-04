import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Field, FieldArray, FieldValues, useForm } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



export function DataCalendar({onBlur, onChange, value}: FieldValues) {
//   const form = useForm({
//     defaultValues: {
//         dob: "",
//     }
// })

//   function onSubmit(data: any) {
//     toast({
//       title: "You submitted the following values:",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     })
//   }
    const startDate = new Date()
    startDate.setDate(startDate.getDay())
    const endDate = new Date()
    endDate.setDate(endDate.getDay() + 7)


  return (
            <FormItem className="flex flex-col">
              <FormLabel>Date of starting auction</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !value && "text-muted-foreground"
                      )}
                    >
                      {value ? (
                        format(value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={value}
                    onSelect={onChange}
                    disabled={(date) => {
                        return date < startDate || date > endDate
                    }
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Date when the auction will start.
              </FormDescription>
              <FormMessage />
            </FormItem>
  )
}
