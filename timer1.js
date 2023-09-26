// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

const args = process.argv.splice(2);

if (args.length === 0) {
  return;
}

let filtered = args.filter((x) => {
  if (Number(x) === NaN) {
    return false;
  }

  return Number(x) >= 0;
});

console.log("final array", filtered);

filtered.forEach(element => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, Number(element) * 1000);
});