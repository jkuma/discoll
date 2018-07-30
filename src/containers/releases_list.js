import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReleaseListItem from './release_list_item'
import _ from 'lodash'

class ReleasesList extends Component {
  render () {
    const {releases} = this.props.userReleases

    if (_.isEmpty(releases) && !_.isArray(releases)) {
      return (
        <div>Please enter a valid discogs user...</div>
      )
    }

    return (
      <ul>{
        releases.map((release) => {
          const {basic_information} = release
          return (
            <li key={basic_information.id}>
              <ReleaseListItem title={basic_information.title}
                               image={basic_information.cover_image}/>
            </li>
          )
        })
      }</ul>
    )
  }
}

function mapStateToProps (state) {
  return {userReleases: state.userReleases}
}

export default connect(mapStateToProps)(ReleasesList)