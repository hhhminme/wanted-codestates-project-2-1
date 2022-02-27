import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { verifySaveRepo } from "./verifySaveRepo";
import GitLogo from "../img/gitIcon.png";
import Loader from "./Loading";
const RepoSearchContainer = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 20px 30px;

  @media screen and (max-width: 716px) {
    width: 100%;
    height: fit-content;
    border-bottom: 1px solid black;
  }
`;
const RepoSearchWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const RepoSearchInput = styled.input`
  padding-left: 5px;
  width: 85%;
`;
const RepoSearchButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 7px;
`;
const CountImpact = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: orange;
`;
const RepoSearchResult = styled.div`
  height: calc(100vh - 120px);
  padding-top: 5px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 716px) {
    height: calc(100vh - 300px);
  }
`;
const GitIcon = styled.img`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const RepoSearchItem = styled.div`
  border: 1px solid;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px 10px;
`;

const MoreButton = styled.button`
  width: 100%;
  height: 30px;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
`;
const RepoSearchItemList = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`;


const RepoSearchItemName = styled.p`
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 90%;
`;

function RepoSearch({ savedRepos, setSavedRepos }) {
  // state
  const [userInput, setUserInput] = useState("");
  const [repositoryList, setRepositoryList] = useState([]);
  const [loadingState, setLoadingState] = useState(0);
  const [endView, setEndView] = useState(10);

  const getRepositoryData = () => {
    if (userInput === "") {
      return 0;
    }

    if (endView !== 10) {
      setEndView(10);
    }
    setLoadingState(1);
    axios
      .get("http://api.github.com/search/repositories", {
        params: {
          q: userInput,
        },
      })
      .then(response => {
        setRepositoryList(response.data.items);
        setLoadingState(0);
      })
      .catch(Error => {
        console.log(Error);
      });
  };

  const handleMoreView = e => {
    let showMoreValue = e.target.innerText;
    if (showMoreValue === "더보기") {
      e.target.innerText = "접기";
      setEndView(30);
    } else {
      e.target.innerText = "더보기";
      setEndView(10);
    }
  };

  const handleSaveRepo = repoName => {
    const isValid = verifySaveRepo(savedRepos, repoName);
    isValid && setSavedRepos([...savedRepos, repoName]);
  };

  useEffect(() => {
    console.log("화면 뜸!");
    console.log(savedRepos);
  }, [savedRepos]);

  return (
    <>
      <RepoSearchContainer>
        <h1>Github issue searcher</h1>
        <RepoSearchWrap>
          <RepoSearchInput
            type="text"
            name="repositorySearch"
            placeholder="search..."
            onChange={e => {
              setUserInput(e.target.value);
            }}
          />
          <RepoSearchButton onClick={getRepositoryData}>검색</RepoSearchButton>
        </RepoSearchWrap>
        <RepoSearchResult>
          {loadingState ? (
            <Loader />
          ) : (
            <>
              {repositoryList === [] ? (
                <div>
                  <CountImpact>{repositoryList.length}</CountImpact> 개의 검색
                  결과
                </div>
              ) : null}
              {repositoryList.slice(0, endView).map((value, index) => (
                <RepoSearchItem
                  className={`repositoryItem-${index}`}
                  key={index}
                >
                  <RepoSearchItemList>
                    <GitIcon src={GitLogo} />

                    <p>{value.full_name}</p>

                  </RepoSearchItemList>
                  {/* TODO : 여기에 추가해주세요! */}
                  <button onClick={() => handleSaveRepo(value.full_name)}>
                    추가
                  </button>
                </RepoSearchItem>
              ))}
              {repositoryList.length > 10 ? (
                <MoreButton onClick={e => handleMoreView(e)}>더보기</MoreButton>
              ) : null}
            </>
          )}
        </RepoSearchResult>
      </RepoSearchContainer>
    </>
  );
}

export default RepoSearch;
