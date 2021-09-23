import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import MainInnerWrapper from '../components/MainInnerWrapper';
const arr = [
    {name:'Subject per age group'},
    {name:'Subject name'},
    {name:'English Language',number:'12'},
    {name:'Mathematics',number:'12'},
    {name:'Science',number:'9'},
    {name:'Chemistry',number:'3'},
    {name:'Physics',number:'3'},
    {name:'Biology',number:'3'},
]

const Overview = ()=> {
    return(
        <>
            <h4>Overview</h4>
                <MainInnerWrapper>
                    <Card/>
                    <Card/>
                    <Card2 array={arr}/>
                    <Card3 title='Performance per subject'>
                        <h4>No performance recorded.</h4>
                        <p>Create test to view test permformance by class. Click <Link to='/'>here</Link></p>
                    </Card3>
                </MainInnerWrapper>
        </>
    )
}
export default Overview