import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetTrackers = () => {

    const [tracker, setTracker] = useState(null)

    useEffect(() => {
        const getTrackers = async () => {
            await axios
            .get('http://localhost:3333/trackers')
            .then((res) => {
                const trackers = res.data?.tracker
                setTracker(trackers[trackers?.length - 1])  
                //console.log('res', res.data)
            })
            .catch((err) => console.log(err))
        }

        if(!tracker) getTrackers()
    }, )

    return {
        tracker
    }
}

export default useGetTrackers