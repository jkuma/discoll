import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReleaseListItem from './release_list_item'
import _ from 'lodash'

class ReleasesList extends Component {
  render () {
    const {releases} = this.props.userReleases

    if (_.isEmpty(releases) && !_.isArray(releases)) {
      return (
        <div className="alert alert-info mt-2" role="alert">
          Please enter a valid discogs user...
        </div>
      )
    }

    return (
      <div className="mt-2 mx-auto row">{
        releases.map((release) => {
          const {basic_information} = release

          return (
            <div key={basic_information.id} className="col-md-auto p-0">
              <ReleaseListItem title={basic_information.title}
                               image={basic_information.cover_image}/>
            </div>
          )
        })
      }</div>
    )
  }
}

function mapStateToProps (state) {
  return {userReleases: state.userReleases}
}

export default connect(mapStateToProps)(ReleasesList)