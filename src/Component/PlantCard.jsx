import React from 'react';
import { Link } from 'react-router';

const PlantCard = ({ plant }) => {
    return (
        <div
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
        >
            {/* Image Wrapper */}
            <div className="relative w-full h-64 overflow-hidden">
                <img
                    src={plant.image}
                    alt={plant.plantName}
                    loading="lazy"
                    className="w-full h-full object-cover 
                             group-hover:scale-105 
                             transition duration-500"
                />
            </div>

            {/* Card Body */}
            <div className="p-5 flex flex-col justify-between h-50">
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                        {plant.plantName}
                    </h3>

                    <div className="flex items-center justify-between mb-2">
                        <span className="text-green-600 font-bold text-lg">
                            ${plant.price}
                        </span>

                        <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            ⭐ {plant.rating}
                        </span>
                    </div>
                </div>

                <Link
                    to={`/plants/${plant.plantId}`}
                    className="mt-4 inline-block text-center 
                    btn-primary text-white 
                             py-2 rounded-lg 
                             transition duration-300"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default PlantCard;