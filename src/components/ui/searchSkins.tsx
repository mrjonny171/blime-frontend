import { useState } from "react";
import SearchBar from "./searchBar";
import SearchResults from "./searchResults";

import skins from "@/lib/skins";

interface skin {
  name: string;
  skin_name: string;
  status: string;
  buffId: number;
  full_name: string;
}

const SearchSkins = () => {
  const [searchResults, setSearchResults] = useState(Array<skin>);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm === "") {
      return;
    }

    const filteredResults = skins.filter((item) =>
      item.full_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </div>
  );
};

export default SearchSkins;
