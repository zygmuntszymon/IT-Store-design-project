import React, { useState } from 'react';


export default function Filter() {
    const [minPrice, setMinPrice] = useState(90);
    const [maxPrice, setMaxPrice] = useState(500);

    const handleMinPriceChange = (event) => {
        setMinPrice(parseInt(event.target.value));
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(parseInt(event.target.value));
    };
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
                <span className='w-full text-[18px]'>Producenci:</span>
                <br />
                <label>
                    <input type="checkbox" name="brand" value="Lenovo" />
                    Lenovo (12)
                </label>
                <br />
                <label>
                    <input type="checkbox" name="brand" value="Xiaomi" />
                    Xiaomi (3)
                </label>
                <br />
                <label>
                    <input type="checkbox" name="brand" value="LG" />
                    LG (8)
                </label>
                <br />
                <label>
                    <input type="checkbox" name="brand" value="Samsung" />
                    Samsung (2)
                </label>
                <br />
                <label>
                    <input type="checkbox" name="brand" value="Asus" />
                    Asus (22)
                </label>
                <br />
                <label>
                    <input type="checkbox" name="brand" value="Acer" />
                    Acer (1)
                </label>
            </div>
            <div className="w-[80%] text-left !mt-4">
            <span className='w-full text-[18px]'>Stan:</span>
            <br />
                <label>
                    <input type="checkbox" name="stan" value="nowe" />
                    Nowe (19)
                </label>
                <br />
                <label>
                    <input type="checkbox" name="stan" value="uzywane" />
                    Używane (8)
                </label>
                <br />
                <label>
                    <input type="checkbox" name="stan" value="poleasingowe" />
                    Poleasingowe (11)
                </label>
                <br />
            </div>
            <button className='!mt-4 w-[80%] py-2 bg-violet-800 hover:bg-violet-900 text-white rounded-md'>Filtruj</button>
        </div>

    )
}