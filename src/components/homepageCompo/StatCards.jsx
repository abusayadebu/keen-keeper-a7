import React from 'react';

const StatCards = () => {
    const stats = [
        { id: 1, title: "Total Friends", count: 10 },
        { id: 2, title: "On Track", count: 3 },
        { id: 3, title: "Need Attention", count: 6 },
        { id: 4, title: "Interactions This Month", count: 12 },
    ];

    return (
        <div className="container mx-auto py-14">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    
                    {stats.map(({ id, title, count }) => (
                        <div
                            key={id}
                            className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:scale-[1.02] transition duration-300 shadow-sm"
                        >
                            <span className="text-3xl sm:text-4xl font-extrabold text-[#244D3F]">
                                {count}
                            </span>

                            <span className="mt-2 text-sm sm:text-base text-gray-500 font-medium tracking-wide">
                                {title}
                            </span>
                        </div>
                    ))}

                </div>

            </div>
    );
};

export default StatCards;