import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUserReleases } from '../actions'
import { updateCoverSize} from '../actions'

class SearchBar extends Component {

  constructor (props) {
    super(props)
    this.state = {username: '', coverSize: 'large'}

    this.onInputChange = this.onInputChange.bind(this)
    this.onSelectChange = this.onSelectChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange (event) {
    this.setState({username: event.target.value})
  }

  onSelectChange (event) {
    this.setState({coverSize: event.target.value})

    this.props.dispatch(updateCoverSize(event.target.value))
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
          onChange={this.onInputChange}
          value={this.state.username}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary ml-2">Submit</button>
        </span>
        <div id="options" className="input-group input-group-sm mt-2">
          <div className="input-group-prepend">
            <label
              className="input-group-text"
              htmlFor="inputGroupSelect01">Cover size</label>
          </div>
          <select
            className="form-control"
            onChange={this.onSelectChange}
            defaultValue={this.state.coverSize}
          >
            <option value="small">Small covers</option>
            <option value="large">Large covers</option>
          </select>
        </div>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  let actions = bindActionCreators({ fetchUserReleases }, dispatch);
  return { ...actions, dispatch };
}

export default connect(null, mapDispatchToProps)(SearchBar)