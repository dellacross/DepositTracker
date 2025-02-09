import { useEffect, useState } from 'react'
import axios from 'axios'

interface TrackerProps {
    newTracker?: any;
}

const useGetTrackers = ({ newTracker }: TrackerProps = {}) => {

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
    }, [tracker])

    useEffect(() => {
        if(newTracker) setTracker(newTracker) 
    }, [newTracker])

    return {
        tracker,
        setTracker
    }
}

export default useGetTrackers