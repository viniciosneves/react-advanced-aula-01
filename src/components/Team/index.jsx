import styled from "styled-components"
import Heading from "../Heading"
import TeamMember from "../TeamMember"
import Button from "../Button"
import { Forward } from "../icons/Foward"

const StyledSection = styled.section`
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
`

const TeamGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 28px;
`

const people = [
    {
        id: 1,
        name: 'Amanda Johnson',
        role: 'CEO & Founder DigiXine',
        avatar: 'http://localhost:5173/time/danie.png'
    },
    {
        id: 2,
        name: 'Jonas Silva',
        role: 'Social Media Manager',
        avatar: '/time/jonas.png'
    },
    {
        id: 3,
        name: 'Amanda Johnson',
        role: 'Senior Content Writer',
        avatar: '/time/amanda.png'
    },
    {
        id: 4,
        name: 'Danie Rogue',
        role: 'Senior UX Writer',
        avatar: '/time/danie.png'
    },
    {
        id: 5,
        name: 'Lucas Santos',
        role: 'Backend Engineer',
        avatar: '/time/lucas.png'
    },
    {
        id: 6,
        name: 'Joana Marie',
        role: 'Frontend Engineer',
        avatar: '/time/joana.png'
    },
    {
        id: 7,
        name: 'Jessica Law',
        role: 'Ads & Promotion Expert',
        avatar: '/time/jessica.png'
    },
    {
        id: 8,
        name: 'Risa Watson',
        role: 'Senior SEO Specialist',
        avatar: '/time/risa.png'
    },
]

const Team = () => {
    return (<StyledSection>
        <Heading
            title="NOSSO TIME"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <TeamGrid>
            {people.map(member => <TeamMember
                key={member.id}
                avatar={member.avatar}
                name={member.name}
                role={member.role}
            />)}
        </TeamGrid>
        <div>
            <Button>
                Lorem Ipsum <Forward />
            </Button>
        </div>
    </StyledSection>)
}

export default Team