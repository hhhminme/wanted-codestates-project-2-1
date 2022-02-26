import styled from "styled-components";

export const RepoSearchContainer = styled.div`
  flex: 2;

  @media screen and (max-width: 716px) {
    width: 100%;
    height: fit-content;
    border-bottom: 1px solid black;
  }
`;

export const CountImpact = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: orange;
`;

export const RepoSearchResult = styled.div`
  height: calc(100vh - 120px);
  padding: 10px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 716px) {
    height: calc(100vh - 300px);
  }
`;

export const MoreButton = styled.button`
  width: 100%;
  height: 30px;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
`;
