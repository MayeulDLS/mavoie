import { Card, Typography } from '@mui/material'
import datas from '../data/challenges.json'
import { useParams } from 'react-router-dom'

export default function ChallengeDetails() {
    const { id } = useParams()
    const challenge = datas.challenges.find((challenge) => challenge.id === id)

    if (!challenge) {
        return <div>Challenge not found</div>
    }

    return (
        <Card>
            <Typography variant="h3">{challenge.title}</Typography>
            <Typography variant="h5">{challenge.duration}</Typography>
            <Typography variant="body1">{challenge.longDescription}</Typography>
            {challenge.requirements.map((requirement) => (
                <Typography variant="body2">{requirement}</Typography>
            ))}
        </Card>
    )
}
