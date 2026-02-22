import React from "react";

const experts = [
    {
        id: 1,
        name: "Daniel Carter",
        specialization: "Indoor Air Purification Specialist",
        image:
            "https://res.cloudinary.com/dfji3qdsk/image/upload/w_1200,c_scale,q_auto,f_auto/v1771751318/microsoft-edge-1N49Cn7P0Fg-unsplash_rr9mue.jpg"
    },
    {
        id: 2,
        name: "Sophia Mitchell",
        specialization: "Plant Nutrition & Soil Expert",
        image:
            "https://res.cloudinary.com/dfji3qdsk/image/upload/w_1200,c_scale,q_auto,f_auto/v1771751310/christina-wocintechchat-com-m-LQ1t-8Ms5PY-unsplash_xquxkg.jpg"
    },
    {
        id: 3,
        name: "Liam Anderson",
        specialization: "Low-Light Plant Consultant",
        image:
            "https://res.cloudinary.com/dfji3qdsk/image/upload/w_1200,c_scale,q_auto,f_auto/v1771751308/microsoft-365-bWL-c09Ys80-unsplash_txmus5.jpg"
    },
    {
        id: 4,
        name: "Emma Rodriguez",
        specialization: "Urban Indoor Garden Designer",
        image:
            "https://res.cloudinary.com/dfji3qdsk/image/upload/w_1200,c_scale,q_auto,f_auto/v1771751312/bruce-mars-8YG31Xn4dSw-unsplash_wrgv39.jpg"
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

                {/* Experts */}
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

                            {/* Image */}
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
