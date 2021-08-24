import React from 'react';
import styled  from 'styled-components';
const Wrapper = styled.div`
/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  line-height:1.7;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  border:1.5px solid var(--grey_1);
  border-radius:8px;
  background-color: transparent;
  box-sizing:border-box;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
border-color:var(--primary);
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: var(--primary);
}
.container input:disabled ~ .checkmark {
  background-color: var(--grey_3);
}
.container input:indeterminate ~ .checkmark {
  background-color: var(--primary);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}
.container input:disabled ~ .checkmark:after,.container input:indeterminate ~ .checkmark:after {
  display: block;
    left: 4.5px;
    top: 1px;
    width: 10px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 0 0;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
` 
const Checkbox = (props)=><Wrapper>
  <label className="container">
    {props.text}
  <input type="checkbox" disabled={props.disabled} checked={props.checked}  indeterminate={props.indeterminate}/>
  <span className="checkmark"></span>
</label>

</Wrapper>
export default Checkbox;