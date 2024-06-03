import { useEffect, useState } from "react"

const useGeolocation = () => {

    const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null })
    const [permission, setPermission] = useState('')
    const [error, setError] = useState('')

    
    useEffect(() => {
        
        let watchId = null
        const onSuccess = (position) => {
            setCoordinates({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            })
        }

        const onError = (error) => {
            const errorMsg = 'Ops! Falha ao obter a posição geográfica!'
            console.log(errorMsg)
            console.error(error)
            setError(`[handlePermissionChange] :: [onError] - ${errorMsg}`)
        }

        const handlePermissionChange = (status) => {
            setPermission(status.state)

            if (status.state == 'denied') {
                alert('Localização não acessível')
            }

            if (status.state == 'granted' || status.state == 'prompt') {
                watchId = navigator.geolocation.watchPosition(onSuccess, onError)
            }

        }

        if ('geolocation' in navigator && 'permissions' in navigator) {
            navigator.permissions.query({ name: 'geolocation' })
                .then((status) => {
                    handlePermissionChange(status)
                })
        } else {
            setError('API de geolocation não disponível')
        }

        return () => {
            if (watchId) {
                navigator.geolocation.clearWatch(watchId)
            }
        }

    }, [])

    return { coordinates, permission, error }

}

export default useGeolocation