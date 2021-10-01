import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  age,
  arrow_left_blue,
  arrow_right_blue,
  search_img,
} from "../../assets";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  width: 100%;
  height: ${(props) => (props.fieldStyle === "longText" ? "48px" : "48px")};
  border-radius: 1.2rem;
  padding: ${(props) =>
    props.fieldStyle === "longText" ? "0rem 0rem" : "0rem 0rem"};

  input::-webkit-input-placeholder {
    font-size: 16px;
  }

  input,
  textarea {
    display: block;
    color: #0c0c0c;
    width: 100%;
    background-color: #ffffff !important;
    border: none;
    /* border:1px solid #D9DBE9; */
    border-radius: 8px;
    height: 48px;
    padding: 0 16px;
    /* background-color:${(props) => {
      return props.isValid ? "#FFFFFF" : "#F2FFFB";
    }}; */
    font-size: 16px;
  }
  textarea {
    height: 199px;
  }
  label {
    display: block;
    color: var(--primary);
    font-size: 12px;
    margin-bottom: -16px;
    margin-left: 16px;
    width: fit-content;
    padding: 8px;
    background-color: white;
  }
  input:focus,
  textarea:focus {
    /* border: 1px solid #1c0f61; */
  }
  input:not(:valid) {
    /* background-color: #fff3f8;    */
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .errMessage {
    display: ${(props) => (props.showError ? "block" : "none")};
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    color: #c30052;
    padding: 10px 20px;
    // display:none;
  }
  img {
    width: 16px;
    height: 16px;
    // margin:auto 0 auto -3rem ;
    ${(props) =>
      props.fieldStyle === "longText" ? "margin-bottom:30px" : null}
  }
  .grey {
    /* border-radius:10px; */
    /* background: #F7F7FC; */
  }
  .filter {
    // height: px;
    padding: 0 14px;
    width: 117px;
    /* border-radius:0; */
    /* background: #F7F7FC; */
    align-items: center;
  }
  .filter > input {
    border: none;
    padding: 0;
  }

  .search {
    width: 379px;
    /* background: #F7F7FC; */
    align-items: center;
    padding: 0 26px;
    border-radius: 10px;
  }
  .search > input {
    border: none;
    padding: 0 0 0 14.52px;
  }

  .flex {
    display: flex;
    border-radius: 8px;
    border: 1px solid var(--primary);
    background-color: white;
  }
  .flex {
    display: flex;
  }
  .order-1 {
  }
`;

const Form = ({
  fieldStyle,
  inputType,
  name,
  placeholder,
  value,
  showError,
  required,
  changeFunc
}) => {
  const [showLabel, setShowLabel] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validationHandler = () => {
    setIsTouched((prev) => {
      return true;
    });
  };

  const toggleLabel = (e,changeFunc) => {
    if (e.target.value.length > 0) {
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }
    return changeFunc(e.target.value)
  };

  const toggleShow = () => {
    setShowPassword(!showPassword);
  };

  const isTickValid = showLabel ? <img src={search_img} alt="check" /> : null;

  const isSearch = showLabel ? null : <img src={search_img} alt="search" />;

  const isFilter = showLabel ? null : <img src={search_img} alt="filter" />;

  return (
    <Wrapper isValid={showLabel} fieldStyle={fieldStyle} showError={showError}>
      {fieldStyle === "shortText" && (
        <>
          <div className="flex order-1">
            <input
              className="textSmall"
              type={inputType}
              id={name}
              name={name}
              placeholder={placeholder}
              onBlur={toggleLabel}
              onChange={(e)=>toggleLabel(e,changeFunc)}
              onFocus={validationHandler}
              value={value}
            />
            {/* {isTickValid} */}
          </div>
          <div>
            <p className="errMessage">Uh oh! There was an error!</p>
          </div>
          {showLabel && <label htmlFor={name}>{placeholder}</label>}
        </>
      )}
      {fieldStyle === "password" && (
        <>
          <div className="flex order-1">
            <input
              className="textSmall"
              //   type={showPassword ? "text" : inputType}
              type={inputType}
              id={name}
              name={name}
              value={value}
              placeholder={placeholder}
              onBlur={toggleLabel}
              onChange={toggleLabel}
            />
            {/* <img
              onClick={toggleShow}
              src={showPassword ? arrow_left_blue : arrow_right_blue}
              alt=""
            /> */}
          </div>
          <div>
            <p className="errMessage">Uh oh! There was an error!</p>
          </div>

          {showLabel && <label htmlFor={name}>{placeholder}</label>}
        </>
      )}
      {fieldStyle === "submit" && (
        <>
          <div className="flex order-1">
            <input
              className="textSmall"
              type={inputType}
              id={name}
              name={name}
              placeholder={placeholder}
              onBlur={toggleLabel}
              onChange={toggleLabel}
            />
            {/* <img
              onClick={toggleShow}
              src={showPassword ? arrow_left_blue : arrow_right_blue}
              alt=""
            /> */}
          </div>
          <div>
            <p className="errMessage">Uh oh! There was an error!</p>
          </div>

          {showLabel && <label htmlFor={name}>{placeholder}</label>}
        </>
      )}
    </Wrapper>
  );
};

Form.propTypes = {
  fieldStyle: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  showError: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default Form;
