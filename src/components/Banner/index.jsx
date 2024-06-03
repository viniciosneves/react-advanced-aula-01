import styled from "styled-components"
import Button from "../Button"
import { Forward } from "../icons/Foward"

import banner from './banner.png'

const Container = styled.section`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: #fff;
    gap: 40px;
`

const Title = styled.h1`
    font-size: 56px;
    line-height: 72px;
`

const Paragraph = styled.p`
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    font-style: italic;
    max-width: 415px;
`

const TextContainer = styled.div`
    width: 560px;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const Figure = styled.figure`
    margin: 0;
`

const Banner = () => {
    return (<Container>
        <TextContainer>
            <Title>
                Serviços de Marketing Digital
            </Title>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Paragraph>
            <div>
                <Button>
                    Lorem Ipsum <Forward />
                </Button>
            </div>
        </TextContainer>
        <Figure>
            <img src={banner} alt="" />
        </Figure>
    </Container>)
}

export default Banner