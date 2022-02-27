import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import * as S from "./style";
import RepoSearchBar from "../RepoSearchBar";
import RepoSearchResult from "../RepoSearchResult";
import Modal from "../Modal";
import { verifySaveRepo } from "../verifySaveRepo";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function RepoSearch() {
  const [savedRepos, setSavedRepos] = useLocalStorage(
    "repo",
    localStorage.getItem("repo"),
  );
  const [repositoryList, setRepositoryList] = useState([]);
  const [loadingState, setLoadingState] = useState(0);
  const [endView, setEndView] = useState(10);
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const searchWordInputRef = useRef("");

  useEffect(() => {
    searchWordInputRef.current.focus();
  }, []);

  const getRepositoryData = async () => {
    console.log(loadingState);
    try {
      const res = await axios.get(
        "https://api.github.com/search/repositories",
        {
          params: {
            q: searchWordInputRef.current.value,
          },
        },
      );
      setRepositoryList(res.data.items);
      setLoadingState(0);
    } catch (err) {
      console.error(Error);
    }
  };

  const enterKeyControl = event => {
    if (searchWordInputRef.current.value) {
      if (event.key === "Enter") {
        handleSearchClick();
      }
    }
  };

  const handleSearchClick = () => {
    if (searchWordInputRef.current.value === "") {
      return 0;
    }

    if (endView !== 10) {
      setEndView(10);
    }
    setLoadingState(1);

    getRepositoryData();
  };

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

  return (
    <>
      {modalState && (
        <Modal modalContent={modalContent} setModalState={setModalState} />
      )}
      <S.RepoSearchContainer>
        <RepoSearchBar
          searchWordInputRef={searchWordInputRef}
          enterKeyControl={enterKeyControl}
          handleSearchClick={handleSearchClick}
        />
        <RepoSearchResult
          repositoryList={repositoryList}
          handleSaveRepo={handleSaveRepo}
          loadingState={loadingState}
        />
      </S.RepoSearchContainer>
    </>
  );
}

export default RepoSearch;
