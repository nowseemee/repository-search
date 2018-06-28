import React from "react";
import PropTypes from "prop-types";

class Contributors extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        user: PropTypes.string,
        repo: PropTypes.string
      })
    })
  };

  state = {
    contributors: [],
    hasError: false,
    isLoading: false,
    hasMore: true,
    page: 1
  };

  componentDidMount() {
    this.fetchMoreContributors();
  }

  fetchMoreContributors = () => {
    this.setState(
      () => ({ isLoading: true, hasError: false }),
      () => {
        fetch(
          `https://api.github.com/repos/${this.props.match.params.user}/${
            this.props.match.params.repo
          }/contributors?per_page=10&page=${this.state.page}`
        )
          .then(response => response.json())
          .then(contributors => {
            this.setState(prevState => ({
              contributors: [...prevState.contributors, ...contributors],
              isLoading: false,
              page: prevState.page + 1,
              hasMore: !!contributors.length
            }));
          })
          .catch(() => {
            this.setState(() => ({
              hasError: true,
              isLoading: false,
              contributors: []
            }));
          });
      }
    );
  };

  render() {
    return (
      <div>
        {this.state.hasError && (
          <h2>Something went wrong, please try again...</h2>
        )}

        {this.state.contributors.map(contributor => contributor.login)}

        <button
          disabled={this.state.isLoading || !this.state.hasMore}
          onClick={() => this.fetchMoreContributors()}
        >
          more
        </button>

        {this.state.isLoading && <h2>Loading...</h2>}
      </div>
    );
  }
}

export default Contributors;
