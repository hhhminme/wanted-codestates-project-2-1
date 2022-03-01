import React, { useState } from "react";

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

  return (
    <>
      {modalState && (
        <Modal modalContent={modalContent} setModalState={setModalState} />
      )}
      <S.RepoSearchContainer>
        <RepoSearchBar
          endView={endView}
          setEndView={setEndView}
          setLoadingState={setLoadingState}
          setRepositoryList={setRepositoryList}
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
