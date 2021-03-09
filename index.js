async function getAlbums() {
  let search = "skrillex";
  const response = await fetch(
    "https://spotify-fetch.herokuapp.com/https://api.deezer.com/search?q=" +
      search
  );
  const data = await response.json();
  console.log(data.data);
  displayResults(data.data);
  return data;
}
const displayResults = async (data) => {
  console.log(data);
  let mainContent = document.querySelector(".splide__list");
  data.forEach((data) => {
    mainContent.innerHTML += `<li class="splide__slide"><img
      class="carousel-img"
      src="${data.album.cover_xl}" height=250
      alt=""/><audio controls> <source src="${data.preview}"</audio></li> </li>`;
  });
  await new Splide("#splide", {
    perPage: 5,
    breakpoints: {
      1583: {
        perPage: 3,
      },
      1000: {
        perPage: 3,
      },
    },
  }).mount();
};

async function getAlbums2() {
  let search = "xxxtentacion";
  const response = await fetch(
    "https://spotify-fetch.herokuapp.com/https://api.deezer.com/search?q=" +
      search
  );
  const data = await response.json();
  console.log(data.data);
  displayResults2(data.data);
  return data;
}
const displayResults2 = async (data) => {
  console.log(data);
  let mainContent = document.querySelector("#splide-list-2");
  data.forEach((data) => {
    mainContent.innerHTML += `<li class="splide__slide"><img
      class="carousel-img"
      src="${data.album.cover_xl}" height=250
      alt=""/><audio controls> <source src="${data.preview}"</audio></li> </li>`;
  });
  await new Splide("#splide2", {
    perPage: 5,
    breakpoints: {
      1583: {
        perPage: 3,
      },
      1000: {
        perPage: 3,
      },
    },
  }).mount();
};

async function getAlbums3() {
  let search = "fabrizio de andrè";
  const response = await fetch(
    "https://spotify-fetch.herokuapp.com/https://api.deezer.com/search?q=" +
      search
  );
  const data = await response.json();
  console.log(data.data);
  displayResults3(data.data);
  return data;
}
const displayResults3 = async (data) => {
  console.log(data);
  let mainContent = document.querySelector("#splide-list-3");
  data.forEach((data) => {
    mainContent.innerHTML += `<li class="splide__slide"><img
      class="carousel-img"
      src="${data.album.cover_xl}" height=250
      alt=""/><audio controls> <source src="${data.preview}"</audio></li> </li>`;
  });
  await new Splide("#splide3", {
    perPage: 5,
    breakpoints: {
      1583: {
        perPage: 3,
      },
      1000: {
        perPage: 3,
      },
    },
  }).mount();
};

async function getAlbums4() {
  let search = "mood";
  const response = await fetch(
    "https://spotify-fetch.herokuapp.com/https://api.deezer.com/search?q=" +
      search
  );
  const data = await response.json();
  console.log(data.data);
  displayResults4(data.data);
  return data;
}
const displayResults4 = async (data) => {
  console.log(data);
  let mainContent = document.querySelector("#splide-list-4");
  data.forEach((data) => {
    mainContent.innerHTML += `<li class="splide__slide"><img
      class="carousel-img"
      src="${data.album.cover_xl}" height=250
      alt=""/><audio controls> <source src="${data.preview}"</audio></li> </li>`;
  });
  await new Splide("#splide4", {
    perPage: 5,
    breakpoints: {
      1583: {
        perPage: 3,
      },
      1000: {
        perPage: 3,
      },
    },
  }).mount();
};

async function getAlbums5() {
  let search = "eminem";
  const response = await fetch(
    "https://spotify-fetch.herokuapp.com/https://api.deezer.com/search?q=" +
      search
  );
  const data = await response.json();
  console.log(data.data);
  displayResults5(data.data);
  return data;
}
const displayResults5 = async (data) => {
  console.log(data);
  let mainContent = document.querySelector("#splide-list-5");
  data.forEach((data) => {
    mainContent.innerHTML += `<li class="splide__slide"><img
      class="carousel-img"
      src="${data.album.cover_xl}" height=250
      alt=""/><audio controls> <source src="${data.preview}"</audio></li> </li>`;
  });
  await new Splide("#splide5", {
    perPage: 5,
    breakpoints: {
      1583: {
        perPage: 3,
      },
      1000: {
        perPage: 3,
      },
    },
  }).mount();
};

async function getAlbums6() {
  let search = "linkin park";
  const response = await fetch(
    "https://spotify-fetch.herokuapp.com/https://api.deezer.com/search?q=" +
      search
  );
  const data = await response.json();
  console.log(data.data);
  displayResults6(data.data);
  return data;
}
const displayResults6 = async (data) => {
  console.log(data);
  let mainContent = document.querySelector("#splide-list-6");
  data.forEach((data) => {
    mainContent.innerHTML += `<li class="splide__slide"><img
      class="carousel-img"
      src="${data.album.cover_xl}" height=250
      alt=""/><audio controls> <source src="${data.preview}"</audio></li> </li>`;
  });
  await new Splide("#splide6", {
    perPage: 5,
    breakpoints: {
      1583: {
        perPage: 3,
      },
      1000: {
        perPage: 3,
      },
    },
  }).mount();
};

const countAlbums = () => {
  const array = document.querySelectorAll(".splide__slide");
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    const newCount = count + i;
    let counterr = document.querySelector("#counter");
    counterr.innerText = newCount;
  }
};
// splide
const loadMore = () => {
  button = document.querySelector("#showmore");
  button.style.display = "none";
  getAlbums4(), getAlbums5(), getAlbums6();
};

getAlbums(), getAlbums2(), getAlbums3();
