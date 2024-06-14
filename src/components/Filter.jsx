import React, { useState, useEffect } from 'react';

export default function Filter({ products, onFilter, category }) {
    const [filters, setFilters] = useState({
        minPrice: 0,
        maxPrice: 0,
        manufacturers: [],
        conditions: []
    });



    useEffect(() => {
        const maxProductPrice = Math.max(...products.map(product => product.price));
        setFilters(prevState => ({ ...prevState, maxPrice: maxProductPrice }));
    }, [products]);

    useEffect(()=>{
        handleFilter();
    }, [filters]);

    const handleFilterChange = (event) => {
        const { name, value, checked } = event.target;
        if (name === 'minPrice' || name === 'maxPrice') {
            setFilters(prevState => ({ ...prevState, [name]: parseInt(value) }));
        } else {
            setFilters(prevState => ({
                ...prevState,
                [name]: checked ? [...prevState[name], value] : prevState[name].filter(item => item !== value)
            }));
        }
    };

    const handleFilter = () => {
        onFilter(filters);
    };

    const manufacturers = [...new Set(products.filter(product => product.category === category).map(product => product.producent))];
    const conditions = [...new Set(products.filter(product => product.category === category).map(product => product.condition))];

    return (
        <div className="!mt-9 w-1/5 p-4 text-right flex flex-col justify-between items-center border-r-[2px] text-[14px]">
            <b className='text-[18px] !mb-4'>Filtrowanie</b>
            <label htmlFor="minPrice">Cena od: <span className='font-bold'>{filters.minPrice}</span></label>
            <input type="range" id="minPrice" name="minPrice" min="0" max={filters.maxPrice} value={filters.minPrice} onChange={handleFilterChange} step="10" />
            <label htmlFor="maxPrice">Cena do: <span className='font-bold'>{filters.maxPrice}</span></label>
            <input type="range" id="maxPrice" name="maxPrice" min="0" max={filters.maxPrice} value={filters.maxPrice} onChange={handleFilterChange} step="10" />
            <div className="w-[80%] text-left !mt-4">
                <span>Producenci:</span>
                {manufacturers.map((manufacturer, index) => (
                    <div key={index}>
                        <label>
                            <input type="checkbox" name="manufacturers" value={manufacturer} onChange={handleFilterChange} />
                            {manufacturer} ({products.filter(product => product.producent === manufacturer && product.category === category).length})
                        </label>
                    </div>
                ))}
            </div>
            <div className="w-[80%] text-left !mt-4">
                <span>Stan:</span>
                {conditions.map((condition, index) => (
                    <div key={index}>
                        <label>
                            <input type="checkbox" name="conditions" value={condition} onChange={handleFilterChange} />
                            {condition} ({products.filter(product => product.condition === condition && product.category === category).length})
                        </label>
                    </div>
                ))}
            </div>
            <button onClick={handleFilter} className='!mt-4 w-[80%] py-2 bg-violet-800 hover:bg-violet-900 text-white rounded-md'>Filtruj</button>
        </div>
    )
}
