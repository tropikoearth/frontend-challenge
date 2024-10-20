import { ChangeEvent, KeyboardEvent, useCallback } from "react";

import Data from "../../../properties.json";

import * as S from "./styles";

import { List } from "@/components/list";
import { Search } from "@/components/search";
import { useSearchContext } from "@/contexts/search-context";

const Properties = () => {
  const { setSearch, search } = useSearchContext();

  const handleChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    [setSearch]
  );

  const handleSearchInput = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        //TODO : Event to hande Search in input
        console.log(search);

        return;
      }
    },
    [search]
  );

  const handleClearInput = useCallback(() => {
    setSearch("");
  }, [setSearch]);

  return (
    <S.Container>
      <List data={Data} />
      <Search
        value={search}
        handleClearInput={handleClearInput}
        handleChange={handleChangeInput}
        handleSearch={handleSearchInput}
      />
    </S.Container>
  );
};

export default Properties;
