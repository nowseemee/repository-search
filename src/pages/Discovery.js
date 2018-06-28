import React from "react";
import PropTypes from "prop-types";
import Search from "../components/Search";
import AppBar from "../components/AppBar";

class Discovery extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({ q: PropTypes.string })
    }),
    history: PropTypes.shape({
      push: PropTypes.func
    })
  };

  render() {
    return (
      <div>
        <AppBar />
        <Search
          q={this.props.match.params.q}
          onSubmit={this.props.history.push}
        />
      </div>
    );
  }
}

export default Discovery;
