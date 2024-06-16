import Card from "./Card";
import products from '../products.json';
import React, { useEffect, useState } from 'react';
import c_smartwatch from '../media/smartwatch.png'

const images = {
    "preyon": require('../media/kategorie/komputery/preyon.jpg'),
    "gamex": require('../media/kategorie/komputery/gamex.jpg'),
    "unity": require('../media/kategorie/komputery/unity.jpg'),
    "kowalski": require('../media/kategorie/komputery/kowalski.jpg'),
    "giga": require('../media/kategorie/laptopy/giga.jpg'),
    "msi": require('../media/kategorie/laptopy/msi.jpg'),
    "hp": require('../media/kategorie/laptopy/hp.jpg'),
    "lenovo": require('../media/kategorie/laptopy/lenovo.jpg')
  };


export default function Recommended() {

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        setProductData(products);
    }, []);

    return (
        <div>
            <div className="bg-white text-black w-full max-w-[1300px] pt-4 !mt-10 !mx-auto sm:pl-[350px] flex items-center justify-start border-t-2">
                <span className="text-[24px]">Polecane produkty</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:max-w-[1300px] !mx-auto">

                <div className="!mx-auto px-8 w-full py-20 sm:px-6 bg-gray-100 sm:w-[400px] h-[620px] !mr-6 rounded-[20px] sm:relative sm:top-[-30px] !mb-4 sm:!mb-0 flex flex-col items-center justify-between shadow-own">
                    <h2 className="text-[24px] font-semibold mb-4">Specjalna okazja</h2>
                    <img src={c_smartwatch} alt="Smartwatch" className="w-full h-auto" />
                    <button className="w-full py-6 bg-violet-800 hover:bg-violet-900 text-white rounded-md">
                        Sprawdź ofertę
                    </button>
                    <div className="text-right">
                        <span>Oferta ważna jeszcze przez: </span>
                        <span><b>11:23:44s</b></span>
                    </div>

                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {productData.map(product => (
                        <Card
                            key={product.id}
                            id={product.id}
                            image={images[product.images[0]]}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
                    <br />
                    <span></span>
                    <br />
                    <a href="/results/komputery" className="text-[14px]"><p className="w-full h-fit underline text-center sm:text-right">Zobacz więcej</p></a>
                </div>
            </div>
        </div>


    )
}