import styled from "styled-components"

import logo from './logo.png'
import Button from "../Button"
import { Forward } from "../icons/Foward"

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    ul:first-child {
        margin-right: 100px;
    }
    ul:last-child {
        flex-grow: 1;
        justify-content: flex-end;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        list-style: none;
        align-items: center;
        gap: 40px;
    }
`

const StyledLink = styled.a`
    color: #EFF6FF;
    font-style: italic;
    font-weight: 400;
    text-decoration: none;
    text-transform: uppercase;
`


const Navbar = () => {
    return (<StyledNav>
        <ul>
            <li>
                <a href="">
                    <img src={logo} alt="" />
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <StyledLink href="#">
                    Serviços
                </StyledLink>
            </li>
            <li>
                <StyledLink href="#">
                    Time
                </StyledLink>
            </li>
            <li>
                <StyledLink href="#">
                    Review
                </StyledLink>
            </li>
        </ul>
        <ul>
            <li>
                <Button>
                    Lorem Ipsum <Forward />
                </Button>
            </li>
        </ul>
    </StyledNav>)
}


export default Navbar