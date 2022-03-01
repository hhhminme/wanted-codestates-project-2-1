import React, { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

import * as S from "./style";

function RepoSearchBar({
  endView,
  setEndView,
  setLoadingState,
  setRepositoryList,
}) {
  const searchWordInputRef = useRef("");

  const getRepositoryData = async inputValue => {
    try {
      const res = await axios.get(
        "https://api.github.com/search/repositories",
        {
          params: {
            q: inputValue,
          },
        },
      );
      setRepositoryList(res.data.items);
      setLoadingState(0);
    } catch (err) {
      console.error(Error);
    }
  };

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
