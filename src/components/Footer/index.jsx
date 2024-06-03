import styled from "styled-components"

const StyledFooter = styled.footer`
    background-color: #130D3A;
    color: #FFFFFF;
    padding: 30px;
    p {
        text-align: center;
        font-size: 16px;
        margin: 0;
        em {
            color: #FDE047;
        }
    }
`

const Footer = () => {
    return (<StyledFooter>
        <p>© 2024 Marketing Labs. All Rights Reserved</p>
        <p><em>Privacy</em> | Terms of Service</p>
    </StyledFooter>)
}

export default Footer