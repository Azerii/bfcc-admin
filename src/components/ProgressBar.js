// import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }

`;

const ProgressBar = styled.div`
  display: flex;
  height: ${(props) => (props.small ? "4.21rem" : "6.52rem")};
  aspect-ratio: 1/1;
  position: relative;

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    width: 100%;
    height: 100%;
    border: 0.8rem solid var(--white);
    border-top-color: var(--primary);
    border-left-color: var(--primary);
    border-bottom-color: var(--primary);
    border-radius: 50%;
    transform: rotate(45deg);
    /* animation: ${rotate} 1s ease infinite; */
  }
`;

export default ProgressBar;
