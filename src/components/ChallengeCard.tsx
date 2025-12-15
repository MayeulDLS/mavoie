import { useNavigate } from 'react-router-dom'
import { Card, CardContent, Typography } from '@mui/material'
import type { Challenge } from '../models/Challenge'

export default function ChallengeCard({ challenge }: { challenge: Challenge }) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/challenge/${challenge.id}`)
    }
    return (
        <Card onClick={handleClick} style={{ cursor: 'pointer' }}>
            <CardContent>
                <Typography variant="h3">{challenge.title}</Typography>
            </CardContent>
        </Card>
    )
}
