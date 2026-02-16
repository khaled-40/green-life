import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const PlantDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);

    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        name: user?.displayName || "",
        email: user?.email || ""
    });

    useEffect(() => {
        fetch("/plants.json")
            .then(res => res.json())
            .then(data => {
                const found = data.find(p => p.plantId === parseInt(id));
                setPlant(found);
                setLoading(false);
            });
    }, [id]);

    const handleSubmit = e => {
        e.preventDefault();

        toast.success("Consultation booked successfully!");

        setFormData({
            name: user?.displayName || "",
            email: user?.email || ""
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (!plant) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <h2 className="text-2xl font-semibold">Plant not found</h2>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-base-100 py-16">
            <div className="max-w-6xl mx-auto px-4">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Image */}
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={plant.image}
                            alt={plant.plantName}
                            loading="lazy"
                            className="w-full h-112.5 object-cover"
                        />
                    </div>

                    {/* Right: Details */}
                    <div>

                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            {plant.plantName}
                        </h1>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {plant.description}
                        </p>

                        <div className="space-y-3 mb-8">
                            <p className="text-lg font-semibold text-green-600">
                                Price: ${plant.price}
                            </p>
                            <p>⭐ Rating: {plant.rating}</p>
                            <p>Stock Available: {plant.availableStock}</p>
                            <p>Care Level: {plant.careLevel}</p>
                            <p className="text-sm text-gray-500">
                                Provider: {plant.providerName}
                            </p>
                        </div>

                        {/* Consultation Form */}
                        <div className="bg-white shadow-md rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4">
                                Book Consultation
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">

                                <div>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        required
                                        onChange={e =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        placeholder="Your Name"
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        required
                                        onChange={e =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        placeholder="Your Email"
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
                                >
                                    Book Now
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlantDetails;
