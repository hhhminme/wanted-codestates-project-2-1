import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import * as S from "./style";
import ReactPaginate from "react-paginate";
import IssueCard from "../../components/IssueCard";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Issues() {
  const { userInfo, repoInfo } = useParams();
  const [savedRepos, setSavedRepos] = useLocalStorage(
    "repo",
    localStorage.getItem("repo"),
  );

  const [paginationCount, setpaginationCount] = useState(0);
  const [issues, setIssues] = useState([]);

  const getIssuesCount = () => {
    const targetRepo = savedRepos.find(
      item => item.repoName === `${userInfo}/${repoInfo}`,
    );
    setpaginationCount(Math.ceil(targetRepo.issueCount / 30));
  };

  const fetchIssues = async currentPage => {
    const res = await axios.get(
      `https://api.github.com/repos/${userInfo}/${repoInfo}/issues?page=${currentPage}`,
    );
    return res.data;
  };

  const handlePageClick = async data => {
    let currentPage = data.selected + 1;
    const issuesFromServer = await fetchIssues(currentPage);

    setIssues(issuesFromServer);
  };

  useEffect(() => {
    const initFetch = async () => {
      const issuesFromServer = await fetchIssues(1);
      setIssues(issuesFromServer);
    };
    getIssuesCount();
    initFetch();
  }, []);

  return (
    <>
      <S.HomeButton to="/">HOME</S.HomeButton>
      <S.Container>
        <S.PageTitle>
          {userInfo && repoInfo && `${userInfo}/${repoInfo}`} ISSUES
        </S.PageTitle>
        <S.CardContainer>
          {issues.length > 0 ? (
            issues.map((issue, idx) => (
              <IssueCard key={idx + 1} issue={issue} repoInfo={repoInfo} />
            ))
          ) : (
            <S.Message>There is no issues.</S.Message>
          )}
        </S.CardContainer>

        {issues.length > 0 && (
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={paginationCount}
            pageRangeDisplayed={6}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        )}
      </S.Container>
    </>
  );
}

export default Issues;
