import { ChangeEvent, KeyboardEvent, memo } from "react";

import Image from "next/image";
import * as S from "./styles";

import SearchIcon from "@/assets/search-icon.svg";
import CancelIcon from "@/assets/cancel-icon.svg";
import MapBox from "../mapbox";

type Props = {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearch: (event: KeyboardEvent<HTMLInputElement>) => void;
  handleClearInput: () => void;
};

const Search = ({
  handleChange,
  handleSearch,
  handleClearInput,
  value,
}: Props) => {
  return (
    <>
      <S.Container>
        <S.InputContainer>
          <S.IconSearchContainer>
            <Image src={SearchIcon} alt="Icone de busca" />
          </S.IconSearchContainer>
          <S.Input
            value={value}
            onChange={handleChange}
            placeholder="Procurar o nome de uma propriedade"
            onKeyUp={handleSearch}
          />
          {value ? (
            <S.IconCancelContainer onClick={handleClearInput}>
              <Image src={CancelIcon} alt="Limpar pesquisa" />
            </S.IconCancelContainer>
          ) : null}
        </S.InputContainer>
      </S.Container>
      <S.ContainerMap>
        <MapBox />
      </S.ContainerMap>
    </>
  );
};

export default memo(Search);
