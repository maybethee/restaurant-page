import './style.css';
import item1Img from './menu-item-1.png';
import item2Img from './menu-item-2.png';
import item3Img from './menu-item-3.png';

function displayContent(element) {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add('menu');

  const header = document.createElement("h1");
  header.innerHTML = "Our Menu";

  const menuItem1 = document.createElement("div");
  const itemImg1 = document.createElement("img");
  itemImg1.src = item1Img;  
  const item1Name = document.createElement("h3");
  item1Name.innerHTML = "Moules marinières"
  const item1Desc = document.createElement("p");
  item1Desc.innerHTML = `White wine | Shallots, parsley, buttery garlic broth | French fries`;
  menuItem1.append(itemImg1, item1Name, item1Desc);

  const menuItem2 = document.createElement("div");
  const itemImg2 = document.createElement("img");
  itemImg2.src = item2Img; 
  const item2Name = document.createElement("h3");
  item2Name.innerHTML = "Fillet de loup ratatouille";
  const item2Desc = document.createElement("p");
  item2Desc.innerHTML = `Pan-seared black sea bass | Traditional ratatouille | Black olive tapenade`
  menuItem2.append(itemImg2, item2Name, item2Desc);

  const menuItem3 = document.createElement("div");
  const itemImg3 = document.createElement("img");
  itemImg3.src = item3Img; 
  
  const item3Name = document.createElement("h3");
  item3Name.innerHTML = "Magret de canard à l'orange";
  const item3Desc = document.createElement("p");
  item3Desc.innerHTML = `Duck breast sauté with orange sauce | Mixed vegetables`

  menuItem3.append(itemImg3, item3Name, item3Desc);

  menuDiv.append(header, menuItem1, menuItem2, menuItem3);

  element.append(menuDiv);
}

export { displayContent } 