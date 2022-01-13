const { gitToJs } = require("git-parse");
const puppeteer = require("puppeteer");
const fs = require("fs");

const commitsPromise = gitToJs("./");
const chart = fs.readFileSync("./chart.html", "utf8");

commitsPromise.then((commits) => {
  //console.log(JSON.stringify(commits, null, 2))

  const questions = commits
    .filter((item) => item.message.match("Time"))
    .map((item) => item.date.split(" ").slice(1, 4).join("/"));

  console.log(questions);

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(chart);
    console.log(await page.title());

    await page.waitForSelector('#chart');
    const element = await page.$('#chart'); 
    await element.screenshot({ path: "heatmap.png" });
    await browser.close();
  })();
});
