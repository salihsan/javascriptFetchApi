function getData() {
  return fetch("../data/tv-shows.json").then((resp) => resp.json());
}

getData().then((data) => {
  var cards = document.querySelector(".cards");

  data.forEach((tvShow) => {
    console.log(tvShow);
    cards.innerHTML += `
      <div class="sa mx-2 mt-5 " style="width: 25rem;">

        <div class="card-img-top d-flex justify-content-center"><img class="img-fluid " src="${tvShow.show.image.medium}"></div>
        <div class="card-body">
          <h3 class="card-title-name  bg-primary bg-gradient text-white px-3 py-2 rounded-3">${tvShow.show.name}</h3>
          <h3 class="card-title text-black text-black-50 px-3 py-2 rounded-3">IMDB : ${tvShow.show.externals.imdb}</h3>
          <p class="card-text ">${tvShow.show.summary}</p>
          <h5>Ulke:<span class="yil p-3 text-black-50 text-center mt-2">
          ${tvShow.show.network.country.name}</span>
          <h5>Film Dili:<span class="yil p-3 text-black-50 text-center mt-2">${tvShow.show.language}</span>
          <h5>Film Tipi:<span class="yil p-3 text-black-50 text-center mt-2">${tvShow.show.type}</span>
          </h5>
          <h5>Film Turu:<span class="yil p-3 text-black-50 text-center mt-2">${tvShow.show.genres}</span>
          </h5>
          <a href="${tvShow.show.url}" class="btn btn-primary px-5">Detail</a>
        </div>
    </div>
      `;
  });
});
