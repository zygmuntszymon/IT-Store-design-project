import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function ShoppingCart() {

    const [selectedDelivery, setSelectedDelivery] = useState('kurier');
    const [selectedPayment, setSelectedPayment] = useState('blik');

    return (
        <div className="w-full flex flex-row justify-center items-center !pt-[20px]">
            <div className="!mx-auto w-[1300px] flex justify-between items-center flex-col">

                <div className="flex flex-row justify-between border-b-2 w-full">
                    <p className="text-[30px] font-bold">Koszyk <span className="text-gray-500">(4)</span></p>
                    <div className='flex items-center justify-center hover:text-gray-400 cursor-pointer'>
                        <svg class="w-8 h-8 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd" />
                        </svg>
                        Wyczyść koszyk
                    </div>
                </div>
                <div className='w-full flex flex-row !mt-8 justify-between'>
                    <div className="w-[70%]">

                        <p className="w-full text-[20px] font-bold px-4">1. Sposób dostawy</p>

                        <div className="w-full">
                            <div className='flex flex-col justify-between items-center px-4 py-4'>
                                <div
                                    className={`w-[600px] text-left border-2 p-3 flex flex-row cursor-pointer ${selectedDelivery === 'kurier' ? 'border-violet-700 bg-gray-100' : selectedDelivery === 'salon' ? 'border-b-0' : 'hover:bg-gray-100'}`}
                                    onClick={() => setSelectedDelivery('kurier')}
                                >
                                    <input type="radio" checked={selectedDelivery === 'kurier'} className='!mr-4' readOnly />
                                    <p>Dostawa kurierem <span className='text-gray-500'>16,00zł</span></p>
                                </div>
                                <div
                                    className={`w-[600px] text-left border-2 p-3 flex flex-row cursor-pointer ${selectedDelivery === 'salon' ? 'border-violet-700 bg-gray-100' : 'border-t-0 border-b-0 hover:bg-gray-100'}`}
                                    onClick={() => setSelectedDelivery('salon')}
                                >
                                    <input type="radio" checked={selectedDelivery === 'salon'} className='!mr-4' readOnly />
                                    <p>Odbiór w salonie store.it <span className='text-gray-500'>(bezpłatne)</span></p>
                                </div>
                                <div
                                    className={`w-[600px] text-left border-2 p-3 flex flex-row cursor-pointer ${selectedDelivery === 'inpost' ? 'border-violet-700 bg-gray-100' : selectedDelivery === 'salon' ? 'border-t-0' : 'hover:bg-gray-100'}`}
                                    onClick={() => setSelectedDelivery('inpost')}
                                >
                                    <input type="radio" checked={selectedDelivery === 'inpost'} className='!mr-4' readOnly />
                                    <p>Paczkomaty inPost <span className='text-gray-500'>20,00zł</span></p>
                                </div>
                            </div>
                        </div>
                        <p className="w-full text-[20px] font-bold !mt-8 px-4">2. Metoda płatności</p>

                        <div className='flex flex-col justify-between items-center px-4 py-4'>
                            <div
                                className={`w-[600px] text-left border-2 p-3 flex flex-row cursor-pointer ${selectedPayment === 'przelew' ? 'border-violet-700 border-t-2 border-b-2 bg-gray-100' : 'border-t-2 hover:bg-gray-100'}`}
                                onClick={() => setSelectedPayment('przelew')}
                            >
                                <input type="radio" checked={selectedPayment === 'przelew'} className='!mr-4' readOnly />
                                <p>Przelew tradycyjny <span className='text-gray-500'>(bezpłatne)</span></p>
                            </div>
                            <div
                                className={`w-[600px] text-left border-2 p-3 flex flex-row cursor-pointer ${selectedPayment === 'blik' ? 'border-violet-700 border-t-2 border-b-2 bg-gray-100' : selectedPayment !== 'przelew' && selectedPayment !== 'blik' ? 'border-t-0 hover:bg-gray-100' : 'border-t-2 hover:bg-gray-100'}`}
                                onClick={() => setSelectedPayment('blik')}
                            >
                                <input type="radio" checked={selectedPayment === 'blik'} className='!mr-4' readOnly />
                                <p>BLIK <span className='text-gray-500'>1,53zł</span></p>
                            </div>
                            <div
                                className={`w-[600px] text-left border-2 p-3 flex flex-row cursor-pointer ${selectedPayment === 'payu' ? 'border-violet-700 border-t-2 border-b-2 bg-gray-100' : selectedPayment !== 'blik' && selectedPayment !== 'payu' ? 'border-t-0 hover:bg-gray-100' : 'border-t-2 hover:bg-gray-100'}`}
                                onClick={() => setSelectedPayment('payu')}
                            >
                                <input type="radio" checked={selectedPayment === 'payu'} className='!mr-4' readOnly />
                                <p>Szybki przelew PayU <span className='text-gray-500'>(bezpłatne)</span></p>
                            </div>
                            <div
                                className={`w-[600px] text-left border-2 p-3 flex flex-row cursor-pointer ${selectedPayment === 'raty' ? 'border-violet-700 border-t-2 border-b-2 bg-gray-100' : selectedPayment !== 'payu' && selectedPayment !== 'raty' ? 'border-t-0 hover:bg-gray-100' : 'border-t-2 hover:bg-gray-100'}`}
                                onClick={() => setSelectedPayment('raty')}
                            >
                                <input type="radio" checked={selectedPayment === 'raty'} className='!mr-4' readOnly />
                                <p>Raty <span className='text-gray-500'>(bezpłatne)</span></p>
                            </div>
                            <div
                                className={`w-[600px] text-left border-2 p-3 flex flex-row cursor-pointer ${selectedPayment === 'odbior' ? 'border-violet-700 border-t-2 bg-gray-100' : selectedPayment !== 'raty' && selectedPayment !== 'odbior' ? 'border-t-0 hover:bg-gray-100' : 'border-t-2'}`}
                                onClick={() => setSelectedPayment('odbior')}
                            >
                                <input type="radio" checked={selectedPayment === 'odbior'} className='!mr-4' readOnly />
                                <p>Przy odbiorze <span className='text-gray-500'>10,00zł</span></p>
                            </div>
                        </div>























                        <p className="w-full text-[20px] font-bold !mt-8 px-4">3. Dane do wysyłki</p>

                        <div className="w-full">
                            <div className='flex flex-col justify-between items-center px-4 py-4'>
                                <div className='w-[600px] text-left border-2 p-3 flex flex-row !mb-4'>
                                    <input type="text" className='!mr-4 w-full' placeholder='Imie i nazwisko' />
                                </div>
                                <div className='w-[600px] text-left border-2 p-3 flex flex-row !mb-4'>
                                    <input type="text" className='!mr-4 w-full' placeholder='Ulica i numer' />
                                </div>
                                <div className='w-[600px] text-left border-2 p-3 flex flex-row !mb-4'>
                                    <input type="text" className='!mr-4 w-full' placeholder='Kod pocztowy' />
                                </div>
                                <div className='w-[600px] text-left border-2 p-3 flex flex-row !mb-4'>
                                    <input type="text" className='!mr-4 w-full' placeholder='Miejscowość' />
                                </div>
                                <div className='w-[600px] text-left border-2 p-3 flex flex-row !mb-4'>
                                    <input type="text" className='!mr-4 w-full' placeholder='E-mail' />
                                </div>
                                <div className='w-[600px] text-left border-2 p-3 flex flex-row !mb-4'>
                                    <input type="text" className='!mr-4 w-full' placeholder='Telefon' />
                                </div>
                                <div className='w-[600px] flex flex-row items-center justify-start'>
                                    <input type="checkbox" className='!mb-3' />
                                    <span>Chcę otrzymać fakturę elektroniczną</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='!ml-10 w-[30%] h-max border-2 rounded-lg p-6 flex flex-col items-center justify-start'>
                        <div className='w-full flex flex-row justify-between items-center font-bold text-[18px]'>
                            <p>Łączna kwota</p>
                            <p>2 676,53</p>
                        </div>
                        <Link className='w-full' to='dostawa'>
                            <button className="!mt-4 w-full h-[42px] bg-violet-700 rounded-lg text-white transition hover:bg-violet-600 ">Przejdź do podsumowania <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15.141 6 5.518 4.95a1.05 1.05 0 0 1 0 1.549l-5.612 5.088m-6.154-3.214v1.615a.95.95 0 0 0 1.525.845l5.108-4.251a1.1 1.1 0 0 0 0-1.646l-5.108-4.251a.95.95 0 0 0-1.525.846v1.7c-3.312 0-6 2.979-6 6.654v1.329a.7.7 0 0 0 1.344.353 5.174 5.174 0 0 1 4.652-3.191l.004-.003Z" />
                            </svg>
                            </button>
                        </Link>
                        <button className="!mt-4 w-full h-[42px] bg-gray-100 border-2 rounded-lg text-black transition hover:bg-white ">Oblicz ratę lub leasing
                        </button>
                        <p className='!mt-4'>Masz kod promocyjny?</p>
                        <div className='w-full'>
                            <input type="text" className="!my-4 w-[65%] h-[42px] font-thin text-[14px] px-2 py-2 border-[1px] border-r-0 border-gray-400 rounded-l-lg" placeholder="Kod promocyjny" />
                            <button className='w-[35%] h-[42px] px-2 py-2 border-[1px] border-gray-400 rounded-r-lg bg-violet-700 text-white'>Aktywuj <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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