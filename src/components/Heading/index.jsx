/* eslint-disable react/prop-types */
import styled from "styled-components"

const Container = styled.div`
    width: 465px;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 26px;
    h2 {
        font-weight: 600;
        font-size: 20px;
        margin: 0;
        color: #111827;
    }
    p {
        color: #9CA3AF;
        margin: 0;
        font-style: italic;
    }
`

const Heading = ({ title, description }) => {
    return (<Container>
        <h2>{title}</h2>
        <p>{description}</p>
    </Container>)
}

export default Heading