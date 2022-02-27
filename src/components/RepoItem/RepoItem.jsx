import React from "react";

import * as S from "./style";

function RepoItem({ value, index, isSaved, handleRepo }) {
  const [owner, repo] = value.split("/");

  return (
    <S.RepoSearchItem className={`repositoryItem-${index}`} key={index}>
      <S.RepoSearchItemList>
        <S.GithubIcon />
        {isSaved ? (
          <S.RepoSearchLink to={`/issues/${owner}-${repo}`}>
            {value}
          </S.RepoSearchLink>
        ) : (
          <S.RepoSearchItemName>{value}</S.RepoSearchItemName>
        )}
      </S.RepoSearchItemList>
      <S.RepoItemButton
        isSaved={isSaved}
        onClick={() => {
          handleRepo(value);
        }}
      >
        {isSaved ? "삭제" : "추가"}
      </S.RepoItemButton>
    </S.RepoSearchItem>
  );
}

export default RepoItem;
