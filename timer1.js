// const inputArgs = process.argv.slice(2) 
// console.log(inputArgs);
// for (const millis of inputArgs) {
//   if ( millis < 0){
//     console.log("Please do not input negative numbers.")
//     return
//   } else if (millis === NaN){
//     console.log("Please input a number.")
//     return
//   }
//    setTimeout(() => {
//     process.stdout.write('\r' + "*ALARM*")
//     process.stdout.write('\x07');
//   }, millis * 1000); 
// }

const inputArgs = process.argv
  .slice(2)
  .filter(time => !isNaN(time))
  .filter(time => time >= 0);

inputArgs.forEach((time) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
});