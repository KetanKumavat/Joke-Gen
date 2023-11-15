const jokeContainer = document.getElementById("joke");
const button = document.getElementById("btn");

async function getJoke() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const jokeObj = await jokeData.json();
  jokeContainer.innerHTML = jokeObj.joke;
  console.log(jokeData);
}

button.addEventListener("click", getJoke);