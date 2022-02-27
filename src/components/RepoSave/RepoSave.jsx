import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SavedReposContext } from "../../pages/Home/Home";

import * as S from "./style";
import RepoItem from "../RepoItem";

function RepoSave() {
  const navigate = useNavigate();
  const { savedRepos, setSavedRepos } = useContext(SavedReposContext);

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
