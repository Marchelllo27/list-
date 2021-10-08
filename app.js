const addMovieBtn = document.getElementById("add-movie__button");
const searchBtn = document.getElementById("search-movie__button");
const movies = [];

const renderMovie = (text = '', filtredWord) => {
  const movieList = document.getElementById("movie-list");
  if (movies.length !== 0) {
    movieList.classList.add("visible");
  } else {
    movieList.classList.remove("visible");
  }

  movieList.innerHTML = "";

  const sortedMovieList = movies.filter(movie => movie.info.title.includes(filtredWord));
  sortedMovieList.forEach(movie => {
    const newMovie = document.createElement("li");
    newMovie.textContent = `${movie.info.title} ${text}`;
    movieList.appendChild(newMovie);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("movie-title").value;
  const extraInfoInput = document.getElementById("extra-info__name").value;
  const additionExtrInfoInput =
    document.getElementById("extra-info__value").value;

  if (
    title.trim() === "" ||
    extraInfoInput.trim() === "" ||
    additionExtrInfoInput.trim() === ""
  ) {
    return alert("There are empty fields");
  }
  const movie = {
    info: {
      title,
      [extraInfoInput]: additionExtrInfoInput,
    },
    id: Math.random(),
  };

  let extrInfInpt;
  for (const key in movie.info) {
    if (key !== title) {
      extrInfInpt = key;
    }
  }

  const text = `${extrInfInpt}: ${movie.info[extraInfoInput]}`;
  movies.push(movie);
  renderMovie(text, "");
  console.log(movie);
};

const searchMoviHandler = () => {
  const searchInput = document.getElementById("search-input").value;
  renderMovie("", searchInput);
};

addMovieBtn.addEventListener("click", addMovieHandler);

searchBtn.addEventListener("click", searchMoviHandler);
