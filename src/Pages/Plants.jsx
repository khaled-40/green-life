import React, { useEffect, useState } from "react";
import PlantCard from "../Component/PlantCard";

const Plants = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/plants.json")
            .then(res => res.json())
            .then(data => {
                // sort by rating descending
                const sorted = [...data]
                    .sort((a, b) => b.rating - a.rating)
                setPlants(sorted);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="py-16 text-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <section className="py-16 bg-base-100">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Top Rated Indoor Plants
                </h2>

                <div className="grid gap-8 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-3">
                    {plants.map(plant => <PlantCard plant={plant}></PlantCard>)}
                </div>
            </div>
        </section>
    );
};

export default Plants;
