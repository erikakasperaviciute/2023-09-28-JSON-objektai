let mainContainer = document.querySelector(".container");
let pageTitle = document.createElement("h1");
pageTitle.textContent = "Movies";
mainContainer.append(pageTitle);

// Dabar noresiu kad papildomai padarytum kitus dalykus. Noresiu kad kiekvienam filmui sukurtum po atskira json faila: movie-1.json, movie-2.json ir t.t. Siu failu viduje bus vieno filmo informacija (objektas).
// Tada noriu kad movies.json faile turetum ne filmu masyva, o masyva su filmu id: [1, 2, 3, .....] ir daugiau nieko.
// Mums reikes paleisti fetch'a i movies.json, gauti informacija (filmu id masyva) ir gavus si masyva, issiusti uzklausas i kitus filmu json failus pagal id bei gavus atsakymus - juos atvaizduoti i ekrana.

function getMovies() {
  fetch("movies.json")
    .then((response) => response.json())
    .then((moviesId) => {
      const allPromises = moviesId.map((movieId) =>
        fetch(`movie-${movieId}.json`).then((response) => response.json())
      );
      return Promise.all(allPromises);
    })
    .then((movieInfo) => {
      movieInfo.forEach((movie) => {
        let title = movie.title;
        let rating = movie.rating;
        let amountOfRatings = movie.amountOfRatings;
        let yearOfRelease = movie.yearOfRelease;
        let description = movie.description;
        let genreArr = movie.genre;
        let director = movie.director;
        let starsArr = movie.stars;

        let movieCard = document.createElement("div");
        mainContainer.append(movieCard);
        let movieTitle = document.createElement("h2");
        movieTitle.textContent = title;
        let movieRating = document.createElement("h4");
        movieRating.textContent = `Rating: ${rating}/10. Rated ${amountOfRatings} times.`;
        let movieYear = document.createElement("h4");
        movieYear.textContent = `Released in ${yearOfRelease}`;
        let movieDescrpition = document.createElement("p");
        movieDescrpition.textContent = description;
        let genreList = document.createElement("ul");
        genreArr.forEach((genre) => {
          let genreItem = document.createElement("li");
          genreItem.textContent = genre;
          genreList.append(genreItem);
        });
        let movieDirector = document.createElement("h4");
        movieDirector.textContent = `Director: ${director}`;
        let starsTitle = document.createElement("h4");
        starsTitle.textContent = "Main stars:";
        let starsList = document.createElement("ul");
        starsArr.forEach((star) => {
          let starItem = document.createElement("li");
          starItem.textContent = star;
          starsList.append(starItem);
        });
        movieCard.append(
          movieTitle,
          movieRating,
          movieYear,
          movieDescrpition,
          genreList,
          movieDirector,
          starsTitle,
          starsList
        );
      });
    });
}

getMovies();

// function getMovies() {
//   fetch("movies.json")
//     .then((response) => response.json())
//     .then((movies) => {
//       //   console.log(movies);
//       movies.forEach((movie) => {
//         console.log(movie);
//         let title = movie.title;
//         let rating = movie.rating;
//         let amountOfRatings = movie.amountOfRatings;
//         let yearOfRelease = movie.yearOfRelease;
//         let description = movie.description;
//         let genreArr = movie.genre;
//         let director = movie.director;
//         let starsArr = movie.stars;

//         let movieCard = document.createElement("div");
//         mainContainer.append(movieCard);

//         let movieTitle = document.createElement("h2");
//         movieTitle.textContent = title;

//         let movieRating = document.createElement("h4");
//         movieRating.textContent = `Rating: ${rating}/10. Rated ${amountOfRatings} times.`;

//         let movieYear = document.createElement("h4");
//         movieYear.textContent = `Released in ${yearOfRelease}`;

//         let movieDescrpition = document.createElement("p");
//         movieDescrpition.textContent = description;

//         let genreList = document.createElement("ul");
//         genreArr.forEach((genre) => {
//           let genreItem = document.createElement("li");
//           genreItem.textContent = genre;
//           genreList.append(genreItem);
//         });

//         let movieDirector = document.createElement("h4");
//         movieDirector.textContent = `Director: ${director}`;

//         let starsTitle = document.createElement("h4");
//         starsTitle.textContent = "Main stars:";
//         let starsList = document.createElement("ul");

//         starsArr.forEach((star) => {
//           let starItem = document.createElement("li");
//           starItem.textContent = star;
//           starsList.append(starItem);
//         });

//         movieCard.append(
//           movieTitle,
//           movieRating,
//           movieYear,
//           movieDescrpition,
//           genreList,
//           movieDirector,
//           starsTitle,
//           starsList
//         );
//       });
//     });
// }

// getMovies();
