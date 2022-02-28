import React, { useState } from "react";
import axios from "axios";

import * as S from "./style";
import RepoSearchBar from "../RepoSearchBar";
import RepoSearchResult from "../RepoSearchResult";
import Modal from "../Modal";

function RepoSearch() {
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
          loadingState={loadingState}
          setModalContent={setModalContent}
          setModalState={setModalState}
        />
      </S.RepoSearchContainer>
    </>
  );
}

export default RepoSearch;
