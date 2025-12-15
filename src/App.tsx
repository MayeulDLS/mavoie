import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ChallengeDetails from './pages/ChallengeDetails'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/challenge/:id" element={<ChallengeDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
