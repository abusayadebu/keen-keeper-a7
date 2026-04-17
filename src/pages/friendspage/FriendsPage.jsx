import React from 'react';
import useFriends from '../../hooks/useFriends';
import { RiseLoader } from 'react-spinners';
import FriendCard from '../../ui/FriendCard';

const FriendsPage = () => {
    const {friends, loading} = useFriends()
    return (
        <div className='container mx-auto my-10'>
            <h2 className='text-xl font-bold mb-5'>Your All Friends</h2>

            {loading ? <div className='flex justify-center'>
                <RiseLoader color="#244D3F"></RiseLoader>
                </div>
                 : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
                }
            </div>}
        </div>
    );
};

export default FriendsPage;