import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Filter from "./Filter";
import CardFull from './CardFull';
import productsData from '../products.json';

import preyon from '../media/kategorie/komputery/preyon.jpg';
import gamex from '../media/kategorie/komputery/gamex.jpg';
import unity from '../media/kategorie/komputery/unity.jpg';
import kowalski from '../media/kategorie/komputery/kowalski.jpg';
import giga from '../media/kategorie/laptopy/giga.jpg';
import msi from '../media/kategorie/laptopy/msi.jpg';
import hp from '../media/kategorie/laptopy/hp.jpg';
import lenovo from '../media/kategorie/laptopy/lenovo.jpg';

const images = {
    preyon,
    gamex,
    unity,
    kowalski,
    giga,
    msi,
    hp,
    lenovo
};

export default function Results() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOption, setSortOption] = useState('cena-malejąco');

    const handleFilter = (filters) => {
        const { manufacturers, conditions, minPrice, maxPrice } = filters;
        const filtered = products.filter(product =>
            (manufacturers.length === 0 || manufacturers.includes(product.producent)) &&
            (conditions.length === 0 || conditions.includes(product.condition)) &&
            product.price >= minPrice &&
            product.price <= maxPrice
        );
        setFilteredProducts(filtered);
    };

    useEffect(() => {
        const productsInCategory = productsData.filter(product => product.category === category.toLowerCase());
        setProducts(productsInCategory);
        setFilteredProducts(productsInCategory);
    }, [category]);

    useEffect(() => {
        let sorted = [...filteredProducts];
        switch (sortOption) {
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
    }, [sortOption]);

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    return (
        <div className='!mx-auto max-w-[1300px] flex items-start justify-between flex-row !mt-4'>
            <Filter products={products} onFilter={handleFilter} category={category} />
            <div className="">
                <div className="text-[14px] p-2 float-right">
                    Sortowanie:
                    <select name="sort" id="sort" onChange={handleSortChange}>
                        <option className="text-center">Wybierz</option>
                        <option value="cena-rosnąco" className="text-center">po cenie rosnąco</option>
                        <option value="cena-malejąco" className="text-center">po cenie malejąco</option>
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
                        ram={product.ram}
                        os={product.os}
                    />
                ))}
            </div>
        </div>
    )
}
