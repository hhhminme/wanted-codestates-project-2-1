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
          getRepositoryData={getRepositoryData}
          endView={endView}
          setEndView={setEndView}
          setLoadingState={setLoadingState}
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
