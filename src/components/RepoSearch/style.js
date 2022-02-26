import styled from "styled-components";

export const RepoSearchContainer = styled.div`
  flex: 2;
  height: 70vh;
`;

export const CountImpact = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: orange;
`;

export const RepoSearchResult = styled.div`
  height: calc(100vh - 140px);
  padding: 5px;
  overflow: auto;
  height: 100%;
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
  padding: 5px 0;
  font-size: 16px;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
`;
