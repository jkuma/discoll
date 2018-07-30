import React, { Component } from 'react'
import SearchBar from '../containers/search_bar'
import ReleasesList from '../containers/releases_list'

class App extends Component {
  render () {
    return (
      <div className="App">
        <SearchBar/>
        <ReleasesList/>
      </div>
    )
  }
}

export default App
