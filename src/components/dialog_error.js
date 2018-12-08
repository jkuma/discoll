import React, { Component } from 'react';
import { connect } from 'react-redux';

class DialogError extends Component {
  render() {
    const { errors } = this.props;

    if (errors.hasOwnProperty('message')) {
      return (
          <div
              className="alert alert-danger alert-dismissible fade show mt-2"
              role="alert"
          >
            <strong>Error!</strong> {errors.message}
            <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
            ><span aria-hidden="true">&times;</span>
            </button>
          </div>
      );
    }

    return null;
  }
}

function mapStateToProps(state) {
  return { errors: state.errors };
}

export default connect(mapStateToProps, null)(DialogError);

