import { SetStateAction, useState } from "react";
import { Input } from "./input";
import { Button } from "./button";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center space-x-4">
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="w-64 text-gray-200 dark:bg-gray-800"
      />
      <Button
        variant="secondary"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
