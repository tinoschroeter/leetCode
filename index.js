const { gitToJs } = require("git-parse");

const commitsPromise = gitToJs("./");

commitsPromise.then((commits) => {
  //console.log(JSON.stringify(commits, null, 2))

  const questions = commits.filter(item => item.message.match("Time"))
  console.log(questions)
});
