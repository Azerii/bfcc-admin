import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./Button";

const Wrap = styled(Button)`
  background-color: ${(props) =>
    props.disabled ? "var(--grey_1)" : "var(--transparent)"};
  justify-content: flex-end;

  :hover {
    border: 0;
    background-color: var(--transparent);
    /* color: var(--white); */
  }
`;

const TransparentButton = ({
  className,
  height,
  text,
  disabled,
  color,
  background_color,
}) => {
  const styleProps = {
    className,
    text,
    height,
    disabled,
    color,
    background_color,
  };
  return <Wrap {...styleProps}>{text}</Wrap>;
};

TransparentButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.string,
};
export default TransparentButton;
