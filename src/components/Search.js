import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Search extends React.Component {
  static propTypes = {
    q: PropTypes.string,
    onSubmit: PropTypes.func
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "24px"
        }}
      >
        <TextField
          inputRef={ref => (this.inputElement = ref)}
          autoFocus={!this.props.q}
          defaultValue={this.props.q}
          label="Search Github"
          style={{ width: "50%" }}
          onKeyDown={event => {
            event.key === "Enter" && this.props.onSubmit(event.target.value);
          }}
        />
        <Button
          onClick={() => {
            this.props.onSubmit(this.inputElement.value);
          }}
        >
          Go!
        </Button>
      </div>
    );
  }
}

export default Search;
