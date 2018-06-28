import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ContributorList from "../components/ContributorList";
import Typography from "@material-ui/core/Typography";

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

  getPageTitle = () =>
    `Top ${this.state.contributors.length || 10} contributors for ${
      this.props.match.params.user
    }/${this.props.match.params.repo}`;

  render() {
    return (
      <div>
        <Typography
          style={{ textAlign: "center", marginTop: "24px" }}
          variant="title"
        >
          {this.getPageTitle()}
        </Typography>

        {this.state.hasError && (
          <Typography variant="title">
            Something went wrong, please try again...
          </Typography>
        )}

        <ContributorList contributors={this.state.contributors} />
        <Button
          style={{ width: "100%", margin: "24px 0" }}
          disabled={this.state.isLoading || !this.state.hasMore}
          onClick={() => this.fetchMoreContributors()}
        >
          {this.state.isLoading ? "Loading..." : "Load More"}
        </Button>
      </div>
    );
  }
}

export default Contributors;
