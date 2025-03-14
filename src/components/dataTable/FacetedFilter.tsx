import * as React from "react";
import { Check, PlusCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

interface FacetedFilterProps {
  title: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
  value: string;
  onChange: (value: string) => void;
}
export function FacetedFilter({
  title,
  options,
  value,
  onChange,
}: FacetedFilterProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircle />
          {title}
          {value && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal"
              >
                {options.find((option) => option.value === value)?.label ||
                  value}
              </Badge>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = value === option.value;
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      onChange(isSelected ? "" : option.value);
                    }}
                  >
                    <div
                      className={cn(
                        "border-primary mr-2 flex h-4 w-4 items-center justify-center rounded-sm border",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible",
                      )}
                    >
                      <Check />
                    </div>
                    {option.icon && (
                      <option.icon className="text-muted-foreground mr-2 h-4 w-4" />
                    )}
                    <span>{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {value && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => onChange("")}
                    className="justify-center text-center"
                  >
                    Clear filter
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
