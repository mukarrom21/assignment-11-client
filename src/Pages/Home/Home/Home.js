import React from 'react';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;