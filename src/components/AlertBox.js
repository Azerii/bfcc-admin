import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import checkCircle from "../assets/icons/checkCircle.svg";
import TransparentButton from "./Button/TransparentButton";
import VerticalLine from "./VerticalLine";
import CloseLight from "../assets/icons/Close.svg";
import CloseDark from "../assets/icons/CloseButton.svg";
import WarningDark from "../assets/icons/Warning.svg";
import warningLight from "../assets/icons/Error.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.7rem 2.4rem;
  height: ${(props) => (props.small ? "4.8rem" : "5.6rem")};
  border-radius: 0.5rem;

  .col {
    display: flex;
    align-items: center;
  }

  .dark {
    display: none;
  }

  .cancelCircle {
    display: none;
  }

  &.success {
    background-color: var(--success);
    color: var(--white);

    .warningLight {
      display: none;
    }
  }

  &.warning {
    background-color: var(--warning);
    color: var(--text);

    .divider {
      border-color: var(--text);
    }

    .btn {
      color: var(--text);
    }

    .dark {
      display: inline-block;
    }
    .warningDark {
      display: inline-block;
    }

    .checkCircle {
      display: none;
    }

    .light {
      display: none;
    }
  }

  &.error {
    background-color: var(--danger);
    color: var(--white);

    .checkCircle {
      display: none;
    }
  }

  &.info {
    background-color: var(--primary);
    color: var(--white);

    .checkCircle {
      display: none;
    }
  }
  .icon {
    height: 2rem;

    &.left {
      margin-right: 2rem;
    }

    &.right {
      margin-left: 3.2rem;
    }

    &.cancel {
      height: 1.2rem;
    }
  }

  .text {
    white-space: nowrap;
  }

  .divider {
    margin-left: 2.8rem;
  }
`;

const AlertBox = ({
  className,
  height,
  text,
  color,
  background_color,
  type,
  hideBtn,
}) => {
  const styleProps = {
    className,
    text,
    height,
    color,
    background_color,
    type,
  };
  return (
    <Wrapper {...styleProps}>
      <div className="col">
        <img
          src={warningLight}
          alt="sign"
          className="icon left light warningLight"
        />

        <img
          src={WarningDark}
          alt="sign"
          className="icon left dark cancelCircle"
        />
        <img src={checkCircle} alt="mark" className="icon left checkCircle" />
        <span className="text">{text}</span>
      </div>
      <div className="col">
        {!hideBtn && <TransparentButton className="btn" text="Button" />}
        {!hideBtn && <VerticalLine className="divider" />}
        <img src={CloseLight} alt="close" className="icon right light cancel" />
        <img src={CloseDark} alt="close" className="icon right dark cancel" />
      </div>
    </Wrapper>
  );
};

AlertBox.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  check: PropTypes.bool,
  height: PropTypes.string,
  type: PropTypes.string,
};
// const AlertBox = ({ className, text }) => {
//   return (
//     <Box className={className}>
//       <span className="text">{text}</span>
//     </Box>
//   );
// };

// AlertBox.propTypes = {
//   className: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// };

export default AlertBox;
