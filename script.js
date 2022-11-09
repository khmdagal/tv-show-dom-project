/* TODO LIST
1 select all episoded
2 if select and searche, should 
3 counter
4 rights@ for ....
*/

const url = "https://api.tvmaze.com/shows/82/episodes";

// let myData;

// 9 scrip

// window.onload = async function myDataEpisodes() {
//   const response = await fetch(url);
//   const data = await response.json();
//   testing(data);
// }

window.onload = () => {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      testing(data);
    });
}



function testing(lookIfWorks) {
  const container = document.querySelector("#root");
  const allEpisodes = lookIfWorks;
  const countEpisodes = document.querySelector("#count_Episodes");
  const totalEpisodes = document.querySelector("#total_Episodes");

  totalEpisodes.innerText = ` / ${allEpisodes.length} Episodes`;

  // think this one
  const selectAllEpisodesOption = document.querySelector("#select_all");

  const searchInput = document.querySelector("#input_search");
  const select = document.querySelector("#select_id");

  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    const filteredEpisodes = allEpisodes.filter(
      (episode) =>
        episode.name.toLowerCase().includes(value) ||
        episode.summary.toLowerCase().includes(value)
    );

    container.innerHTML = "";
    countEpisodes.innerText = `${filteredEpisodes.length} `;
    showEpisodes(filteredEpisodes);
  });

  select.addEventListener("change", () => {
    const value = select.value.slice(9);

    const filteredEpisodes = allEpisodes.filter(
      (episode) => episode.name === value
    );

    container.innerHTML = "";
    countEpisodes.innerText = `${filteredEpisodes.length} `;
    showEpisodes(filteredEpisodes);
  });

  function showEpisodes(episodes) {
    episodes.forEach((episode) => {
      const add = createElements(episode);
      container.appendChild(add);
    });
  }

  showEpisodes(allEpisodes);

  function createElements(episode) {
    const span_for_season = document.createElement("span");
    const h2 = document.createElement("h2");
    const titleSection = document.createElement("section");
    const image = document.createElement("img");
    const p = document.createElement("p");
    const article = document.createElement("article");
    const option = document.createElement("option");

    // setting attributes
    span_for_season.setAttribute("class", "spans span_for_season_class");

    h2.setAttribute("class", "title h2_Id");
    titleSection.setAttribute("class", "title title_section_class");
    image.setAttribute("class", "img_class");
    p.setAttribute("class", "p_class");
    article.setAttribute("class", "article_class");

    // Adding values

    const dropDownOptions = `S${
      episode.season < 10 ? "0" + episode.season : episode.season
    }E${episode.number < 10 ? "0" + episode.number : episode.number} - ${
      episode.name
    }`;

    const titles = `${episode.name} - S${
      episode.season < 10 ? "0" + episode.season : episode.season
    }E${episode.number < 10 ? "0" + episode.number : episode.number}`;

    option.value = span_for_season.textContent = dropDownOptions;
    option.innerText = span_for_season.textContent = dropDownOptions;

    h2.textContent = titles;
    //span_for_season.textContent = shortCuForSeaAndEpis;

    image.src = episode.image.medium;
    p.innerHTML = episode.summary;

    //appending elements togather
    titleSection.appendChild(h2);
    article.appendChild(titleSection);
    article.appendChild(image);
    article.appendChild(p);
    select.appendChild(option);

    return article;
  }

}


