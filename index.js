const { gitToJs } = require("git-parse");
const puppeteer = require("puppeteer");
const fs = require("fs");

const commitsPromise = gitToJs("./");
const chart = fs.readFileSync("./chart.html", "utf8");

commitsPromise.then((commits) => {
  //console.log(JSON.stringify(commits, null, 2));

  const questions = commits
    .filter((item) => item.message.match("Time"))
    .map((item) => item.date.split(" ").slice(0, 4).join("/"));

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const contribution = [];
  for (let day of days) {
    const data = [];
    for (let month of months) {
      const count =
        questions.filter((item) => item.match(day) && item.match(month))
          .length + 1;
      data.push({ x: month, y: count });
    }
    contribution.push(data);
  }

  const json = JSON.stringify(contribution);
  updateFile = chart.replace(/^.*const json.*$/gm, `const json = '${json}'`);

  const getImage = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(updateFile);
    console.log(await page.title());

    await page.waitForSelector("#chart");
    const element = await page.$("#chart");
    await element.screenshot({ path: "heatmap.png" });
    await browser.close();
  };
  getImage();
});
