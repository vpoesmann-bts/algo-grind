import { testFunctions } from "./grind"

let results = testFunctions();

for(let res of results) {
  let fcName: string = res.shift();
  for(let test of res) {
    let isOk: boolean = test[0] === test[1];
    console.log(test[0], test[1], isOk);
  }
}

