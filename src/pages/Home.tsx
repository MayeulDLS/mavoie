import Header from '../components/Header'
import ChallengeCard from '../components/ChallengeCard'
import datas from '../data/challenges.json'
import { Container, Toolbar } from '@mui/material'

export default function Home() {
    return (
        <Container>
            <Header />
            <Toolbar />
            {datas.challenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
        </Container>
    )
}
