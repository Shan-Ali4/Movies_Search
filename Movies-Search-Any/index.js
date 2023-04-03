const apiKey = 'c91738bd';
const searchBtn = document.getElementById('search-btn');
const searchInp = document.getElementById('search-inp');
const movieContainer = document.getElementById('movie_container');

searchBtn.addEventListener('click', () => {
  const searchQuery = searchInp.value;

  fetch(`https://www.omdbapi.com/?apiKey=c91738bd&s=${searchQuery}`)
    .then(response => response.json())
    .then(data => {
      if (data.Error) {
        movieContainer.innerHTML = data.Error;
        return;
      }
      movieContainer.innerHTML = '';
      data.Search.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie_card');

        const poster = document.createElement('img');
        const title = document.createElement('h2');

        poster.classList.add('poster');
        title.classList.add('title');
        title.innerText = movie.Title;
        poster.src = movie.Poster;

        movieCard.appendChild(poster);
        movieCard.appendChild(title);
        movieContainer.appendChild(movieCard);
      });
    });
});