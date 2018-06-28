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

const styles = theme => ({
  contributorsLink: {
    textAlign: "right",
    marginTop: "10px"
  }
});
const RepositoryCard = props => (
  <div>
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
        <Typography component="p">{props.description}</Typography>
        <Link to={`/contributors/${props.fullName}`}>
          <Typography
            component="div"
            className={props.classes.contributorsLink}
          >
            Top contributors
          </Typography>
        </Link>
      </CardContent>
      <CardActions>
        <StarIcon />
        <Typography component="span"> {props.starsCount}</Typography>
        <WarningIcon />
        <Typography component="span"> {props.issuesCount}</Typography>
      </CardActions>
    </Card>
  </div>
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
