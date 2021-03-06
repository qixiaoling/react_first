import React, {useState, useEffect, useContext} from 'react';
import {TempContext} from '../../context/TempProvider'
import './ForecastTab.css';
import axios from "axios";


const apiKey = 'b7ae113310db05940950e41fd1692a30';

function ForecastTab({coordinates}) {
    const{kelvinToMetric} = useContext(TempContext)
    const [forecasts, setForecasts] = useState(null);
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    function createDateString(timestamp){
        const day = new Date(timestamp * 1000);

        return day.toLocaleDateString('nl-NL', {weekday: 'long'});
    }
    useEffect(() => {
        async function fetchDataForecast() {
            setError(false);
            toggleLoading(true);
            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates?.lat}&lon=${coordinates?.lon}&exclude=minutely,current,hourly&appid=${apiKey}&lang=nl`);
                setForecasts(result.data.daily.slice(1,6));
                console.log(result.data)
            } catch (e) {
                console.error(e);
                setError(true);
            }
            toggleLoading(false);
        };
        if (coordinates) {
            fetchDataForecast();
        }
    }, [coordinates]);



    return (

        <div className="tab-wrapper">
            {loading && (<span>
                Loading...
            </span>)}
            {error && (
                <span>
                    Er is iets misgegaan met het ophalen van de data.
                </span>
            )}
            {!forecasts && !error && (
                <span className='no-forecast'>
                    Zoek eerste een locatie om het weer voor deze week te bekijken
                </span>
            )}
            {forecasts && forecasts.map((forecast)=>{
                return(
                    <article className="forecast-day" key={forecast.dt}>
                        <p className="day-description">
                            {createDateString(forecast.dt)}
                        </p>

                        <section className="forecast-weather">
                            <span>
                              {kelvinToMetric(forecast.temp.day)}
                            </span>
                            <span className="weather-description">
                                {forecast.weather[0].description}
                            </span>
                        </section>
                    </article>
                )
            })}

        </div>
    );
};

export default ForecastTab;
