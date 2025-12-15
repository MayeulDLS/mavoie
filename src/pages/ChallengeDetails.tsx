import { Card, Typography } from '@mui/material'
import datas from '../data/challenges.json'
import { useParams } from 'react-router-dom'
import Duration from '../components/Duration'

export default function ChallengeDetails() {
    const { id } = useParams()
    const challenge = datas.challenges.find((challenge) => challenge.id === id)

    if (!challenge) {
        return <div>Challenge not found</div>
    }

    return (
        <Card
            sx={{
                width: '50%',
                margin: 'auto',
                padding: 4,
                marginTop: 4,
                borderRadius: 2,
                border: '1px solid #ccc',
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                }}
            >
                {challenge.title}
            </Typography>
            <Duration duration={challenge.duration} />
            <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
                Descriptif
            </Typography>
            <Typography variant="body1">{challenge.longDescription}</Typography>
            <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
                Avant de te lancer
            </Typography>
            {challenge.requirements.map((requirement) => (
                <Typography variant="body2">{requirement}</Typography>
            ))}
        </Card>
    )
}
