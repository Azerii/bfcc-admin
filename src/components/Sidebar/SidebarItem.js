import React from "react";
import styled from "styled-components";
import { plus } from "../../assets";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    color: ${(props) => (props.active ? "var(--primary)" : "black")}; 
    padding: 0 24px;

    div {
        height:20px;
        width:20px;
        display:flex;
        justify-content:center;
        align-items:center;

        img{
            width:auto;
        }
       
    }
    .activeImage{
      animation: glow 0.3s ease-in  forwards;
    }
    @keyframes glow{
      0%{
        border-radius:50%;
        box-shadow: 0 0 1px 1px var(--primary);
      }
      99%{
        border-radius:1%;
        box-shadow: 0 0 8px 2px var(--primary);
      }
      100%{
        border: 0px;
      }
    }

    p {
        margin-left:18px;
    }

    span {
        margin-left:auto;
        display:flex;
        align-items:center;

       .active img{
         display:none;
            height:14px;
            width:14px;
        }
    }
`;

const SidebarItem = (props) => (
  <Wrapper {...props}>
    <div>
      {!props.showActiveImage &&<img src={props.image} alt={props.image} />}
      {props.showActiveImage && <img  className="activeImage" src={props.activeImage} alt={props.activeImage} />}
    </div>
    <p>{props.text}</p>
    {props.hasPlus && (
      <span>
        <img src={plus} alt={plus} />
      </span>
    )}
  </Wrapper>
);

export default SidebarItem;
