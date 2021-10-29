import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  age,
  arrow_down,
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
  position: relative;
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
    margin-bottom: 2px;
    margin-left: 16px;
    padding: 0 5px;
    background-color: white;
    position: absolute;
    top: -7px;
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

  select {
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 18px;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    height: 48px;
    display: grid;
    /* &  ::-ms-expand {
  display: none;
} */
  }
  .selectImg {
    display: block;
    position: absolute;
    margin-top: 21px;
    margin-left: 328px;
    height: 6.01px;
    width: 10.01px;
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
    height: 48px;
    input {
      border: none;
      height: 100%;
    }
  }
  /* .flex {
    display: flex;
  } */
  .order-1 {
    /* position:relative; */
  }
  .smallText {
    font-size: 14px;
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

  changeFunc,
  selectArray,
  validate,
}) => {
  const [showLabel, setShowLabel] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [selected, setSelected] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    selectArray ? selectArray[0] : ""
  );
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    validate();
  };

  const validationHandler = () => {
    setIsTouched((prev) => {
      return true;
    });
  };

  const toggleLabel = (e) => {
    if (e.target.value.length > 0) {
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }
    return changeFunc(e.target.value);
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
              type={inputType || "text"}
              id={name}
              name={name}
              placeholder={placeholder}
              onBlur={toggleLabel}
              onChange={toggleLabel}
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
              type={inputType || "text"}
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
              type={inputType || "text"}
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

      {fieldStyle === "select" && (
        <>
          <div onClick={() => setSelected(true)} className="flex order-1">
            <img className="selectImg" src={arrow_down} alt={arrow_down} />
            <select
              value={selectedValue}
              name={name}
              id={name}
              onChange={handleChange}
            >
              {selectArray.map((st) => (
                <option value={st} key={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className="errMessage">Uh oh! There was an error!</p>
          </div>

          {selectedValue !== selectArray[0] && (
            <label htmlFor={name}>{placeholder}</label>
          )}
        </>
      )}
    </Wrapper>
  );
};

Form.propTypes = {
  fieldStyle: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  name: PropTypes.string.isRequired,
  showError: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default Form;
