import React, { useEffect, useState } from 'react';

const Friends = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
            const res = await fetch("/friends.json");
            const data = await res.json();
            setFriends(data);
        };
        fetchFriends();
    }, []);


    return (
        <div className='container mx-auto my-10'>
            <h2 className='text-xl font-bold mb-5'>Your Friends</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    friends.map(friend => {
                        const {
                            id,
                            name,
                            picture,
                            email,
                            days_since_contact,
                            status,
                            tags,
                            bio
                        } = friend;

                        return (
                            <div key={id} className="card bg-base-100 shadow-md p-6">

                                {/* Image */}
                                <div className="flex justify-center">
                                    <img
                                        src={picture}
                                        alt={name}
                                        className="w-[80px] h-[80px] rounded-full"
                                    />
                                </div>

                                {/* Info */}
                                <div className="text-center mt-3">
                                    <h2 className="font-semibold text-lg">{name}</h2>
                                    <p className="text-sm text-gray-500">
                                        {days_since_contact}d ago
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap justify-center gap-2 mt-2">
                                    {
                                        tags.map((tag, index) => (
                                            <span key={index} className="badge bg-green-200 font-semibold uppercase py-4 rounded-2xl">
                                                {tag}
                                            </span>
                                        ))
                                    }
                                </div>

                                {/* Status */}
                                <div className="flex justify-center mt-3">
                                    <span className={`badge font-semibold uppercase py-4 rounded-2xl text-white ${status === "overdue" ? "badge-error" : status === "almost due" ? "badge-warning" : "badge-success"}`}>
                                    {status}
                                    </span>
                                </div>

                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Friends;