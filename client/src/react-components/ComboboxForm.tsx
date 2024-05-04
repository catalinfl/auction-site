import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const categories = [
  {
    value: "books",
    label: "Books" 
  },
  {
    value: "art",
    label: "Art"
  },
  {
    value: "furniture",
    label: "Furniture"
  },
  {
    value: "jewelry",
    label: "Jewelry"
  }
]

export default function ComboboxForm({ onChange, onBlur, value }: any) {
  const [open, setOpen] = React.useState(false)

  const handleSelect = (currentValue: any) => {
    onChange(currentValue === value ? "" : currentValue)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? categories.find((category) => category.value === value)?.label
            : "Select category type..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category type" />
          <CommandEmpty>No category found</CommandEmpty>
          <CommandGroup>
            {categories.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={handleSelect}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
