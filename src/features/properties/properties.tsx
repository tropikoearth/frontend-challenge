import { ChangeEvent, KeyboardEvent, useCallback, useEffect } from "react";

import * as S from "./styles";

import { List } from "@/components/list";
import { Search } from "@/components/search";
import { useSearchContext } from "@/contexts/search-context";
import useGetProperties from "@/hooks/use-get-properties";
import useDebounce from "@/hooks/use-debounce";

const Properties = () => {
  const { data, searchProperty, clearSearch } = useGetProperties();

  const { setSearch, search } = useSearchContext();

  const debouncedValue = useDebounce(search);

  const handleChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    [setSearch]
  );

  const handleSearchInput = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        searchProperty(search);
      }
    },
    [search, searchProperty]
  );

  const handleClearInput = useCallback(() => {
    setSearch("");
    clearSearch();
  }, [clearSearch, setSearch]);

  useEffect(() => {
    if (!search) {
      clearSearch();
    }
  }, [clearSearch, search, setSearch]);

  useEffect(() => {
    if (search) {
      searchProperty(debouncedValue);
    }
  }, [debouncedValue, search, searchProperty]);

  return (
    <S.Container>
      <List data={data} />
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
