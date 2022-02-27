import React from "react";

import * as S from "./style";
import RepoSearch from "../../components/RepoSearch";
import RepoSave from "../../components/RepoSave";

function Home() {
  return (
    <S.HomeWrap>
      <S.PageTitle>Github Issue Searcher</S.PageTitle>
      <S.ListContainer>
        <RepoSearch />
        <RepoSave />
      </S.ListContainer>
    </S.HomeWrap>
  );
}

export default Home;
