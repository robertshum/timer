// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", and
// beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Register a handler for Ctrl+C (SIGINT)
rl.on('SIGINT', () => {
  console.log("\nThanks for using me, ciao!");
  rl.close(); // Close the readline interface
});

const beep = () => {
  console.log("\nBeep!");
  process.stdout.write('\x07');
};

const askAQuestion = function() {
  rl.question("Enter 'b' or a number 1-9: ", (answer) => {
    console.log(`Your input: ${answer}`);

    let waitForCb = false;

    //b
    if (answer === "b") {
      console.log("Beep!");
      process.stdout.write('\x07');
      askAQuestion();
      waitForCb = true;
    }

    //number 1-9
    const num = Number(answer);
    if (num !== NaN && num <= 9 && num >= 1) {
      console.log(`setting timer for ${num} seconds...`);
      waitForCb = true;
      setTimeout(() => {
        beep();
        askAQuestion();
      }, num * 1000);
    }

    if (!waitForCb) {
      askAQuestion();
    }

  });
  return;
};

askAQuestion();