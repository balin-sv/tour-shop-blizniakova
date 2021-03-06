import React from "react";
import { useContext } from "react";
import ItemListContainer from "../item-list-container";
import { SearchContext } from "../context/search-context";

const Search = () => {
  const value = useContext(SearchContext);
  return (
    <div>
      <h1>Search</h1>
      <ItemListContainer data={value.resultArray} />
    </div>
  );
};

export default Search;
