import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import RepositoryCard from "./RepositoryCard";

const RepositoryList = props => (
  <Grid container spacing={24}>
    {props.repositories.map(repo => (
      <Grid item key={repo.full_name} xs={12} sm={6}>
        <RepositoryCard
          fullName={repo.full_name}
          language={repo.language}
          description={repo.description}
          link={repo.html_url}
          starsCount={repo.stargazers_count}
          issuesCount={repo.open_issues_count}
        />
      </Grid>
    ))}
  </Grid>
);

RepositoryList.propTypes = {
  repositories: PropTypes.array.isRequired
};

export default RepositoryList;
