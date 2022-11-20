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

  console.log("build headmap...");
  console.log(`${questions.length} questions solved in total`);

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
  // We need a list of weekdays and in that list another list with objects
  // in the form of { x: Jan y: 4 }. The end result should look like this:
  // [[{ x: Jan y: 4 }, { x: Jan y: 4 }, ... ],[{ x: Jan y: 4 }, { x: Jan y: 4 } ...], ...]

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

  // Take our data and inject it into chart.html.
  const json = JSON.stringify(contribution);
  const updateFile = chart.replace(
    /^.*const json.*$/gm,
    `const json = '${json}'`
  );

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

  const today = new Date()
    .toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      year: "numeric",
      month: "short",
    })
    .replaceAll(" ", "/")
    .toLowerCase();
  const countToday = questions.filter((item) => item.toLowerCase() === today);

  console.log(`Solved Today: ${countToday.length}\n`);

  fs.readFile("./README.md", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const updateFile = data.replace(
      /^.*Questions solved.*$/gm,
      `> Questions solved ${questions.length}`
    );

    fs.writeFile("./README.md", updateFile, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  });

  console.log(
    `git add heatmap.png; git commit -m "update heatmap.png"; git push`
  );
});
