const { gitToJs } = require("git-parse");

const commitsPromise = gitToJs("./");

commitsPromise.then((commits) => {
  //console.log(JSON.stringify(commits, null, 2))

  const questions = commits
    .filter((item) => item.message.match("Time"))
    .map((item) => item.date.split(" ").slice(1, 4).join("/"));

  console.log(questions);
});
