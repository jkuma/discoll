import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReleaseItem extends Component {

  render () {
    let {title} = this.props.data
    let {size} = this.props
    let image = this.props.data.cover_image

    if ('small' === this.props.coverSize) {
      size = 150
      image = this.props.data.thumb
    }

    return <img height={size} width={size} src={image} title={title} alt={title}/>
  }
}

ReleaseItem.defaultProps = {
  size: 250
}

function mapStateToProps(state) {
  return {coverSize: state.coverSize}
}

export default connect(mapStateToProps)(ReleaseItem)