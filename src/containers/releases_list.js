import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Loader from '../components/loader';
import ReleaseItem from '../components/release_item';
import { bindActionCreators } from 'redux';
import { fetchCollectionNextPage } from '../actions';

class ReleasesList extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if (
        (window.innerHeight + window.scrollY)
        >= (document.body.offsetHeight - 500)
        && _.has(this.props.collection, 'pagination')
    ) {
      const { pagination } = this.props.collection;

      if (_.has(pagination.urls, 'next') && !this.state.isLoading) {
        this.props.fetchCollectionNextPage(pagination.urls.next).then(
            () => {
              this.setState({ isLoading: false });
            })
        ;
        this.setState({ isLoading: true });
      }
    }
  }

  render() {
    const { releases } = this.props.collection;
    const { errors } = this.props;

    if (!_.isEmpty(releases) && !_.has(errors, 'message')) {
      return (
          <div className="mt-2 justify-content-center row">
            {
              releases.map((release) => {
                const data = release.basic_information;

                return (
                    <div key={release.instance_id} className="col-auto p-0">
                      <ReleaseItem data={data}/>
                    </div>
                );
              })
            }
            <Loader isLoading={this.state.isLoading}/>
          </div>
      );
    }

    return null;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCollectionNextPage }, dispatch);
}

function mapStateToProps(state) {
  return { collection: state.collection, errors: state.errors };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReleasesList);
