import React from 'react';
import Banner from '../../components/homepageCompo/Banner';
import SummaryCards from '../../components/homepageCompo/SummaryCards';
import Friends from '../../components/homepageCompo/Friends';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <SummaryCards></SummaryCards>
            <Friends></Friends>
        </div>
    );
};

export default HomePage;