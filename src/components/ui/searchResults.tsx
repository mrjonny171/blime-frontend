import React from "react";
import { Card, CardContent } from "./card";

interface skin {
  name: string;
  skin_name: string;
  status: string;
  buffId: number;
  full_name: string;
}

interface SearchResultsProps {
  results: skin[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="w-64 mr-2 mt-1">
      {results.map((item, index) => (
        <Card
          key={index}
          className="dark:bg-gray-800 border"
        >
          <CardContent>
            {item.name} | {item.skin_name}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SearchResults;
