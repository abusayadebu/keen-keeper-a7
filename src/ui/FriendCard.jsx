import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
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
                    <Link to={`/friends/${id}`} className="card bg-base-100 shadow-md p-6">

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

                            </Link>
                        );
                    };

    export default FriendCard;