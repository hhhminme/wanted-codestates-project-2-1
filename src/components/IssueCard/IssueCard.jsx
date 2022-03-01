import React from "react";
import * as S from "./style";

import { convertDataIntoAgo } from "../../utils/convertDataIntoAgo";

function IssueCard({ issue, repoInfo }) {
  const { html_url, title, user, created_at } = issue;

  return (
    <S.Card href={html_url} target="_blank">
      <S.Title>{title}</S.Title>
      <S.RepoName>{repoInfo}</S.RepoName>
      <S.Avatar src={user.avatar_url} />
      <S.Date>{convertDataIntoAgo(created_at)} ago</S.Date>
    </S.Card>
  );
}

export default IssueCard;
