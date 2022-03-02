import React from "react";

import * as S from "./style";

function RepoItem({ name, issueCount, index, isSaved, handleRepo }) {
  const [owner, repo] = name.split("/");

  return (
    <S.RepoSearchItem className={`repositoryItem-${index}`} key={index}>
      <S.RepoSearchItemList>
        <S.GithubIcon />
        {isSaved ? (
          <S.RepoSearchLink to={`/issues/${owner}/${repo}`}>
            {name}
          </S.RepoSearchLink>
        ) : (
          <S.RepoSearchItemName>{name}</S.RepoSearchItemName>
        )}
      </S.RepoSearchItemList>
      <S.RepoItemButton
        isSaved={isSaved}
        onClick={() => {
          handleRepo(name, issueCount);
        }}
      >
        {isSaved ? "Delete" : "Add"}
      </S.RepoItemButton>
    </S.RepoSearchItem>
  );
}

export default RepoItem;
