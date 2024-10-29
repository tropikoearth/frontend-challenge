import { Data } from "@/features/properties/types";
import * as S from "./styles";
import { getSubtitle } from ".";
import { useMapBoxContext } from "@/contexts/map-box-context";

type Props = {
  data: Data;
};

const List = ({ data }: Props) => {
  const { setCoordinates } = useMapBoxContext();
  return (
    <S.Container>
      <S.ContentTitle>
        <S.Title>Lista de propriedades</S.Title>
      </S.ContentTitle>
      <S.ContentList>
        {data.length ? (
          data?.map((value) => (
            <S.Content key={value.id}>
              <S.ListItemContainer
                onClick={() => {
                  setCoordinates(value?.map_data?.geometry?.coordinates);
                }}
              >
                <S.TextContainer>
                  <S.Item title={value.name}>{value?.name}</S.Item>
                  <S.SubItem>
                    {value.projects?.length || 0}{" "}
                    {getSubtitle(value.projects?.length || 0)}, 63 ha
                  </S.SubItem>
                </S.TextContainer>
                <S.Action>{">"}</S.Action>
              </S.ListItemContainer>
            </S.Content>
          ))
        ) : (
          <S.Content>
            <S.TextContainer>
              <S.NotFound>
                Nenhuma propriedade encontrada com esses termos.
              </S.NotFound>
            </S.TextContainer>
          </S.Content>
        )}
      </S.ContentList>
    </S.Container>
  );
};

export default List;
