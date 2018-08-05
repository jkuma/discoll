import React, { Component } from 'react';

class Loader extends Component {
  render() {
    if (this.props.isLoading) {
      return (
          <div className="w-100 pt-3">
            <div className="loader-ellips infinite-scroll-request">
              <span className="loader-ellips__dot"/>
              <span className="loader-ellips__dot"/>
              <span className="loader-ellips__dot"/>
              <span className="loader-ellips__dot"/>
            </div>
          </div>
      );
    }

    return null;
  }
}

Loader.defaultProps = {
  isLoading: false,
};

export default Loader;
