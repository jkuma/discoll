import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReleaseItem from '../components/release_item'
import _ from 'lodash'
import { bindActionCreators } from 'redux'
import { fetchNextReleases } from '../actions'

class ReleasesList extends Component {
  constructor (props) {
    super(props)

    this.state = {isLoading: false}

    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.onScroll, false)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll, false)
  }

  onScroll () {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      _.has(this.props.userReleases, 'pagination')
    ) {
      const {pagination} = this.props.userReleases

      if (_.has(pagination.urls, 'next') && !this.state.isLoading) {
        this.props.fetchNextReleases(pagination.urls.next).then(() => {
          this.setState({isLoading: false})
        })
        this.setState({isLoading: true})
      }
    }
  }

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

    return null
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchNextReleases}, dispatch)
}

function mapStateToProps (state) {
  return {userReleases: state.userReleases}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReleasesList)