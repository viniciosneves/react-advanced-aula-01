/* eslint-disable react/prop-types */
import styled from "styled-components"

const Card = styled.div`
    background-color: #fff;
    border-radius: 8px;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
    height: 100%;
    p {
        margin: 0;
        color: #9CA3AF;
        font-size: 16px;
    }
`

const CardService = ({ icon, text }) => {
    return (<Card>
        {icon}
        <p>{text}</p>
    </Card>)
}

export default CardService