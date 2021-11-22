import React from "react"

const HavaDurumu = (props) => {

    console.log("props", props)

    const { weather } = props

    console.log("weather", weather)


    if (!weather) {
        return <p>Yükleniyor...</p>
    }

    return (
        <>
            <h3>{weather.name}</h3>
            <h4>{weather.weather.map(item=>item.description).join(", ")}</h4>
            <p>{weather.main.temp} °C</p>
            <p>{new Date(weather.dt*1000).toLocaleDateString()}</p>

        </>
    )

}



export default HavaDurumu;