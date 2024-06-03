import styled from "styled-components"
import TestimonialSlider from "../TestimonialSlider";

const StyledSection = styled.section`
    background-color: #1D4ED8;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    color: #F5F5F5;
`

const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin: 0;
`

const testimonials = [
    {
        quote: "Desde que começamos a usar este produto, vimos uma melhoria significativa na nossa produtividade. Recomendo fortemente para quem busca eficiência.",
        author: "Alex Costa, Gerente de Operações"
    },
    {
        quote: "A atenção ao detalhe e o atendimento personalizado fazem toda a diferença. Estou extremamente satisfeito com a qualidade do serviço prestado.",
        author: "Juliana Martins, Diretora de Marketing"
    },
    {
        quote: "Esta foi uma das experiências mais transformadoras que tive. A equipe é altamente qualificada e o resultado superou todas as expectativas.",
        author: "Roberto Silva, Empreendedor Digital"
    },
    {
        quote: "Qualidade excepcional, atendimento impecável e resultados que realmente falam por si. Este serviço agregou valor inestimável ao meu negócio.",
        author: "Camila Gomes, CEO da InovaTech"
    },
    {
        quote: "Eu não sabia que precisava desse serviço até experimentar. Agora, não consigo imaginar fazer meu trabalho diário sem ele. Simplesmente indispensável.",
        author: "Leonardo Rocha, Analista de Sistemas"
    }
];

const Reviews = () => {
    return (<StyledSection>
        <SubTitle>
            REVIEWS
        </SubTitle>
        <TestimonialSlider testimonials={testimonials} />
    </StyledSection>)
}

export default Reviews