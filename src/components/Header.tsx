import { AppBar, Toolbar, Typography, Container } from '@mui/material'

export default function Header() {
    return (
        <AppBar
            position="fixed"
            color="transparent"
            elevation={3}
            sx={{
                backgroundColor: 'primary.main',
                color: 'black',
            }}
        >
            <Toolbar>
                <Container>
                    <Typography variant="h3" component="h1" align="center">
                        Orientation
                    </Typography>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
