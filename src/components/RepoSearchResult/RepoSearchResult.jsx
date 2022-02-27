import React, { useState } from "react";
import Loader from "../Loading";

import * as S from "./style";
import RepoItem from "../RepoItem";

function RepoSearchResult({ repositoryList, handleSaveRepo, loadingState }) {
  const [endView, setEndView] = useState(10);

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
