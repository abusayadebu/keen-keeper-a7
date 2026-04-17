import React, { useEffect, useState } from 'react';
import FriendCard from '../../ui/FriendCard';

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
                    friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
                }
            </div>
        </div>
    );
};

export default Friends;