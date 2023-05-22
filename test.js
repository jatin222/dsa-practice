const { getInput } = require("./input");

async function someFunction() {
  const name = await getInput("What is your name? ");
  console.log(`Welcome ${name}`);
}

someFunction().catch((error) => {
  console.error("An error occurred:", error);
});
