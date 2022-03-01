import React, { useState, useContext } from "react";
import Loader from "../Loading";
import { SavedReposContext } from "../../pages/Home/Home";

import * as S from "./style";
import RepoItem from "../RepoItem";
import { verifySaveRepo } from "../verifySaveRepo";

function RepoSearchResult({
  repositoryList,
  loadingState,
  setModalContent,
  setModalState,
}) {
  const [endView, setEndView] = useState(10);
  const { savedRepos, setSavedRepos } = useContext(SavedReposContext);

  const handleSaveRepo = repoName => {
    const isValid = verifySaveRepo(savedRepos, repoName);
    if (isValid === "overflow") {
      setModalContent("4개 이상 저장하실 수 없습니다. 😅");

      setModalState(true);
    } else if (isValid === "already") {
      setModalContent("이미 저장되었습니다. 😅");
      setModalState(true);
    } else {
      setSavedRepos([...savedRepos, repoName]);
    }
  };

  const handleMoreView = e => {
    let showMoreValue = e.target.innerText;
    if (showMoreValue === "더보기") {
      e.target.innerText = "접기";
      setEndView(30);
    } else {
      e.target.innerText = "더보기";
      setEndView(10);
    }
  };

  return (
    <S.RepoSearchResult>
      {loadingState ? (
        <Loader />
      ) : (
        <>
          {repositoryList === [] && (
            <div>
              <S.CountImpact>{repositoryList.length}</S.CountImpact> 개의 결과
            </div>
          )}
          {repositoryList.slice(0, endView).map((value, index) => (
            <RepoItem
              key={index}
              value={value.full_name}
              index={index}
              isSaved={false}
              handleRepo={handleSaveRepo}
            />
          ))}
          {repositoryList.length > 10 && (
            <S.MoreButton onClick={e => handleMoreView(e)}>더보기</S.MoreButton>
          )}
        </>
      )}
    </S.RepoSearchResult>
  );
}

export default RepoSearchResult;
