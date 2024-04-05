// Array of names
const names = [
 "Killerass",
 "Smartass",
 "Madass",
 "Badass",
 "Bhabani",
 "Chikubhai07",
 "Knightass"
];

// Function to generate random names
function generateRandomNames() {
 let name1, name2;
 do {
  // Get random indexes
  const index1 = Math.floor(Math.random() * names.length);
  let index2;
  do {
   index2 = Math.floor(Math.random() * names.length);
  } while (index2 === index1); // Ensure index2 is different from index1

  // Get names using random indexes
  name1 = names[index1];
  name2 = names[index2];
 } while (
  name1 === document.getElementById("playerOneInput").value &&
  name2 === document.getElementById("playerTwoInput").value
 ); // Ensure both names are changed

 // Set names in input fields
 document.getElementById("playerOneInput").value = name1;
 document.getElementById("playerTwoInput").value = name2;
}

// Event listener for the Generate button
document
 .getElementById("generateBtn")
 .addEventListener("click", generateRandomNames);
