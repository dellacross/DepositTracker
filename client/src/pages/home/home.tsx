import React, { useEffect, useState } from 'react'
import './home.css'
import DepositCard from '../../components/DepositCard.tsx'
import useGetDeposits from '../../hooks/useGetDeposits.tsx'
import useGetTrackers from '../../hooks/useGetTracker.tsx'

const Home = () => {

    const { deposits } = useGetDeposits()
    const { tracker } = useGetTrackers()

    const [percentage, setPercentage] = useState<number>(0)

    useEffect(() => {
        if(tracker) {
            const total = (200*(200+1))/2
            const percentage = (tracker.amount / total) * 100
            setPercentage(parseFloat(percentage?.toFixed(3)))
        }
    }, [tracker])
 
    return (
        <div id="home">
            <header>
                <div id="background-circle">
                    <div id="center-circle">
                        {`${percentage}%`}
                    </div>
                </div>
            </header>
            <article>
                <section>
                    <h1>Desafio dos 200 Depósitos</h1>
                    <h2>Progesso: <span>{`R$ ${tracker?.amount},00`}</span></h2>
                </section>
            </article>
            <main>
                { deposits?.map((deposit, index) => <DepositCard key={index} deposit={deposit} />) }
            </main>
        </div>
    )
}

export default Home