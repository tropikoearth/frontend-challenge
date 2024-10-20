import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 64px;
  gap: 12px;
  border-bottom: 0.5px solid #eaecf0;
`;

export const IconSearchContainer = styled.div`
  position: absolute;
  margin-left: 25px;
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  margin: 24px 12px;
  padding-left: 3rem;
  padding-right: 3rem;
  font-size: 1rem;
  border: 1px solid #d0d5dd;
  border-radius: 0.5rem;
`;

export const IconCancelContainer = styled.a`
  cursor: pointer;
  margin-right: 25px;
  position: absolute;
  right: 0;
`;
