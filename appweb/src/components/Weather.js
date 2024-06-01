import React, { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import './Weather.css';

const Weather = () => {
    const defaultCity = 'Mexico City'; // Ciudad por defecto

    const [input, setInput] = useState(defaultCity); // Ciudad por defecto
    const [weather, setWeather] = useState({
        loading: true, // Inicia con carga activada
        data: {}, // Datos vacíos inicialmente
        error: false,
    });

    useEffect(() => {
        searchWeather(defaultCity); // Cargar datos de la ciudad por defecto al iniciar
    }, []); // Ejecutar una vez al montar el componente

    const toDateFunction = () => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const WeekDays = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
        const currentDate = new Date();
        const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
        return date;
    };

    const searchWeather = async (city) => {
        setWeather({ ...weather, loading: true }); // Inicia la carga

        const url = 'https://api.openweathermap.org/data/2.5/weather';
        const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
        try {
            const res = await axios.get(url, {
                params: {
                    q: city,
                    units: 'metric',
                    appid: api_key,
                },
            });
            setWeather({ data: res.data, loading: false, error: false });
        } catch (error) {
            setWeather({ ...weather, data: {}, error: true });
            console.log('error', error);
        }
    };

    const search = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setInput('');
            searchWeather(input); // Buscar la ciudad ingresada por el usuario
        }
    };

    return (
        <div className="weather-widget">
            <h1 className="app-name">Weather App</h1>
            <div className="search-bar">
                <input
                    type="text"
                    className="city-search"
                    placeholder="Enter City Name.."
                    name="query"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyPress={search}
                />
            </div>
            {weather.loading && (
                <>
                    <br />
                    <br />
                    <Oval type="Oval" color="black" height={100} width={100} />
                </>
            )}
            {weather.error && (
                <>
                    <br />
                    <br />
                    <span className="error-message w3-text-red">
                        <FontAwesomeIcon icon={faFrown} />
                        <span className="w3-large">City not found</span>
                    </span>
                </>
            )}
            {weather && weather.data && weather.data.main && (
                <div>
                    <div className="city-name w3-text-center">
                        <h2 className="w3-text-large">
                            {weather.data.name}, <span>{weather.data.sys.country}</span>
                        </h2>
                    </div>
                    <div className="date">
                        <span>{toDateFunction()}</span>
                    </div>
                    <div className="icon-temp">
                        <img
                            className=""
                            src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
                            alt={weather.data.weather[0].description}
                        />
                        {Math.round(weather.data.main.temp)}
                        <sup className="deg">°C</sup>
                    </div>
                    <div className="des-wind">
                        <p>{weather.data.weather[0].description.toUpperCase()}</p>
                        <p>Wind Speed: {weather.data.wind.speed}m/s</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;
