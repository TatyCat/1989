import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <section>
        <h2>{this.props.movieTitle}, {this.props.releaseDate}</h2>
        <img src={this.props.poster} />
        <p>{this.props.plotData}</p>
        <p>{this.props.voteAvg}</p>
      </section>
    )
  }
}

export default Movie

