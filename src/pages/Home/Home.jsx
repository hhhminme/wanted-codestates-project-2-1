import React from "react";

import * as S from "./style";
import RepoSearch from "../../components/RepoSearch";
import RepoSave from "../../components/RepoSave";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Home() {
  const [savedRepos, setSavedRepos] = useLocalStorage("repo", []);

  return (
    <S.HomeWrap>
      <S.PageTitle>Github Issue Searcher</S.PageTitle>
      <S.ListContainer>
        <RepoSearch savedRepos={savedRepos} setSavedRepos={setSavedRepos} />
        <RepoSave savedRepos={savedRepos} setSavedRepos={setSavedRepos} />
      </S.ListContainer>
    </S.HomeWrap>
  );
}

export default Home;
