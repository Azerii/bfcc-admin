import React from 'react';
import styled  from 'styled-components';
import Search from '../search/search'
import logo from '../../assets/images/logo.svg'
import notification from '../../assets/images/notification.svg'
import avatar from '../../assets/images/avatar.svg'
const Wrapper = styled.div`
display:flex;
height:72px;
align-items:center;
background-color:white;
padding: 0 24px;
img{
    height:40.12px;
    width:35px;
}
.right{
    display:flex;
    margin-left:auto;
}
.avatar{
    width:32px;
    height:32px;
}
.notification{
    margin: auto 44.3px auto 55.6px;
    width:16.2px;
    height:19.2px;
}
`
const Navbar = ()=><Wrapper>
    <img src={logo} alt="logo"/>
<div className="right">
<Search/>
<img src={notification} alt="notification" className="notification"/>
<img src={avatar} alt="avatar" />
</div>
</Wrapper>
export default Navbar