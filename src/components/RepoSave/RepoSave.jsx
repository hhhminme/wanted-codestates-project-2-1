import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";
import RepoItem from "../RepoItem";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function RepoSave() {
  const [savedRepos, setSavedRepos] = useLocalStorage(
    "repo",
    localStorage.getItem("repo"),
  );
  const navigate = useNavigate();

  const handleDeleteRepo = name => {
    const newRepo = savedRepos.filter(item => item !== name);
    setSavedRepos(newRepo);
  };

  return (
    <>
      <S.RepoSave>
        <ul>
          {savedRepos.length ? (
            savedRepos.map((value, index) => {
              const [owner, repo] = value.split("/");
              return (
                <RepoItem
                  key={index}
                  value={value}
                  index={index}
                  isSaved={true}
                  handleRepo={handleDeleteRepo}
                  onClick={() => {
                    console.log(1);
                    navigate(`/issues/${owner}-${repo}`);
                  }}
                />
              );
            })
          ) : (
            <S.NoRepository>No Repository.</S.NoRepository>
          )}
        </ul>
      </S.RepoSave>
    </>
  );
}

export default RepoSave;
