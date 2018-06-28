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

  state = {
    items: [],
    hasError: false,
    isLoading: false
  };

  componentDidMount() {
    this.fetchSearchToState(this.props.match.params.q);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.match.params.q !== this.props.match.params.q &&
      this.fetchSearchToState(nextProps.match.params.q);
  }

  fetchSearchToState = q => {
    this.setState(
      () => ({ isLoading: true }),
      () =>
        fetch(`https://api.github.com/search/repositories?per_page=6&q=${q}`)
          .then(response => response.json())
          .then(({ items }) =>
            this.setState(() => ({ items, hasError: false, isLoading: false }))
          )
          .catch(() =>
            this.setState(() => ({ hasError: true, isLoading: false }))
          )
    );
  };

  render() {
    return (
      <div>
        <AppBar />
        <Search
          q={this.props.match.params.q}
          onSubmit={this.props.history.push}
        />

        {this.state.hasError && (
          <h2>Something went wrong, please try again...</h2>
        )}

        {this.state.isLoading && <h2>Loading...</h2>}

        {this.state.items.map(item => {
          return item.full_name;
        })}
      </div>
    );
  }
}

export default Discovery;
