/* TODO LIST
1 select all episoded
2 if select and searche, should 
3 counter
4 rights@ for ....

// let myData;

// 9 scrip

// window.onload = async function myDataEpisodes() {
//   const response = await fetch(url);
//   const data = await response.json();
//   testing(data);
// }
*/

//const url = "https://api.tvmaze.com/shows/82/episodes";

window.onload = () => {
  const allShows = getAllShows();
  populateShowList(allShows);
};

function getEpisodes(show_id) {
  fetch(`https://api.tvmaze.com/shows/${show_id}/episodes`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      testing(data);
    });
}


// Global variables
const container = document.querySelector("#root");
const selectShow = document.querySelector("#shows_list_id");
const select = document.querySelector("#select_id");
const selectAllEpisodesOption = document.querySelector("#select_all");
const countEpisodes = document.querySelector("#count_Episodes");
const totalEpisodes = document.querySelector("#total_Episodes");
const searchInput = document.querySelector("#input_search");

function populateShowList(allShows) {
  for (let show of allShows) {
    const showsOption = document.createElement("option");
    showsOption.setAttribute("value", show.id);
    showsOption.innerText = show.name;
    selectShow.appendChild(showsOption);
  }
}

selectShow.addEventListener("change", (e) => {
  value = e.target.value;
  getEpisodes(value);
});

function testing(getData) {
  const allEpisodes = getData;
  totalEpisodes.innerText = ` - out of - ${allEpisodes.length} Episodes `;

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
    //create article or episode elements
    const span_for_season = document.createElement("span");
    const h2 = document.createElement("h2");
    const titleSection = document.createElement("section");
    const image = document.createElement("img");
    const p = document.createElement("p");
    const article = document.createElement("article");
    const episodesDropDownList = document.createElement("option");

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

    // Episodes dropdown values and inner text
    episodesDropDownList.value = dropDownOptions;
    episodesDropDownList.innerText = dropDownOptions;

    // Title, Image and summary values for each episode
    h2.textContent = titles;
    image.src = episode.image.medium;
    p.innerHTML = episode.summary;

    //appending elements togather
    titleSection.appendChild(h2);
    article.appendChild(titleSection);
    article.appendChild(image);
    article.appendChild(p);
    select.appendChild(episodesDropDownList);
    return article;
  }
}
