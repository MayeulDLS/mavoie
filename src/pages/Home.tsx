import Header from '../components/Header'
import ChallengeCard from '../components/ChallengeCard'
import datas from '../data/challenges.json'

export default function Home() {
    return (
        <>
            <Header />
            {datas.challenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
        </>
    )
}
