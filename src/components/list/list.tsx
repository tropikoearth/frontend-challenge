import { Data } from "@/features/properties/types";
import * as S from "./styles";
import { getSubtitle } from ".";

type Props = {
  data: Data;
};

const List = ({ data }: Props) => {
  return (
    <S.Container>
      <S.ContentTitle>
        <S.Title>Lista de propriedades</S.Title>
      </S.ContentTitle>
      <S.ContentList>
        {data.items.length
          ? data.items?.map((value) => (
              <S.Content key={value.id}>
                <S.ListItemContainer>
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
          : null}
      </S.ContentList>
    </S.Container>
  );
};

export default List;
