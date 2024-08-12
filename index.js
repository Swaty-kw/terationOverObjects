let person = {
  name: "hamad",
  city: "kuwait city",
  age: 18,
};
person.email = "mastercoder420@yahoo.com";
const haskey = (object, key) => {
  if (object[key] == undefined) {
    return false;
  } else {
    return true;
  }
};

console.log(haskey(person, "name"));
console.log(haskey(person, "money"));
const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
function printTitle(array) {
  array.forEach((movie) => {
    console.log(movie.title);
  });
}

printTitle(movies);

function printRele(array) {
  let count = 0;
  array.forEach((movie) => {
    if (movie.year == 1994) {
      count += 1;
    }
  });
  return count;
}
console.log(printRele(movies));

function updatedmoviegenre(array) {
  array.forEach((movie) => {
    if (movie.title == "The Dark Knight") {
      movie.title == Drama;
    }
    return movies;
  });
}
let updatedmovies = updatedmoviegenre(movies);
console.log(updatedmovies);
