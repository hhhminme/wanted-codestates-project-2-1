import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

export const RepoSearchItem = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

export const RepoSearchItemList = styled.li`
  list-style: none;
  display: flex;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
`;

export const GithubIcon = styled(AiFillGithub)`
  font-size: 24px;
  margin-right: 10px;
`;

export const RepoSearchItemName = styled.p`
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-top: 5px;
  width: 90%;
`;

export const RepoSearchLink = styled(Link)`
  display: block;
  padding-top: 5px;
  margin-right: 5px;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    opacity: 0.5;
  }
`;

export const RepoItemButton = styled.button`
  padding: 5px 10px;
  background-color: #4ceb7c;
  font-weight: bold;
  color: white;
  border-radius: 5px;

  ${({ isSaved }) => {
    return isSaved ? "background:#eb2d4c" : "background:#4ceb7c";
  }};

  &:hover {
    opacity: 0.7;
  }
`;
