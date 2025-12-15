import Header from '../components/Header'
import ChallengeCard from '../components/ChallengeCard'
import datas from '../data/challenges.json'
import { Container, Grid, Toolbar } from '@mui/material'

export default function Home() {
    return (
        <Container>
            <Header />
            <Toolbar sx={{ marginBottom: 4 }} />
            <Grid container spacing={2}>
                {datas.challenges.map((challenge) => (
                    <Grid key={challenge.id} size={{ xs: 12, sm: 6, md: 4 }}>
                        <ChallengeCard challenge={challenge} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
