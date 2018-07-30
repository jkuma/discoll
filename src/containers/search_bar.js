import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUserReleases } from '../actions'

class SearchBar extends Component {

  constructor (props) {
    super(props)
    this.state = {username: ''}

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange (event) {
    this.setState({username: event.target.value})
  }

  onFormSubmit (event) {
    event.preventDefault()

    // We need to go and fetch user releases.
    this.props.fetchUserReleases(this.state.username)
  }

  render () {
    return (

      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Type in your discogs username"
          className="form-control rounded"
          value={this.state.username}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary ml-2">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchUserReleases}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)