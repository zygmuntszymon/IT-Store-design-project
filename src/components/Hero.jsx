import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import heroJPG from '../media/p1.png';
import ryzenJPG from '../media/ryzen.png';

export default function Hero() {
    return (
        <div className="shadow-own bg-violet-800 sm:h-[250px] p-8 !mx-auto !mt-12 sm:!mt-4 w-full sm:w-5/6 max-w-[1300px] flex flex-col sm:flex-row items-center justify-center rounded-[20px] overflow-hidden z-0 relative">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={3000}
                showStatus={false}
                showArrows={true}
                className="w-full"
            >
                <div className="flex flex-row sm:flex-row items-center justify-center w-[80%]  !mx-auto">
                    <img src={heroJPG} alt="Hero" className='sm:h-[250px] sm:w-1/4 w-full object-contain rotate-6' />

                    <div className='text-white flex flex-col justify-center items-center sm:w-3/4 w-full'>
                        <b className='uppercase text-[35px]'>Super oferta!</b>
                        <p>Zapisz się do newslettera aby otrzymać kod zniżkowy na <u>25%</u>!</p>
                        <span className='text-[14px] !mt-4 !mb-6'>
                            <input
                                type="text"
                                className='text-black h-10 px-2 w-[60%] sm:w-[240px] rounded-l-lg'
                                placeholder='Twój adres mailowy'
                            />
                            <button className='border-[1px] px-2 rounded-r-lg h-10 transition-all hover:bg-violet-700'>
                                Zapisz się!
                            </button>
                        </span>
                        <div className='w-3/4 flex flex-row items-center justify-between'>
                            <SocialIcon
                                className="w-6 h-6 text-white cursor-pointer transition-all hover:text-gray-300"
                                viewBox="0 0 24 24"
                                path="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                            />
                            <SocialIcon
                                className="w-6 h-6 text-white cursor-pointer transition-all hover:text-gray-300"
                                viewBox="0 0 24 24"
                                path="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                            />
                            <SocialIcon
                                className="w-6 h-6 text-white cursor-pointer transition-all hover:text-gray-300"
                                viewBox="0 0 24 24"
                                path="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                            />
                            <SocialIcon
                                className="w-6 h-6 text-white cursor-pointer transition-all hover:text-gray-300"
                                viewBox="0 0 24 24"
                                path="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"
                            />
                            <SocialIcon
                                className="w-6 h-6 text-white cursor-pointer transition-all hover:text-gray-300"
                                viewBox="0 0 24 24"
                                path="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row sm:flex-row items-center justify-center w-[80%]  !mx-auto">
                    <div className='text-white flex flex-col justify-center items-center sm:w-3/4 w-full'>
                        <b className='uppercase text-[30px]'>Promocja weekendowa</b>
                        <p>Procesor AMD Ryzen 5 5600 taniej o 40%!</p>
                        <span className='text-[14px] !mt-4 !mb-6'>
                            <a href='produkt' className='border-[1px] px-4 py-2 rounded h-12 transition-all hover:bg-gray-100 bg-white text-violet-700'>
                                Przejdź do produktu
                            </a>
                        </span>
                        <div className='w-3/4 flex flex-row items-center justify-between'>
                            <SocialIcon
                                className="w-6 h-6 text-white cursor-pointer transition-all hover:text-gray-300"
                                viewBox="0 0 24 24"
                                path="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                            />
                            <SocialIcon
                                className="w-6 h-6 text-white cursor-pointer transition-all hover:text-gray-300"
                                viewBox="0 0 24 24"
                                path="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                            />
                            <SocialIcon
                                className="w-6 h-6 text-white cursor-pointer transition-all hover:text-gray-300"
                                viewBox="0 0 24 24"
                                path="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                            />
                            <SocialIcon
                                className="w-6 h-6 text-white cursor-pointer transition-all hover:text-gray-300"
                                viewBox="0 0 24 24"
                                path="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"
                            />
                            <SocialIcon
                                className="w-6 h-6 text-white cursor-pointer transition-all hover:text-gray-300"
                                viewBox="0 0 24 24"
                                path="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0"
                            />
                        </div>
                    </div>
                    <img src={ryzenJPG} alt="Hero" className='sm:h-[235px] sm:w-1/4 w-full object-contain' />
                </div>
            </Carousel>
        </div>
    );
}

const SocialIcon = ({ className, viewBox, path }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} fill="currentColor">
        <path d={path} />
    </svg>
);
