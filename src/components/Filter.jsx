import React, { useState } from 'react';


export default function Filter({ products, onFilter, category, condition }) {
    const [minPrice, setMinPrice] = useState(90);
    const [maxPrice, setMaxPrice] = useState(500);

    const maxProductPrice = Math.max(...products.map(product => product.price));

    const handleMinPriceChange = (event) => {
        setMinPrice(parseInt(event.target.value));
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(parseInt(event.target.value));
    };

    const manufacturers = [...new Set(products.filter(product => product.category === category).map(product => product.producent))];
    const conditions = [...new Set(products.filter(product => product.category === category).map(product => product.condition))];

    const [selectedManufacturers, setSelectedManufacturers] = useState([]);
    const [selectedConditions, setSelectedConditions] = useState([]);

    const handleManufacturerChange = (event) => {
        const { value, checked } = event.target;
        setSelectedManufacturers(prevState => checked ? [...prevState, value] : prevState.filter(manufacturer => manufacturer !== value));
    };

    const handleConditionChange = (event) => {
        const { value, checked } = event.target;
        setSelectedConditions(prevState => checked ? [...prevState, value] : prevState.filter(condition => condition !== value));
    };

    const handleFilter = () => {
        onFilter(selectedManufacturers, selectedConditions, minPrice, maxPrice);
    };
    return (



        <div className="!mt-9 w-1/5 p-4  text-right flex flex-col justify-between items-center border-r-[2px] text-[14px]">

            <b className='text-[18px] !mb-4'>Filtrowanie</b>

            <label htmlFor="minPrice">Cena od: <span className='font-bold'>{minPrice}</span></label>
            <input
                type="range"
                id="minPrice"
                min="0"
                max={maxProductPrice}
                value={minPrice}
                onChange={(event) => {
                    handleMinPriceChange(event);
                }}
                step="10"
            />
            <label htmlFor="maxPrice">Cena do: <span className='font-bold'>{maxPrice}</span></label>
            <input
                type="range"
                id="maxPrice"
                min="0"
                max={maxProductPrice}
                value={maxPrice}
                onChange={(event) => {
                    handleMaxPriceChange(event);
                }}
                step="10"
            />
            <div className="w-[80%] text-left !mt-4">
                <span>Producenci:</span>
                {manufacturers.map((manufacturer, index) => (
                    <div key={index}>
                        <label>
                            <input type="checkbox" name="brand" value={manufacturer} onChange={handleManufacturerChange} />
                            {manufacturer} ({products.filter(product => product.producent === manufacturer).length})
                        </label>
                    </div>
                ))}
            </div>
            <div className="w-[80%] text-left !mt-4">
                <span>Stan:</span>
                {conditions.map((condition, index) => (
                    <div key={index}>
                        <label>
                            <input type="checkbox" name="condition" value={condition} onChange={handleConditionChange} />
                            {condition} ({products.filter(product => product.condition === condition).length})
                        </label>
                    </div>
                ))}
            </div>
            <button onClick={handleFilter} className='!mt-4 w-[80%] py-2 bg-violet-800 hover:bg-violet-900 text-white rounded-md'>Filtruj</button>
        </div>

    )
}