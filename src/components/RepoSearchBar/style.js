import styled from "styled-components";

export const RepoSearchWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 10px;
`;

export const RepoSearchInput = styled.input`
  padding-left: 5px;
  width: 85%;
  height: 35px;
  border: 2px solid black;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: navy;
  }
`;

export const RepoSearchButton = styled.button`
  margin-left: 20px;
  transition: all 250ms ease-in;
  &:hover {
    transform: scale(0.9);
    opacity: 0.7;
  }
`;
