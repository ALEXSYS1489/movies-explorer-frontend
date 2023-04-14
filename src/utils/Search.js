export const search = (allMovies, searchText, shortfilm) => {
    
    return allMovies.filter(function (movie) {
        if (shortfilm) {
            return movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) && movie.duration < 41
        }
        else {
            return movie.nameRU.toLowerCase().includes(searchText.toLowerCase());
        }
      });
  };

  export const vizualizate = (searchedMovies) => {
    
    if (document.documentElement.clientWidth > 1240) {
        return searchedMovies.slice(0, 12)
    }

    if (document.documentElement.clientWidth > 650 && document.documentElement.clientWidth <= 1240) {
        return searchedMovies.slice(0, 8)
    }
    
    if (document.documentElement.clientWidth <= 650) {
        return searchedMovies.slice(0, 5)
    }
        
  }

  export const vizualizateMore = (searchedMovies, visibleMovies) => {
    
    if (document.documentElement.clientWidth > 1240) {
        return searchedMovies.slice(0, visibleMovies.length + 3)
    }

    if (document.documentElement.clientWidth <= 1240) {
        return searchedMovies.slice(0, visibleMovies.length + 2)
    }
        
  }