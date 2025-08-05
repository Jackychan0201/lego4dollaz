import { useState } from "react";
import { Label } from "@/components/ui/label";

export default function SearchBar({ onSearch, placeholder = "Search..." }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <form className="flex items-center gap-2 w-full max-w-md">
      <Label htmlFor="search-input" className="text-xl text-gray-700">Search 🔍</Label>
      <input
        id="search-input"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-base bg-white"
        autoComplete="off"
      />
    </form>
  );
}
