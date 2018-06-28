import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import WarningIcon from "@material-ui/icons/Warning";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = () => ({
  contributorsLink: {
    textAlign: "right",
    marginTop: "10px"
  },
  description: {
    height: "22px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
});
const RepositoryCard = props => (
  <Card>
    <CardHeader
      title={
        <a rel="noopener noreferrer" target="_blank" href={props.link}>
          {props.fullName}
        </a>
      }
      subheader={props.language}
    />
    <CardContent>
      <Typography className={props.classes.description} component="p">
        {props.description}
      </Typography>
      <Link to={`/contributors/${props.fullName}`}>
        <Typography className={props.classes.contributorsLink}>
          Top contributors
        </Typography>
      </Link>
    </CardContent>
    <CardActions>
      <StarIcon />
      <Typography> {props.starsCount}</Typography>
      <WarningIcon />
      <Typography> {props.issuesCount}</Typography>
    </CardActions>
  </Card>
);

RepositoryCard.propTypes = {
  fullName: PropTypes.string,
  language: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  starsCount: PropTypes.number,
  issuesCount: PropTypes.number
};

export default withStyles(styles)(RepositoryCard);
