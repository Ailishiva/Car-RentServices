import React from 'react';

import carData from '../../assets/data/carData';

const Suggestions = () => {

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Notifications</p>
          <button type="button" className="text-white text-xs rounded p-1 px-2 bg-orange-theme "> 5 New</button>
        </div>
      </div>
      <div className="mt-5 ">
        {carData?.map((item, index) => (
          <div key={index} className="flex items-center leading-8 gap-5 border-b-1 border-color p-3">
            <div>
              <p className="font-semibold dark:text-gray-200">{item.carName}</p>
            </div>
          </div>
        ))}
        <div className="mt-5">
        </div>
      </div>
    </div>
  );
};

export default Suggestions;