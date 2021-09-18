import React from 'react';
import styled  from 'styled-components';
const Wrapper = styled.div`
/* The container */
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
  color:${props=>props.disabled ?"var(--grey_2)":"black"};
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  border:1.5px solid var(--grey_3);

  background-color: ${props=>props.disabled?"var(--grey_5)":"trasparent"};
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: ${props=>props.disabled?"var(--grey_5)":"trasparent"};
    border:${props=>props.disabled ?"1.5px solid var(--grey_3)":"1.5px solid var(--primary)"}
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: var(--primary);
  border-color:var(--primary)
}


/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
    top: 3.5px;
    left: 3.5px;
    width: 13.71px;
    height: 13.71px;
    border-radius: 50%;
    background: white;
}


`
const RadioButton = (props)=><Wrapper {...props}>
<label class="container">{props.text}
  <input type="radio" name={props.name} disabled={props.disabled} checked={props.checked} name={props.name}/>
  <span class="checkmark"></span>
</label>

</Wrapper>
export default RadioButton