import React from "react";

const experts = [
    {
        id: 1,
        name: "Daniel Carter",
        specialization: "Indoor Air Purification Specialist",
        image:
            "https://i.ibb.co.com/7tDZJ0RS/microsoft-edge-1-N49-Cn7-P0-Fg-unsplash.jpg"
    },
    {
        id: 2,
        name: "Sophia Mitchell",
        specialization: "Plant Nutrition & Soil Expert",
        image:
            "https://i.ibb.co.com/fd5cCchK/christina-wocintechchat-com-m-LQ1t-8-Ms5-PY-unsplash.jpg"
    },
    {
        id: 3,
        name: "Liam Anderson",
        specialization: "Low-Light Plant Consultant",
        image:
            "https://i.ibb.co.com/zVzrXZGZ/microsoft-365-b-WL-c09-Ys80-unsplash.jpg"
    },
    {
        id: 4,
        name: "Emma Rodriguez",
        specialization: "Urban Indoor Garden Designer",
        image:
            "https://i.ibb.co.com/LhZvSrrN/bruce-mars-8-YG31-Xn4d-Sw-unsplash.jpg"
    }
];

const GreenExperts = () => {
    return (
        <section className="py-20 bg-base-100">
            <div className="max-w-7xl mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Meet Our Green Experts
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Our plant specialists bring years of hands-on experience to help
                        you grow healthier indoor gardens.
                    </p>
                </div>

                {/* Experts Grid */}
                <div className="grid gap-10 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-4">

                    {experts.map(expert => (
                        <div
                            key={expert.id}
                            className="group text-center bg-white rounded-2xl shadow-md 
                         hover:shadow-xl transition duration-300 p-6"
                        >

                            {/* Image Wrapper (Controlled Size) */}
                            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6">
                                <img
                                    src={expert.image}
                                    alt={expert.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover 
                             group-hover:scale-105 
                             transition duration-500"
                                />
                            </div>

                            {/* Name */}
                            <h3 className="text-lg font-semibold mb-2">
                                {expert.name}
                            </h3>

                            {/* Specialization */}
                            <p className="text-sm text-primary font-medium">
                                {expert.specialization}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default GreenExperts;
