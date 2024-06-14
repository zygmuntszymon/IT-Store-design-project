import { Link } from 'react-router-dom';
import { getCart, removeFromCart, clearCart } from '../cart';
import { useState, useEffect } from 'react';

const images = {
    "preyon": require('../media/kategorie/komputery/preyon.jpg'),
    "preyon-1": require('../media/kategorie/komputery/preyon-1.jpg'),
    "preyon-2": require('../media/kategorie/komputery/preyon-2.jpg'),
    "preyon-3": require('../media/kategorie/komputery/preyon-3.jpg'),
    "preyon-4": require('../media/kategorie/komputery/preyon-4.jpg'),
    "gamex": require('../media/kategorie/komputery/gamex.jpg'),
    "gamex-1": require('../media/kategorie/komputery/gamex-1.jpg'),
    "gamex-2": require('../media/kategorie/komputery/gamex-2.jpg'),
    "gamex-3": require('../media/kategorie/komputery/gamex-3.jpg'),
    "gamex-4": require('../media/kategorie/komputery/gamex-4.jpg'),
    "unity": require('../media/kategorie/komputery/unity.jpg'),
    "unity-1": require('../media/kategorie/komputery/unity-1.jpg'),
    "unity-2": require('../media/kategorie/komputery/unity-2.jpg'),
    "unity-3": require('../media/kategorie/komputery/unity-3.jpg'),
    "unity-4": require('../media/kategorie/komputery/unity-4.jpg'),
    "kowalski": require('../media/kategorie/komputery/kowalski.jpg'),
    "kowalski-1": require('../media/kategorie/komputery/kowalski-1.jpg'),
    "kowalski-2": require('../media/kategorie/komputery/kowalski-2.jpg'),
    "kowalski-3": require('../media/kategorie/komputery/kowalski-3.jpg'),
    "kowalski-4": require('../media/kategorie/komputery/kowalski-4.jpg'),
    "giga": require('../media/kategorie/laptopy/giga.jpg'),
    "giga-1": require('../media/kategorie/laptopy/giga-1.jpg'),
    "giga-2": require('../media/kategorie/laptopy/giga-2.jpg'),
    "giga-3": require('../media/kategorie/laptopy/giga-3.jpg'),
    "giga-4": require('../media/kategorie/laptopy/giga-4.jpg'),
    "msi": require('../media/kategorie/laptopy/msi.jpg'),
    "msi-1": require('../media/kategorie/laptopy/msi-1.jpg'),
    "msi-2": require('../media/kategorie/laptopy/msi-2.jpg'),
    "msi-3": require('../media/kategorie/laptopy/msi-3.jpg'),
    "msi-4": require('../media/kategorie/laptopy/msi-4.jpg'),
};

export default function ShoppingCart() {
    const [cart, setCart] = useState(getCart());
    const totalCost = cart.reduce((total, product) => total + product.price, 0);

    const handleRemoveFromCart = (index) => {
        removeFromCart(index);
        setCart(getCart());
    };

    const handleClearCart = () => {
        clearCart();
        setCart(getCart());
    };

    useEffect(() => {
        setCart(getCart());
    }, []);

    return (
        <div className="w-full flex flex-row justify-center items-center !pt-[20px]">
            <div className="!mx-auto w-full min-w-[900px] max-w-[1300px] flex justify-between items-center flex-col">

                <div className="flex flex-row justify-between border-b-2 w-full">
                    <p className="text-[30px] font-bold">Koszyk <span className="text-gray-500">({cart.length})</span></p>
                    <div className='flex items-center justify-center hover:text-gray-400 cursor-pointer' onClick={handleClearCart}>
                        <svg class="w-8 h-8 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd" />
                        </svg>
                        Wyczyść koszyk
                    </div>
                </div>
                <div className='flex flex-row !mt-8'>
                    <div className="w-[70%] min-w-[900px] border-2 rounded-lg">
                        {cart.length < 1
                            &&
                            <div className='w-full h-full flex items-center justify-center text-[24px]'>
                                <p>Twój koszyk jest pusty!</p>
                            </div>

                        }
                        {cart.map((product, index) => (
                            <div className='flex flex-row justify-center items-center px-4 py-4 border-b-[1px]' key={product.id}>
                                <div className='flex items-center justify-center p-2 w-[130px]'>
                                    <img src={images[product.images[0]]} className='h-[80px]'></img>
                                </div>


                                <div className='w-[500px] text-left !pl-8'>
                                    <p>{product.title}</p>
                                </div>
                                <div className='flex flex-row items-center justify-center'>
                                    <span className='!mr-12 text-lg w-max'>{product.price}.00zł</span>
                                    <svg class="w-6 h-6 text-gray-800 hover:text-gray-400 cursor-pointer" onClick={() => handleRemoveFromCart(index)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='!ml-10 w-[30%] min-w-[400px] h-max border-2 rounded-lg p-6 flex flex-col items-center justify-start'>
                        <div className='w-full flex flex-row justify-between items-center font-bold text-[18px]'>
                            <p>Łączna kwota</p>
                            <p>{totalCost.toFixed(2)}zł</p>
                        </div>
                        <Link className='w-full' to='dostawa'>
                            <button className="!mt-4 w-full h-[42px] bg-violet-700 rounded-lg text-white transition hover:bg-violet-600 ">Przejdź do dostawy <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15.141 6 5.518 4.95a1.05 1.05 0 0 1 0 1.549l-5.612 5.088m-6.154-3.214v1.615a.95.95 0 0 0 1.525.845l5.108-4.251a1.1 1.1 0 0 0 0-1.646l-5.108-4.251a.95.95 0 0 0-1.525.846v1.7c-3.312 0-6 2.979-6 6.654v1.329a.7.7 0 0 0 1.344.353 5.174 5.174 0 0 1 4.652-3.191l.004-.003Z" />
                            </svg>
                            </button>
                        </Link>
                        <button className="!mt-4 w-full h-[42px] bg-gray-100 border-2 rounded-lg text-black transition hover:bg-white ">Oblicz ratę lub leasing
                        </button>
                        <p className='!mt-4'>Masz kod promocyjny?</p>
                        <div className='w-full'>
                            <input type="text" className="!my-4 w-[65%] h-[42px] font-thin text-[14px] px-2 py-2 border-[1px] border-r-0 border-gray-400 rounded-l-lg" placeholder="Kod promocyjny" /><button className='w-[35%] h-[42px] px-2 py-2 border-[1px] border-gray-400 rounded-r-lg bg-violet-700 text-white'>Aktywuj <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z" />
                            </svg>
                            </button>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}