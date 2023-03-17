import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <List>
        <SLink to={'/cuisine/italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/american'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}
const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem
`

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin-right: 1rem;
    text-decoration:none;
    cursor: pointer;
    transform: scale(0.9);
    background:black;    
    height:4.2rem;
    width:4.2rem;
    transition: all 0.5s ease-out;

    h4{
        color: #bfbfbf;
        font-size: 0.7rem;
        margin:5px 0 0;
    }

    svg{
        color: #bfbfbf;
        font-size: 1.3rem;
    }
    &:hover{
        transform: scale(1);
    }
    &.active{
        svg{
            color: #00838F;
        }
        h4{
            color: #00838F;
        }
    }
`

export default Category