import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetTrackers = () => {

    const [tracker, setTracker] = useState(null)

    useEffect(() => {
        if(!tracker) {
            axios
            .get('http://localhost:3333/trackers')
            .then((res) => {
                setTracker(res.data.trackers)
                console.log(res.data?.trackers)
            })
            .catch((err) => console.log(err))
        }
    }, )

    return {
        tracker
    }
}

export default useGetTrackers