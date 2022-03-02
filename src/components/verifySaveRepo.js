const verifyRepoCount = savedRepos => {
  if (savedRepos?.length >= 4) {
    return "overflow";
  }
  return true;
};

const verifyDuplicateRepo = (savedRepos, willAddRepo, modal) => {
  const existRepo = savedRepos.find(repo => repo.repoName === willAddRepo);
  if (existRepo) {
    return "already";
  }
  return true;
};

export const verifySaveRepo = (savedRepos, willAddRepo) => {
  const isNotOverflowStore = verifyRepoCount(savedRepos);
  if (isNotOverflowStore === "overflow") return "overflow";

  return verifyDuplicateRepo(savedRepos, willAddRepo);
};
