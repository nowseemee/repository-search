import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ContributorCard from "./ContributorCard";

const ContributorList = props => (
  <Grid style={{ marginTop: "10px" }} container spacing={24}>
    {props.contributors.map(contributor => (
      <Grid item key={contributor.id} xs={12}>
        <ContributorCard
          avatarUrl={contributor.avatar_url}
          userName={contributor.login}
          contributions={contributor.contributions}
          link={contributor.html_url}
        />
      </Grid>
    ))}
  </Grid>
);

ContributorList.propTypes = {
  contributors: PropTypes.array.isRequired
};

export default ContributorList;
