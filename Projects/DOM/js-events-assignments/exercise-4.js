const inputField = document.querySelector("#input-field");
const characterCount = document.querySelector("#counter");

inputField.addEventListener("input", () => {
  const characterLength = inputField.value.length;
  characterCount.innerHTML = characterLength;
});
