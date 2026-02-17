import React from "react";
import { FaTint, FaSun, FaSeedling } from "react-icons/fa";

const tipsData = [
    {
        id: 1,
        title: "Watering Smartly",
        description:
            "Avoid overwatering. Most indoor plants prefer soil to dry slightly between watering cycles. Always check moisture before adding water.",
        icon: <FaTint size={28} />,
        accent: "bg-blue-100 text-blue-600"
    },
    {
        id: 2,
        title: "Proper Sunlight",
        description:
            "Place plants according to their light needs. Bright indirect light works for most species, while some thrive in low-light corners.",
        icon: <FaSun size={28} />,
        accent: "bg-yellow-100 text-yellow-600"
    },
    {
        id: 3,
        title: "Balanced Fertilizing",
        description:
            "Use diluted liquid fertilizer during growing seasons. Over-fertilizing can damage roots and stunt plant growth.",
        icon: <FaSeedling size={28} />,
        accent: "bg-green-100 text-green-600"
    }
];

const PlantCareTips = () => {
    return (
        <section className="py-20 bg-base-200">
            <div className="max-w-7xl mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Plant Care Tips
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Keep your indoor plants thriving year-round with simple,
                        expert-backed care practices.
                    </p>
                </div>

                {/* Tips Grid */}
                <div className="grid gap-8 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3">

                    {tipsData.map(tip => (
                        <div
                            key={tip.id}
                            className="bg-white rounded-2xl p-8 shadow-md 
                         hover:shadow-xl transition duration-300
                         group"
                        >

                            {/* Icon */}
                            <div
                                className={`w-14 h-14 flex items-center justify-center 
                           rounded-xl mb-6 ${tip.accent}
                           group-hover:scale-110 transition duration-300`}
                            >
                                {tip.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold mb-4">
                                {tip.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {tip.description}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default PlantCareTips;
