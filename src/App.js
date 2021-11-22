import React, { useEffect, useState } from 'react';
import axios from "axios"
import { usePosition } from 'use-position';
import HavaDurumu from './components/HavaDurumu';



// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}



const App = () => {
    const { latitude, longitude, } = usePosition();

    const [weather, setWeather] = useState();

    const lang = navigator.language.slice(0, 2);

    console.log({ lang })

    const getWeatherData = (lat, long) => {
        // try {
        //     const { data } =  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=${lang}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)

        //     setWeather(data)
        // } catch (error) {
        //     alert("Veri alınırken hata oluştu!")
        // }
        // //////////////////////***************************************** */

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=${lang}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
            .then(response => {
                console.log("response", response)
                setWeather(response.data)
            }).catch(error => {
                alert("Veri alınırken hata oluştu!")
            })
    }

    useEffect(() => {
        latitude && longitude && getWeatherData(latitude, longitude)
        //eslint-disable-next-line
    }, [latitude, longitude])

    return (
        <>

            <h1>Weather App</h1>

            <HavaDurumu weather={weather} />

        </>
    )

}


export default App;