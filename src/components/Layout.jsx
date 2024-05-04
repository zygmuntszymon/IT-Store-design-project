import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect  } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth >= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='app'>
      <header className="bg-white flex flex-col justify-center items-center text-[13px]">
        <div className="h-20 max-w-[1300px] w-[80%] lg:w-[100%] flex flex-col sm:flex-row justify-between lg:justify-evenly items-center " >
          <Link to="/" className='text-[24px] sm:text-[40px] brand float-left text-violet-800'>store.it</Link>
          <div className='pl-2 w-full sm:w-[50%] sm:min-w-[400px] h-[40px] border border-slate-400 rounded-lg flex justify-between items-center'>
            <input type="text" className='w-full' placeholder='Czego szukasz?' />
            <select className='border-l-2 px-2'>
              <option value="everywhere">Wszędzie</option>
              <option value="everywhere">Komputery</option>
              <option value="everywhere">Smartfony</option>
              <option value="everywhere">Akcesoria</option>
            </select>
            <div className=" text-center w-[120px] h-[40px] bg-violet-800 rounded-r-lg cursor-pointer hover:bg-violet-600">
              <svg className="w-6 h-full text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
              </svg>
            </div>
          </div>
          <div className='flex'>
            <Link to="/pomoc">
              <div className='flex flex-col p-2 items-center justify-between w-[80px] text-[13px] rounded-lg transition-all hover:bg-gray-100'>
                <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z" />
                </svg>
                <span>Pomoc</span>
              </div>
            </Link>
            <Link to="/konto">
              <div className='flex flex-col p-2 items-center justify-between w-[80px] text-[13px] rounded-lg transition-all hover:bg-gray-100'>
                <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>Konto</span>
              </div>
            </Link>
            <Link to="/koszyk">
              <div className='flex flex-col p-2 items-center justify-between w-[80px] text-[13px] rounded-lg transition-all hover:bg-gray-100'>
                <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                </svg>
                <span>Koszyk</span>
              </div>
            </Link>
            <button className='flex sm:hidden flex-col p-2 items-center justify-between w-[80px] text-[13px] rounded-lg transition-all hover:bg-gray-100' onClick={toggleMenu}>
              <svg class="w-8 h-12 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isMenuOpen ? "" : "hidden"} !mt-14 sm:!mt-0 w-full flex items-center justify-center bg-gray-100`} id="header_2">
          <div className='max-w-[1300px] w-[80%] flex items-center justify-center flex-col sm:flex-row bg-gray-100  text-[13px]'>
            <Link to="/results" className='flex justify-center items-center text-center h-12 p-2 w-full border-b-2 sm:border-none sm:w-[130px] transition-all hover:bg-white'>
              Smartfony i smartwatche
            </Link>
            <Link to="/results" className='flex justify-center items-center text-center h-12 p-2 w-full border-b-2 sm:border-none sm:w-[130px] transition-all hover:bg-white'>
              Gaming i streaming
            </Link>
            <Link to="/results" className='flex justify-center items-center text-center h-12 p-2 w-full border-b-2 sm:border-none  sm:w-[130px] transition-all hover:bg-white'>
              Smarthome i lifestyle
            </Link>
            <Link to="/results" className='flex justify-center items-center text-center h-12 p-2 w-full border-b-2 sm:border-none sm:w-[130px] transition-all hover:bg-white'>
              Laptopy i komputery
            </Link>
            <Link to="/results" className='flex justify-center items-center text-center h-12 p-2 w-full border-b-2 sm:border-none sm:w-[130px] transition-all hover:bg-white'>
              Podzespoły komputerowe
            </Link>
            <Link to="/results" className='flex justify-center items-center text-center h-12 p-2 w-full border-b-2 sm:border-none sm:w-[130px] transition-all hover:bg-white'>
              TV i audio
            </Link>
            <Link to="/results" className='flex justify-center items-center text-center h-12 p-2 w-full border-b-2 sm:border-none sm:w-[130px] transition-all hover:bg-white'>
              Akcesoria
            </Link>
            <Link to="/results" className='flex justify-center items-center text-center h-12 p-2 w-full border-b-2 sm:border-none sm:w-[130px] transition-all hover:bg-white'>
              Urządzenia peryferyjne
            </Link>
          </div>
        </div>

      </header>
      <div className='px-3 pt-3'>
        <Outlet />
      </div>
      <div className="max-w-[1300px] w-full h-14 !mx-auto !mt-10 flex flex-col sm:flex-row items-center justify-between p-10">
            <nav>
            <u className="!mr-10">store.it</u>
              <a href="#" className='!mx-4'>Kontakt</a>
              <a href="#" className='!mx-4'>Reklamacje</a>
            </nav>
             &copy; 2024
        </div>
    </div>


  )
}