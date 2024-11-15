// search.tsx
import { Search } from "lucide-react";
import React, { FC, ChangeEvent } from "react";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="relative w-full max-w-xs mx-auto">
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
        <Search className="w-4 h-4" />
      </span>
      <input
        type="text"
        placeholder="Search Job..."
        onChange={handleInputChange}
        className="w-full py-2 pl-8 pr-3 text-sm bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition duration-300 ease-in-out"
      />
    </div>
  );
};

export default SearchInput;
