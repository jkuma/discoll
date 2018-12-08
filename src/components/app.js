import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ReleasesList from '../containers/releases_list';
import DialogError from './dialog_error';

class App extends Component {
  render() {
    return (
        <div className="App">
          <SearchBar/>
          <ReleasesList/>
          <DialogError/>
        </div>
    );
  }
}

export default App;
