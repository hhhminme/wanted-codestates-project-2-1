import React, { createContext } from "react";

import * as S from "./style";
import RepoSearch from "../../components/RepoSearch";
import RepoSave from "../../components/RepoSave";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const SavedReposContext = createContext(null);

function Home() {
  const [savedRepos, setSavedRepos] = useLocalStorage(
    "repo",
    localStorage.getItem("repo"),
  );

  return (
    <S.HomeWrap>
      <S.PageTitle>Github Issue Searcher</S.PageTitle>
      <S.ListContainer>
        <SavedReposContext.Provider value={{ savedRepos, setSavedRepos }}>
          <RepoSearch />
          <RepoSave />
        </SavedReposContext.Provider>
      </S.ListContainer>
    </S.HomeWrap>
  );
}

export default Home;
