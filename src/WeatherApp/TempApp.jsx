import React, { useEffect, useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './css/style.css';

const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState(''); // Initialize with an empty string

    useEffect(() => {
        const fetchApi = async () => {
            if (search) {
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=cd308c630815620a70414e48f3205bde&units=metric`;
                const response = await fetch(url);
                const resJson = await response.json();
                if (resJson.main) {
                    setCity(resJson);
                } else {
                    setCity(null);
                }
            }
        };
        fetchApi();
    }, [search]);

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </div>

                {!city ? (
                    <p>No data found</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i><LocationOnIcon /></i>{city.name}
                            </h2>
                            <h1 className="temp">
                                {city.main.temp}°C
                            </h1>
                            <h3 className="tempin_max">
                                Min: {city.main.temp_min}°C | Max: {city.main.temp_max}°C
                            </h3>
                        </div>
                    </div>
                )}
            </div>
            <div className="waves wave-one"></div>
            <div className="waves wave-two"></div>
            <div className="waves wave-three"></div>
        </>
    );
}

export default TempApp;
