/* eslint-disable react/prop-types */
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    background-color: #F5F5F5;
    border-radius: 12px;
    padding: 16px 20px;
`

const Avatar = styled.img`
    width: 35px;
    height: 35px;
`

const Description = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4px;
    li {
        font-style: italic;
        strong {
            font-size: 12px;
            color: #5B5D63;
            font-weight: 500;
        }
        em {
            font-size: 11px;
            font-weight: 400;
            color: #9A9EA8;
        }
    }
`

const TeamMember = ({ name, role, avatar }) => {


    return (<Container>
        <Avatar src={avatar}/>
        <Description>
            <li>
                <strong>{name}</strong>    
            </li>
            <li>
                <em>{role}</em>
            </li>
        </Description>
    </Container>)
}

export default TeamMember