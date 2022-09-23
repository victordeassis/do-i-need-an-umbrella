import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLocationData } from '../../api/weather-service';

const Home: React.FC = () => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((geoData) =>
        getLocationData(geoData)
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <>
      <div className="text-center mb-10 mt-10">
        <h1 className="font-paytone-one text-3xl ">Do I need an ☂️?</h1>
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
    </>
  );
};

export default Home;
