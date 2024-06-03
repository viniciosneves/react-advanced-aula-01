import { useEffect, useState } from "react"

const useGeolocation = () => {

    const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null })

    useEffect(() => {

        const onSuccess = (position) => {
            setCoordinates({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            })
        }

        const onError = (error) => {
            console.log('Ops! Alguma coisa deu errado')
            console.error(error)
        }

        navigator.geolocation.watchPosition(onSuccess, onError)
    }, [])

    return { coordinates }

}

export default useGeolocation