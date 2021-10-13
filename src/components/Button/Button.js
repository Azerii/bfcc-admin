import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import chevronDownWhite from "../../assets/icons/chevronDownWhite.svg";

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  width: 14.4rem;
  height: ${(props) => (props.small ? "4.8rem" : "5.6rem")};
  background-color: ${(props) =>
    props.disabled ? "var(--grey_1)" : "var(--primary)"};
  color: var(--white);

  &.secondary {
    border: 1px solid
      ${(props) => (props.disabled ? "var(--grey_1)" : "var(--primary)")};
    background-color: var(--white);
    color: ${(props) => (props.disabled ? "var(--grey_1)" : "var(--primary)")};

    &:hover {
      border: 1px solid
        ${(props) => (props.disabled ? "var(--grey_1)" : "var(--primary_dark)")};
      background-color: var(--white);
      color: ${(props) =>
        props.disabled ? "var(--grey_1)" : "var(--primary_dark)"};

      .icon {
        filter: var(--filter_primary_dark);
      }
    }

    .icon {
      filter: var(--filter_primary);
    }
  }

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "var(--grey_1)" : "var(--primary_dark)"};
  }

  &:active {
    outline: ${(props) => (props.disabled ? "var(--white)" : "var(--navy)")};
  }

  .icon {
    display: ${(props) => (props.disabled ? "none" : "inline-block")};
    width: 1rem;

    &.right {
      margin-left: 1.4rem;
    }

    &.left {
      margin-right: 1.4rem;
    }
  }
`;
const Button = ({
  className,
  height,
  text,
  disabled,
  color,
  background_color,
  type,
}) => {
  const styleProps = {
    className,
    text,
    height,
    disabled,
    color,
    background_color,
    type,
  };
  return (
    <Wrapper {...styleProps}>
      {type === "add" && (
        <img src={chevronDownWhite} alt="add" className="icon left" />
      )}
      <span>{text}</span>
      {type === "dropdown" && (
        <img src={chevronDownWhite} alt="dropdown" className="icon right" />
      )}
    </Wrapper>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  add: PropTypes.bool,
  height: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
