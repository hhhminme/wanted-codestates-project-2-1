import React, { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

import * as S from "./style";

function RepoSearchBar({
  getRepositoryData,
  endView,
  setEndView,
  setLoadingState,
}) {
  const searchWordInputRef = useRef("");

  console.log("search bar");

  useEffect(() => {
    searchWordInputRef.current.focus();
  }, []);

  const enterKeyControl = event => {
    const value = searchWordInputRef.current.value;
    if (value) {
      if (event.key === "Enter") {
        getRepositoryData(value);
      }
    }
  };

  const handleSearchClick = () => {
    const value = searchWordInputRef.current.value;
    if (value === "") {
      return 0;
    }
    if (endView !== 10) {
      setEndView(10);
    }
    setLoadingState(1);

    getRepositoryData(value);
  };
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

export default React.memo(RepoSearchBar);
