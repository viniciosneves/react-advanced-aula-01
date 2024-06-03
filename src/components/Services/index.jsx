import styled from "styled-components";
import Heading from "../Heading";
import CardService from "../CardService";
import { Seo } from "../icons/Seo";
import { Instagram } from "../icons/Instagram";
import { CMS } from "../icons/CMS";
import { Ads } from "../icons/Ads";

const StyledSection = styled.section`
    background-color: #D9D9D9;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
`

const Container = styled.div`
    width: 610px;
    max-width: 90%;
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* Cria duas colunas de largura igual */
        gap: 10px; /* Espaçamento entre os itens do grid */
    }
`

const Services = () => {
    return (<StyledSection>
        <Heading 
            title="NOSSOS SERVIÇOS"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Container>
            <ul>
                <li>
                    <CardService 
                        icon={<Seo />}
                        text="Search Engine Optimization"                    
                    />
                </li>
                <li>
                    <CardService 
                        icon={<Instagram />}
                        text="Social Media Optimization"                    
                    />
                </li>
                <li>
                    <CardService 
                        icon={<CMS />}
                        text="Content Management"                    
                    />
                </li>
                <li>
                    <CardService 
                        icon={<Ads />}
                        text="Ads Optimization"                    
                    />
                </li>
            </ul>
        </Container>
    </StyledSection>)
}

export default Services