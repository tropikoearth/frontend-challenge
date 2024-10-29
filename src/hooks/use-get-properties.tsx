import { useState } from "react";
import Data from "../../properties.json";

const useGetProperties = () => {
  const [data, setData] = useState(Data.items);

  const searchProperty = (param: string) => {
    /**
     * The regex `new RegExp(param, "i")` creates a regular expression that
     * searches for the `param` value within a string in a case-insensitive
     * manner, matching the term anywhere in the string.
     */

    const regex = new RegExp(param, "i");

    const search = param
      ? Data.items.filter((value) => regex.test(value.name))
      : Data.items;

    setData(search);
  };

  const clearSearch = () => {
    searchProperty("");
  };

  return { searchProperty, data, clearSearch };
};

export default useGetProperties;
