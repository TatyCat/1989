import React, { Component } from 'react'
import Header from './components/Header'
import AllMovies from './components/AllMovies'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <AllMovies />
      </>
    )
  }
}

export default App
