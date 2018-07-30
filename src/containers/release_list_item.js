import React, { Component } from 'react'

class ReleaseListItem extends Component {

  render () {
    return (
      <div>
        <img src={this.props.image} alt={this.props.title}/>
        <div>{this.props.title}</div>
      </div>
    )
  }
}

export default ReleaseListItem