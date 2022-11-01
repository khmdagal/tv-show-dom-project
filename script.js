//You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function htmlElements() {
  //Create elements
  const span = document.createElement("span");
  const h2 = document.createElement("h2");
  const titleSection = document.createElement("section");
  const image = document.createElement("img");
  const p = document.createElement("p");
  const article = document.createElement("article");

  // setting attributes
  span.setAttribute("class", "title span_class");
  h2.setAttribute("class", "title h2_Id");
  titleSection.setAttribute("class", "title title_section_class");
  image.setAttribute("class", "img_class");
  p.setAttribute("class", "p_class");
  article.setAttribute("class", "article_class");

  //appending elements togather
  h2.appendChild(span);

  titleSection.appendChild(h2);
  article.appendChild(titleSection);
  article.appendChild(image);
  article.appendChild(p);

  document.querySelector("#root").appendChild(article);
}

// const allSeasons = getAllEpisodes().entries();
// for (let season of allSeasons) {
  
// }




function makePageForEpisodes() {
getAllEpisodes().forEach((episode) => {
  const span_for_season = document.createElement("span");
  const span_for_numbers = document.createElement("span");
  const h2 = document.createElement("h2");
  const titleSection = document.createElement("section");
  const image = document.createElement("img");
  const p = document.createElement("p");
  const article = document.createElement("article");

  // setting attributes
  span_for_season.setAttribute("class", "title span_for_season_class");
  h2.setAttribute("class", "title h2_Id");
  titleSection.setAttribute("class", "title title_section_class");
  image.setAttribute("class", "img_class");
  p.setAttribute("class", "p_class");
  article.setAttribute("class", "article_class");


 
 

  // Adding values
  h2.textContent = episode.name;
  span_for_season.textContent = episode.season.toString().padStart(3,"S0")
  span_for_numbers.textContent = episode.number.toString().padStart(3, "E0");
  image.src = episode.image.medium;
  p.innerHTML = episode.summary;


  
  //appending elements togather
  h2.appendChild(span_for_season);
  h2.appendChild(span_for_numbers);
  titleSection.appendChild(h2);
  article.appendChild(titleSection);
  article.appendChild(image);
  article.appendChild(p);

  document.querySelector("#root").appendChild(article);
});
  
}
makePageForEpisodes();