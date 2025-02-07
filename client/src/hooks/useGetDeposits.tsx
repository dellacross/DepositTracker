import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useGetDeposits = () => {

    const [deposits, setDeposits] = useState(null)

    useEffect(() => {
        if(!deposits) {
            axios
            .get('http://localhost:3333/deposits')
            .then((res) => {
                setDeposits(res.data.deposit)
                //console.log(res.data?.deposit)
            })
            .catch((err) => console.log(err))
        }
    }, )

    return {
        deposits
    }
}

export default useGetDeposits