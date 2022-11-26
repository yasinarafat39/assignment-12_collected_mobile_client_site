import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {

    
    return (
        <div className='border rounded-xl '>
            <Link to="" className='hover:shadow-lg flex justify-center'>
                <img src={category.picture} className='w-38 h-28 p-3' alt="category-logo" />
            </Link>
        </div>
    );
};

export default Category;