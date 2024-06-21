import ratatouille from './ratatouille.png';

function displayContent() {
  const contentElement = document.querySelector("#content");


  const homeDiv = document.createElement("div");

  const header = document.createElement("h1");
  header.innerHTML = `Remy's Delicious Restaurant`;

  const description = document.createElement("p");
  description.innerHTML = `The best restaurant you'll've ever eaten at. You won't even think about the fact that all the food was made by rats!`;

  const img = document.createElement("img");
  img.src = ratatouille;

  homeDiv.append(header, description, img);

  contentElement.append(homeDiv);
}

export { displayContent } 