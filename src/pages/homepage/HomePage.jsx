import React from 'react';
import Banner from '../../components/homepageCompo/Banner';
import Friends from '../../components/homepageCompo/Friends';
import StatCards from '../../components/homepageCompo/statCards';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <StatCards></StatCards>
            <Friends></Friends>
        </div>
    );
};

export default HomePage;