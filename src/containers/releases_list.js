import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReleaseItem from '../components/release_item'
import _ from 'lodash'

class ReleasesList extends Component {
  render () {
    const {releases} = this.props.userReleases

    if (_.isArray(releases) && !_.isEmpty(releases)) {
      return (
        <div className="mt-2 justify-content-center row">{
          releases.map((release) => {
            let {basic_information} = release

            return (
              <div key={basic_information.id} className="col-auto p-0">
                <ReleaseItem data={basic_information}/>
              </div>
            )
          })
        }</div>
      )
    }

    return null;
  }
}

function mapStateToProps (state) {
  return {userReleases: state.userReleases}
}

export default connect(mapStateToProps)(ReleasesList)