import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLocationData } from '../../api/weather-service';
import { WeatherModel } from '../../models/weather.model';
import arrowIcon from '../../assets/images/icons8-arrow-30.png';

const Home: React.FC = () => {
  const [geoData, setGeoData] = useState<WeatherModel>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((geoData) => {
        getLocationData(geoData).then(
          (response) => {
            console.log('response.data', response.data);
            setGeoData(response.data);
          },
          (error) => {
            console.log('error', error);
          }
        );
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="mx-5">
      <div className="text-center mb-10 mt-10">
        <h1 className="font-paytone-one text-3xl ">Do I need an ☂️?</h1>
      </div>
      <div className="flex justify-start flex-col">
        <h1 className="text-3xl font-bold">Right now</h1>
        <h1 className="first-letter:uppercase">
          {geoData?.weather[0].description} for the hour.
        </h1>
        <h1 className="first-letter:uppercase">
          {`${Math.floor(geoData?.wind.speed || 0)}m/s winds from ${
            geoData?.wind.deg
          } degrees.`}
        </h1>
        <div className="flex">
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${geoData?.weather[0].icon}@2x.png`}
              width={100}
            />
          </div>
          <div>
            <h1 className="text-7xl font-bold mt-2">
              {Math.floor(geoData?.main.temp || 0)}°
            </h1>
            <h2 className="text-gray-500 font-bold">
              Feels like {Math.floor(geoData?.main.feels_like || 0)}°
            </h2>
          </div>
        </div>
        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <p>Go check Hello Weather!</p>
          <p>
            The best Weather App{' '}
            <img width={15} className="inline-block" src={arrowIcon} alt="" />
          </p>
        </div>
      </div>
      <div className="flex justify-start flex-col">
        <h1 className="text-3xl font-bold">This morning</h1>
        <h1 className="first-letter:uppercase">
          {geoData?.weather[0].description} for the hour.
        </h1>
        <h1 className="first-letter:uppercase">
          {`${Math.round(geoData?.wind.speed || 0)}m/s winds from ${
            geoData?.wind.deg
          } degrees.`}
        </h1>
        <div className="flex">
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${geoData?.weather[0].icon}@2x.png`}
              width={100}
            />
          </div>
          <div>
            <h1 className="text-7xl font-bold mt-2">
              {Math.round(geoData?.main.temp || 0)}°C
            </h1>
          </div>
        </div>
      </div>

      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Erin Lindford</p>
            <p className="text-slate-500 font-medium">Product Engineer</p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
