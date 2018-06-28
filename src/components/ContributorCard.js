import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

const ContributorCard = props => (
  <Card>
    <CardHeader
      avatar={
        <Avatar aria-label="Avatar">
          <img
            style={{ maxWidth: "40px" }}
            src={props.avatarUrl}
            alt="Avatar"
          />
        </Avatar>
      }
      title={
        <a rel="noopener noreferrer" target="_blank" href={props.link}>
          {props.userName}
        </a>
      }
      subheader={<span>{props.contributions} contributions</span>}
    />
  </Card>
);

ContributorCard.propTypes = {
  avatarUrl: PropTypes.string,
  userName: PropTypes.string,
  contributions: PropTypes.number,
  link: PropTypes.string
};

export default ContributorCard;
