import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserCollection, updateCoverSize } from '../actions';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', coverSize: 'large', items: 50 };

    this.onInputChange = this.onInputChange.bind(this);
    this.onCoverSizeChange = this.onCoverSizeChange.bind(this);
    this.onItemsChange = this.onItemsChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ username: event.target.value });
  }

  onCoverSizeChange(event) {
    this.setState({ coverSize: event.target.value });

    this.props.dispatch(updateCoverSize(event.target.value));
  }

  onItemsChange(event) {
    this.setState({ items: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch user releases.
    this.props.fetchUserCollection(this.state.username, this.state.items);
  }

  render() {
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
          <div className="input-group input-group-sm mt-2">
            <div className="input-group-prepend">
              <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01">Cover size</label>
            </div>
            <select
                className="form-control"
                onChange={this.onCoverSizeChange}
                defaultValue={this.state.coverSize}
            >
              <option value="small">Thumbnail</option>
              <option value="large">Cover</option>
            </select>
            <div className="input-group-prepend ml-2">
              <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01">Items</label>
            </div>
            <select
                className="form-control"
                onChange={this.onItemsChange}
                defaultValue={this.state.coverSize}
            >
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="250">250</option>
            </select>
          </div>
        </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  let actions = bindActionCreators({ fetchUserCollection }, dispatch);
  return { ...actions, dispatch };
}

export default connect(null, mapDispatchToProps)(SearchBar);