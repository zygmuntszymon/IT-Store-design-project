import React, { useState } from 'react';


export default function Filter({ products }) {
    const [minPrice, setMinPrice] = useState(90);
    const [maxPrice, setMaxPrice] = useState(500);

    const handleMinPriceChange = (event) => {
        setMinPrice(parseInt(event.target.value));
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(parseInt(event.target.value));
    };

    const manufacturers = [...new Set(products.map(product => product.producent))];
    const conditions = [...new Set(products.map(product => product.condition))];

    return (



        <div className="!mt-9 w-1/5 p-4  text-right flex flex-col justify-between items-center border-r-[2px] text-[14px]">

            <b className='text-[18px] !mb-4'>Filtrowanie</b>

            <label htmlFor="minPrice">Cena od: <span className='font-bold'>{minPrice}</span></label>
            <input
                type="range"
                id="minPrice"
                min="0"
                max="2133"
                value={minPrice}
                onChange={handleMinPriceChange}
                step="10"
            />
            <label htmlFor="maxPrice">Cena do: <span className='font-bold'>{maxPrice}</span></label>
            <input
                type="range"
                id="maxPrice"
                min="0"
                max="2133"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                step="10"
            />
            <div className="w-[80%] text-left !mt-4">
            <span>Producenci:</span>
                {manufacturers.map((manufacturer, index) => (
                    <div key={index}>
                        <label>
                            <input type="checkbox" name="brand" value={manufacturer} />
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
                            <input type="checkbox" name="condition" value={condition} />
                            {condition} ({products.filter(product => product.condition === condition).length})
                        </label>
                    </div>
                ))}
            </div>
            <button className='!mt-4 w-[80%] py-2 bg-violet-800 hover:bg-violet-900 text-white rounded-md'>Filtruj</button>
        </div>

    )
}