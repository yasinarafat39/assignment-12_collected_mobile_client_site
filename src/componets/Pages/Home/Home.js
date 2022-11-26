import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';

const Home = () => {
    useTitle('Home');
    return (
        <div className='mt-4'>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;