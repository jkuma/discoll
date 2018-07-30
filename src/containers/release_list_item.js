import React, { Component } from 'react'

class ReleaseListItem extends Component {

  render () {
    return (
      <div>
        <img
          height={this.props.size}
          width={this.props.size}
          src={this.props.image}
          title={this.props.title}
          alt={this.props.title}
        />
      </div>
    )
  }
}

ReleaseListItem.defaultProps = {
  size: 250
}

export default ReleaseListItem