import styled from "styled-components";

const borderColor = "#EAECF0";
const hoverBorderColor = "#F9FAFB";
const selectedBorderColor = "#F2F4F7";

export const Container = styled.div`
  width: 260px;
`;

export const ContentDefault = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentTitle = styled(ContentDefault)`
  height: 64px;
  border-bottom: 0.5px solid;
  border-bottom-color: ${borderColor};
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const ContentList = styled.div`
  overflow-y: auto;
  min-height: 786px;
`;

export const Content = styled(ContentDefault)`
  cursor: pointer;
  height: 70px;
  padding: 0 0.5rem 0 0.5rem;
  :hover {
    background: ${hoverBorderColor};
  }
  :active {
    background: ${selectedBorderColor};
  }
`;

export const ListItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid;
  border-bottom-color: ${borderColor};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  width: 196px;
  gap: 2px;
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  color: #98a2b3;
`;

export const Text = styled.p`
  line-height: 18px;
  font-size: 12px;
  width: 176px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Item = styled(Text)`
  font-weight: 500;
  color: #475467;
`;

export const SubItem = styled(Text)`
  font-weight: 400;
  color: #667085;
  width: 176px;
`;
