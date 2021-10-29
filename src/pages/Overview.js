import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import MainInnerWrapper from '../components/MainInnerWrapper';
import BarRep from '../components/BarRep';
const arr = [
    {name:'Subject per age group',score:85,color:'var(--primary)',},
    {name:'Subject name',score:60,color:'var(--primary)',},
    {name:'English Language',number:'12',score:78,color:'#CB42F0',},
    {name:'Mathematics',number:'12',score:95,color:'#F2B05C',},
    {name:'Science',number:'9',score:65,color:'#0CDAC6',},
    {name:'Chemistry',number:'3',score:68,color:'#52D858',},
    {name:'Physics',number:'3',score:55,color:'#F7716E',},
    {name:'Biology',number:'3',score:100,color:'var(--primary)',},
]

const years = [
    {year:1,score:85,color:'var(--primary)'},
    {year:2,score:60,color:'var(--primary)'},
    {year:3,score:78,color:'var(--primary)'},
    {year:4,score:95,color:'var(--primary)'},
    {year:5,score:65,color:'var(--primary)'},
    {year:6,score:68,color:'var(--primary)'},
    {year:7,score:55,color:'var(--primary)'},
    {year:8,score:63,color:'var(--primary)'},
    {year:9,score:57,color:'var(--primary)'},
    {year:10,score:63,color:'var(--primary)'},
    {year:11,score:64,color:'var(--primary)'},
    {year:12,score:53,color:'var(--primary)'},
]

const Overview = ({empty=false})=> {
    return(
        <>
            <h4>Overview</h4>
                <MainInnerWrapper>
                    <Card/>
                    <Card/>
                    <Card2 array={arr}/>
                    {empty && <Card3 title='Performance per Age'>
                        <h4>No performance recorded.</h4>
                        <p>Create test to view test permformance by class. Click <Link to='/'>here</Link></p>
                    </Card3>}
                    {!empty && <Card3 rotate title='Performance per Age'  width='auto'>
                        {
                            years.map(year=>(

                                <BarRep  color={year.color} text={`YEAR  ${year.year}  ( ${year.score}% ) `}  num={year.score}/>
                            ))
                        }
                    </Card3>}
                    {empty && <Card3 title='Performance per subject'>
                        <h4>No performance recorded.</h4>
                        <p>Create test to view test permformance by class. Click <Link to='/'>here</Link></p>
                    </Card3>}
                    {!empty && <Card3  title='Performance per subject'  width='auto'>
                        {
                            arr.map((ar,index)=>(

                                index >1 && index < 8 && <BarRep bar2 num={ar.score} text={`${ar.name} ( ${ar.score}% )`} color={ar.color} />
                            ))
                        }
                    </Card3>}
                </MainInnerWrapper>
        </>
    )
}
export default Overview