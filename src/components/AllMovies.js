import React, { Component } from 'react'
import movieData from '../data/moviedata.json'

class AllMovies extends Component {
  render() {
    return (
      < main >
        {movieData.results.map((eachMovieDataItem) => {
          return (
            <section key={eachMovieDataItem.id}>
              <h2>{eachMovieDataItem.title}</h2>
              <h3>{eachMovieDataItem.release_date}</h3>
              <img src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + eachMovieDataItem.poster_path} />
              <p>{eachMovieDataItem.overview}</p>
              <p>{eachMovieDataItem.vote_average}</p>
            </section>
          )
        })
        }
      </main >
    )
  }
}

export default AllMovies

/*
{{
        movieData.map(movie => {
          return (
      // <movie
      //   key={movie.id}
      //   movieTitle={movie.title}
      //   releaseDate={movie.release_date}
      //   poster={movie.poster_path}
      //   plotData={movie.overview}
      //   voteAvg={movie.vote_average}
      // />
    )
        })
      }}
      */