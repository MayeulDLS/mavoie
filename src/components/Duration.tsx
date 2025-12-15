import { Box } from '@mui/material'

export default function Duration({ duration }: { duration: string }) {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                padding: '4px 8px',
                borderRadius: '4px',
                display: 'inline-block',
                marginTop: 1,
                fontWeight: 'bold',
            }}
        >
            {duration}
        </Box>
    )
}
