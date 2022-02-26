import styled from "styled-components";

export const RepoSave = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 200px;
  flex: 1;

  ul {
    list-style: none;
  }

  li + li {
    margin-top: 10px;
  }
`;

export const RepoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  min-width: 200px;

  button {
    background: #ff6f6f;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

export const NoRepository = styled.li`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
