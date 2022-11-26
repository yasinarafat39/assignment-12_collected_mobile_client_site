import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';



const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategories(data)
            })
    }, [])

    return (
        <section className='mt-20'>
            <h2 className='text-4xl font-bold text-center text-secondary'>Mobile Category: {categories.length}</h2>
            <p className='text-center mt-2 text-gray-500'>Choice Your Favorite Mobile</p>

            <div className='mt-8 grid grid-cols-3 gap-10'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
        </section>

    );
};

export default Categories;