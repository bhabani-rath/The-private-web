// Array of names
const names = [
  "Killerass",
  "Smartass",
  "Madass",
  "Badass",
  "Anupbhai07",
  "Chikubhai07",
  "Knightass",
  "PXD||Nite",
];

// Function to generate random names for a specific div
function generateRandomNames(inputIds) {
  const generatedNames = new Set();

  inputIds.forEach((id) => {
    let name;
    do {
      const index = Math.floor(Math.random() * names.length);
      name = names[index];
    } while (generatedNames.has(name));
    generatedNames.add(name);
    document.getElementById(id).value = name;
  });
}

// Event listeners for each Generate button
document.getElementById("generateBtn1").addEventListener("click", () => {
  generateRandomNames([
    "playerOneInput1",
    "playerOneInput2",
    "playerTwoInput1",
    "playerTwoInput2",
  ]);
});

document.getElementById("generateBtn2").addEventListener("click", () => {
  generateRandomNames(["playerOneInput3", "playerTwoInput3"]);
});
