import React from "react";
import { FaSearch } from "react-icons/fa";

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
          <FaSearch size={26} />
        </S.RepoSearchButton>
      </S.RepoSearchWrap>
    </>
  );
}

export default RepoSearchBar;
