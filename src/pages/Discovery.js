import React from "react";
import PropTypes from "prop-types";
import Search from "../components/Search";
import RepositoryList from "../components/RepositoryList";

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
    repositories: [],
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
      () => ({ isLoading: true, repositories: [] }),
      () =>
        fetch(`https://api.github.com/search/repositories?per_page=6&q=${q}`)
          .then(response => response.json())
          .then(({ items: repositories }) => {
            this.setState(() => ({
              repositories,
              hasError: false,
              isLoading: false
            }));
          })
          .catch(() => {
            this.setState(() => ({
              hasError: true,
              isLoading: false,
              repositories: []
            }));
          })
    );
  };

  render() {
    return (
      <div>
        <Search
          q={this.props.match.params.q}
          onSubmit={this.props.history.push}
        />

        {this.state.hasError && (
          <h2>Something went wrong, please try again...</h2>
        )}

        {this.state.isLoading && <h2>Loading...</h2>}

        <RepositoryList repositories={this.state.repositories} />
      </div>
    );
  }
}

export default Discovery;
