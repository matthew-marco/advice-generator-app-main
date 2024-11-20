const dice = document.querySelector(".dice");
const advice = document.querySelector(".advice");
const adviceId = document.querySelector("h1 span");
function loadAdive() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json(); // Parse the JSON response
    })
    .then((data) => {
      // Handle the data
      adviceId.textContent = `#${data.slip.id}`;
      advice.textContent = `“${data.slip.advice}”`;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
loadAdive();
dice.addEventListener("click", () => {
  loadAdive();
});
