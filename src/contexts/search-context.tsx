import { createContext, ReactNode, useContext, useState } from "react";

type SearchContextValue = {
  search: string;
  setSearch: (text: string) => void;
};

export const InitialSearchContext = createContext<SearchContextValue>(
  {} as SearchContextValue
);

export const useSearchContext = (): SearchContextValue =>
  useContext(InitialSearchContext);

interface SearchStateContextProviderProps {
  children: ReactNode;
  value?: SearchContextValue;
}

const SearchContextProvider = ({
  children,
}: SearchStateContextProviderProps) => {
  const [search, setSearch] = useState<string>("");

  return (
    <InitialSearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </InitialSearchContext.Provider>
  );
};

export default SearchContextProvider;
