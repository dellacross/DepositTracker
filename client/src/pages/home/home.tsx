import React from 'react'
import './home.css'
import { Goals } from '../../utils/Goals.tsx'
import DepositCard from '../../components/DepositCard.tsx'
import useGetDeposits from '../../hooks/useGetDeposits.tsx'

const Home = () => {

    const { deposits } = useGetDeposits()
 
    return (
        <div id="home">
            <header>
                <div id="background-circle">
                    <div id="center-circle">
                        {`00.00%`}
                    </div>
                </div>
            </header>
            <article>
                <section>
                    <h1>Desafio dos 200 Depósitos</h1>
                    <h2>Progesso: <span>{`R$ 0000,00`}</span></h2>
                </section>
            </article>
            <main>
                { deposits?.map((deposit, index) => <DepositCard key={index} deposit={deposit} />) }
            </main>
        </div>
    )
}

export default Home