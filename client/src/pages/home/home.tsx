import React from 'react'
import './Home.css'
import { Goals } from '../../utils/Goals.tsx'
import DepositCard from '../../components/DepositCard.tsx'

const Home = () => {
 
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
                { Goals.map((goal, index) => <DepositCard key={index} goal={goal} />) }
            </main>
        </div>
    )
}

export default Home