import { useNavigate } from 'react-router-dom'
import { Card, CardContent, Divider, Typography } from '@mui/material'
import type { Challenge } from '../models/Challenge'
import Duration from './Duration'

export default function ChallengeCard({ challenge }: { challenge: Challenge }) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/challenge/${challenge.id}`)
    }
    return (
        <Card
            onClick={handleClick}
            sx={{
                cursor: 'pointer',
                marginBottom: 2,
                width: '100%',
                borderRadius: 2,
                border: '1px solid #ccc',
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                    }}
                >
                    {challenge.title}
                </Typography>
                <Duration duration={challenge.duration} />
                <Divider sx={{ width: '100%', marginY: 1 }} />
                <Typography variant="body1">{challenge.description}</Typography>
            </CardContent>
        </Card>
    )
}
