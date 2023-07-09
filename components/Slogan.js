'use client'
import React, { useState, useEffect } from 'react';

const slogans = [
  'ಸತ್ಯಮೇವ ಜಯತೇ | Truth alone triumphs', // Truth alone triumphs
  'ಅಹಿಂಸಾ ಪರಮೋ ಧರ್ಮಃ | Non-violence is the highest virtue', // Non-violence is the highest virtue
  'ವಸುಧೈವ ಕುಟುಂಬಕಂ | The whole world is one family', // The whole world is one family
  'ವಿದ್ಯಾ ದದಾತಿ ವಿನಯಂ | Knowledge bestows humility ', // Knowledge bestows humility
  'ಯೋಗಃ ಕರ್ಮಸು ಕೌಶಲಂ | Excellence in action is yoga' // Excellence in action is yoga
];

const Slogan = () => {
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [showSlogan, setShowSlogan] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSlogan(false);
      setTimeout(() => {
        setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
        setShowSlogan(true);
      }, 500);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center h-14">
      <div
        className={`font-ubuntu text-gray-700 sm:text-sm md:text-sm font-extrabold opacity-0 transition-opacity duration-500 ${
          showSlogan ? 'opacity-100' : ''
        }`}
      >
        {slogans[currentSloganIndex]}
      </div>
    </div>
  );
};

export default Slogan;
