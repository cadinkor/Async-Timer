// process.stdout.write('\x07');

//loop through to produce the beep every x seconds
//This will make it beep at: 3, 5, 9, 10, 15 seconds (x1000)
//edge cases to consider: https://web.compass.lighthouselabs.ca/activities/864

const inputArgs = process.argv.slice(2) //process.argv allows to add values within the terminal
// console.log(inputArgs);
for (const millis of inputArgs) {
  setTimeout(() => {
    console.log(millis)
    process.stdout.write('\x07'); //sound portion
  }, millis * 1000); //doing this because the node's entry is single digit and we want it to render into seconds 
}

