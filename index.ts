import { testFunctions } from "./grind"

let grind = document.getElementById("grind");
let days= testFunctions();

for (let i = 0 ; i < days.length ; i++) {
  let dayFrame = document.createElement("div");
  let dayHead = document.createElement("h2");
  let dayScore: number = 0;
  let dayTotal: number = 0;

  dayFrame.classList.add("frame", "dayFrame");
  dayFrame.appendChild(dayHead);

  let results = days[i];

  for(let res of results) {
    let resFrame = document.createElement("div");
    let resHead = document.createElement("h3");
    let fcName: string = res.shift();
    let score: number = 0;
    let total: number = res.length;

    resFrame.classList.add("frame", "resFrame");
    resFrame.appendChild(resHead);

    for(let test of res) {
      let isOk: boolean = checkArray(test[0], test[1]);
      let testLine = document.createElement("p");
      let params = test.slice(2);
      let anyParam: string = params.length ? "" : "no";
      let paramsString: string = params.map(el => JSON.stringify(el)).join(", ");
      let expectedString: string = JSON.stringify(test[0]);
      let resultString: string = JSON.stringify(test[1]);

      testLine.innerHTML = `called with <b>${anyParam}</b> params <b>${paramsString}</b> expected <b>${expectedString}</b> got <b>${resultString}</b>`;
      if (isOk) {
        score ++;
        testLine.classList.add("correct");
      } else {
        testLine.classList.add("error");
      }

      resFrame.appendChild(testLine);
    }

    resHead.innerHTML = `${fcName} (${score}/${total})`;
    dayFrame.appendChild(resFrame);

    dayScore += score;
    dayTotal += total;
  }

  dayHead.innerHTML = `Day ${i+1} (${dayScore}/${dayTotal})`;
  grind.appendChild(dayFrame);
}

function checkArray(a, b): boolean {
  if (!Array.isArray(a) && !Array.isArray(b)) {
    return a === b;
  } else if (!Array.isArray(a) || !Array.isArray(b)) {
    return false;
  }

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0 ; i < a.length ; i++) {
    if (!checkArray(a[i], b[i])) {
      return false;
    }
  }

  return true;
}
