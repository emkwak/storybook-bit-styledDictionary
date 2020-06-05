import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

function Button(props) {
  return (
    <button
      className={`c-button c-button-${props.variant} ${
        props.color ? `c-button-${props.variant}-${props.color}` : ""
      }`}
      onClick={props.onClick}
      type="button"
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "text", "outlined"]),
};

export default Button;
