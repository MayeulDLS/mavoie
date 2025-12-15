import { Card, Container, IconButton, Typography, Box } from '@mui/material'
import datas from '../data/challenges.json'
import { useNavigate, useParams } from 'react-router-dom'
import Duration from '../components/Duration'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { useState } from 'react'

export default function ChallengeDetails() {
    const navigate = useNavigate()
    const handleBackClick = () => {
        navigate('/')
    }

    const { id } = useParams()
    const initialIndex = datas.challenges.findIndex((c) => c.id === id)
    const [currentIndex, setCurrentIndex] = useState(
        initialIndex >= 0 ? initialIndex : 0
    )
    if (initialIndex === -1) {
        return <div>Challenge not found</div>
    }
    const challenge = datas.challenges[currentIndex]

    const previousCard = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
    }
    const nextCard = () => {
        setCurrentIndex((prev) =>
            prev < datas.challenges.length - 1 ? prev + 1 : prev
        )
    }

    return (
        <Container>
            <IconButton
                onClick={handleBackClick}
                sx={{ position: 'fixed', top: 16, left: 16 }}
            >
                <ArrowBack />
            </IconButton>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '50%',
                    margin: '16px auto 0',
                }}
            >
                <IconButton
                    onClick={previousCard}
                    disabled={currentIndex === 0}
                >
                    <ArrowBack />
                </IconButton>
                <IconButton
                    onClick={nextCard}
                    disabled={currentIndex === datas.challenges.length - 1}
                >
                    <ArrowForward />
                </IconButton>
            </Box>

            <Card
                sx={{
                    width: '50%',
                    margin: 'auto',
                    padding: 4,
                    marginTop: 2,
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
                <Typography variant="body1">
                    {challenge.longDescription}
                </Typography>
                <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
                    Avant de te lancer
                </Typography>
                {challenge.requirements.map((requirement, idx) => (
                    <Typography key={idx} variant="body2">
                        {requirement}
                    </Typography>
                ))}
            </Card>
        </Container>
    )
}
