import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Filter from "./Filter";
import CardFull from './CardFull';
import productsData from '../products.json';

import preyon from '../media/kategorie/komputery/preyon.jpg';
import gamex from '../media/kategorie/komputery/gamex.jpg';
import unity from '../media/kategorie/komputery/unity.jpg';

const images = {
    preyon,
    gamex,
    unity
};


export default function Results() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOption, setSortOption] = useState('cena-malejąco');

    const handleFilter = (selectedManufacturers, selectedConditions) => {
        const filtered = products.filter(product => selectedManufacturers.includes(product.producent) && selectedConditions.includes(product.condition));
        setFilteredProducts(filtered);
    };

    useEffect(() => {
        setProducts(productsData);
    }, []);

    useEffect(() => {
        if (category && products.length > 0) {
            filterProducts(category);
        }
    }, [category, products]);

    useEffect(() => {
        sortProducts(sortOption);
    }, [sortOption]);

    useEffect(() => {
        console.log('Filtered Products:', filteredProducts);
    }, [filteredProducts]);

    const filterProducts = (category) => {
        const filtered = products.filter(product => product.category === category.toLowerCase());
        setFilteredProducts(filtered);
    };

    const sortProducts = (option) => {
        let sorted = [...filteredProducts];
        switch (option) {
            case 'cena-rosnąco':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'cena-malejąco':
                sorted.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        setFilteredProducts(sorted);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    return (
        <div className='!mx-auto max-w-[1300px] flex items-start justify-between flex-row !mt-4'>
        <Filter products={filteredProducts} onFilter={handleFilter} />
            <div className="">
                <div className="text-[14px] p-2 float-right">
                    Sortowanie:
                    <select name="sort" id="sort" onChange={handleSortChange}>
                        <option value="cena-rosnąco" className="text-right">po cenie rosnąco</option>
                        <option value="cena-malejąco" className="text-right">po cenie malejąco</option>
                    </select>
                </div>
                <br />

                {filteredProducts.map(product => (
                    <CardFull
                        key={product.id}
                        id={product.id}
                        image={images[product.images[0]]}
                        title={product.title}
                        price={product.price}
                        gpu={product.gpu}
                        cpu={product.cpu}
                        ram={products.ram}
                        os={product.os}
                    />
                ))}
            </div>
        </div>
    )
}
