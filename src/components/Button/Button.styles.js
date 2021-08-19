import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";


const Wrapper = styled.button`
display: flex;
border-radius: 0.8rem;
width: 14.4rem;
height: ${(props) => props.small ? "4.8rem" : "5.6rem" };
background-color: ${(props) => props.disabled ? "var(--white)" : "var(--primary-color)"};
color: var(--white);
font: "Circular Std Book", sans-serif;
font-weight: normal;
font-size: 1.4rem;
line-height: 1.6rem;
text-align: center;

&:hover {
    outline: ${(props) => props.disabled ? "var(--white)" : "var(--primary_dark)"};
};

&:active {
    outline: ${(props) => props.disabled ? "var(--white)" : "var(--navy)"};
};

`
const Button = ({
        className,
        height,
        disabled,
        color,
        background_color,
    }) => {
        const styleProps = {
            className,
            height,
            disabled,
            color,
            background_color,
        };
        return <Wrapper {...styleProps}></Wrapper>;
      };

Button.propTypes = {
        color: PropTypes.string,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        height: PropTypes.string,
      };

export default Button;

