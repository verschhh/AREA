import React, { useState } from 'react';
import { InteractiveBox } from './WeatherSearchBox'

export const WeatherAction: React.FC = () => {
    const [forecastType, setForecastType] = useState<'Temperature' | 'Wind' | 'Humidity'>('Temperature');
    const [city, setCity] = useState('');
    const [value, setValue] = useState(0);

    return (
        <div>
            <InteractiveBox label="City" type="text" value={city} onChange={setCity} />
            <div className="flex space-x-2 justify-center">
                {['Temperature', 'Wind', 'Humidity'].map(type => (
                <button
                    key={type}
                    onClick={() => setForecastType(type as 'Temperature' | 'Wind' | 'Humidity')}
                    className={`px-3 py-1 rounded ${forecastType === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                >
                    {type}
                </button>
                ))}
            </div>
            <div className="flex flex-col items-center space-y-2">
                <span className="text-sm font-medium mb-2">Value: {value}</span>
                <input type="range" min="0" max="100" value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full"/>
            </div>
        </div>
    );
};