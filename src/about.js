import paris from './paris.png';

function displayContent(element) {
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add('about');

  const header = document.createElement("h1");
  header.innerHTML = "About Remy";

  const img = document.createElement("img");
  img.src = paris;

  const description = document.createElement("p");
  description.innerHTML = `Remy is an exquisite bistro located in the vibrant city of Paris, where culinary dreams come to life. It's a place that celebrates the essence of French cuisine, offering a menu that blends timeless classics with innovative dishes. The restaurant prides itself on using the finest ingredients to create flavors that dance on the palate, leaving guests with a memorable dining experience.<br><br>The atmosphere at Remy is both welcoming and sophisticated, providing the perfect backdrop for any occasion. From the moment you step inside, you're enveloped in an ambiance that speaks of elegance and comfort. The staff is dedicated to ensuring that every visit is seamless, from the presentation of each dish to the attentive service.<br><br>Remy is more than just a dining destination; it's a journey through the rich tapestry of French gastronomy. It's a place where each meal is an opportunity to explore new tastes and savor the pleasure of good food in good company. Whether you're a local or a traveler, Remy promises an enchanting experience that captures the heart of Parisian dining.`;

  aboutDiv.append(header, img, description);
  element.append(aboutDiv);
}

export { displayContent } 