import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const options = [
  { value: "price-asc", label: "Price (lowest to highest)" },
  { value: "price-desc", label: "Price (highest to lowest)" },
  { value: "alpha-desc", label: "Alphabetical (Z-A)" },
  { value: "alpha-asc", label: "Alphabetical (A-Z)" },
];

export default function FilterDropdown({ onSelect }) {
  const [selected, setSelected] = useState();
  const handleSelect = (value) => {
    setSelected(value);
    onSelect?.(value);
  };
  const selectedLabel = options.find((o) => o.value === selected)?.label || "Filters";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 font-medium text-gray-800">
          {selectedLabel}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {options.map((opt) => (
          <DropdownMenuItem key={opt.value} onSelect={() => handleSelect(opt.value)}>
            {opt.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
