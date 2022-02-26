import React from "react";

import * as S from "./style";

function RepoSearchBar({
  searchWordInputRef,
  enterKeyControl,
  handleSearchClick,
}) {
  return (
    <>
      <S.RepoSearchWrap>
        <S.RepoSearchInput
          type="text"
          name="repositorySearch"
          placeholder="search..."
          onKeyDown={enterKeyControl}
          ref={searchWordInputRef}
        />
        <S.RepoSearchButton onClick={handleSearchClick}>
          검색
        </S.RepoSearchButton>
      </S.RepoSearchWrap>
    </>
  );
}

export default RepoSearchBar;
