import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCart } from '../cart';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth >= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [cartItems, setCartItems] = useState([]);

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [isDropdown2Open, setDropdown2Open] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const [isDropdown3Open, setDropdown3Open] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const [isDropdown4Open, setDropdown4Open] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const [isDropdown5Open, setDropdown5Open] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);

  const [isDropdown6Open, setDropdown6Open] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  const [isDropdown7Open, setDropdown7Open] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);

  const [isDropdown8Open, setDropdown8Open] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const cart = getCart();
    setCartItems(cart);
  }, []);

  return (
    <div className='app'>
      <header className="bg-white flex flex-col justify-center items-center text-[13px] relative z-[1000]">
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
            <Link to="/login">
              <div className='flex flex-col p-2 items-center justify-between w-[80px] text-[13px] rounded-lg transition-all hover:bg-gray-100'>
                <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>Konto</span>
              </div>
            </Link>
            <Link to="/koszyk">
            <div className={`flex flex-col p-2 items-center justify-between w-[80px] text-[13px] rounded-lg transition-all hover:bg-gray-100 ${cartItems.length > 0 ? 'text-violet-700' : ''}`}>
              <svg className={`w-6 h-6  ${cartItems.length > 0 ? 'text-violet-700' : 'text-gray-800'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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
            <div className='relative' onMouseEnter={() => { setDropdownOpen(true); setIsHovered(true); }} onMouseLeave={() => { setDropdownOpen(false); setIsHovered(false); }}>
              <Link to="/results/komputery" className={`flex justify-center items-center text-center h-12 p-2 w-full border-b-2 sm:border-none sm:w-[130px] transition-all ${isHovered ? 'bg-white' : ''}`}>
                Komputery
              </Link>
              {isDropdownOpen && (
                <div className='absolute left-0 w-max bg-white shadow rounded-b-md' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                  <Link to="/results/komputery" className='block py-2 px-4 hover:bg-gray-100'>Komputery stacjonarne</Link>
                  <Link to="/results/komputery" className='block py-2 px-4 hover:bg-gray-100'>Monitory</Link>
                  <Link to="/results/komputery" className='block py-2 px-4 hover:bg-gray-100'>Serwery</Link>
                  <Link to="/results/komputery" className='block py-2 px-4 hover:bg-gray-100'>Komputery All-In-One</Link>
                  <Link to="/results/komputery" className='block py-2 px-4 hover:bg-gray-100'>Gamingowe</Link>
                  <Link to="/results/komputery" className='block py-2 px-4 hover:bg-gray-100 rounded-b-md'>Komputery Poleasingowe</Link>
                </div>
              )}
            </div>

            <div className='relative' onMouseEnter={() => { setDropdown2Open(true); setIsHovered2(true); }} onMouseLeave={() => { setDropdown2Open(false); setIsHovered2(false); }}>
              <Link to="/results/laptopy" className={`flex justify-center items-center text-center h-12 p-2 w-full border-b-2 sm:border-none sm:w-[130px] transition-all ${isHovered2 ? 'bg-white' : ''}`}>
                Laptopy
              </Link>
              {isDropdown2Open && (
                <div className='absolute left-0 w-max bg-white shadow rounded-b-md' onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
                  <Link to="/results/laptopy" className='block py-2 px-4 hover:bg-gray-100'>Biznesowe</Link>
                  <Link to="/results/laptopy" className='block py-2 px-4 hover:bg-gray-100'>Gamingowe</Link>
                  <Link to="/results/laptopy" className='block py-2 px-4 hover:bg-gray-100 rounded-b-md'>Laptopy poleasingowe</Link>
                </div>
              )}
            </div>
            <div className='relative' onMouseEnter={() => { setDropdown3Open(true); setIsHovered3(true); }} onMouseLeave={() => { setDropdown3Open(false); setIsHovered3(false); }}>
              <Link to="/results" className={`flex justify-center items-center text-center h-12 p-2 w-full border-b-2 sm:border-none sm:w-[130px] transition-all ${isHovered3 ? 'bg-white' : ''}`}>
                Oprogramowanie
              </Link>
              {isDropdown3Open && (
                <div className='absolute left-0 w-max bg-white shadow rounded-b-md' onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100'>Systemy operacyjne</Link>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100'>Oprogramowanie antywirusowe</Link>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100'>Narzędzia do edycji wideo</Link>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100'>Oprogramowanie graficzne</Link>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100 rounded-b-md'>Pakiety biurowe</Link>
                </div>
              )}
            </div>
            <div className='relative' onMouseEnter={() => { setDropdown4Open(true); setIsHovered4(true); }} onMouseLeave={() => { setDropdown4Open(false); setIsHovered4(false); }}>
              <Link to="/results" className={`flex justify-center items-center text-center h-12 p-2 w-full border-b-2 sm:border-none sm:w-[130px] transition-all ${isHovered4 ? 'bg-white' : ''}`}>
                Telewizory
              </Link>
              {isDropdown4Open && (
                <div className='absolute left-0 w-max bg-white shadow rounded-b-md' onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)}>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100'>Telewizory QLED</Link>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100'>Telewizory 4K</Link>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100'>Projektory</Link>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100 rounded-b-md'>Odtwarzacze multimedialne</Link>
                </div>
              )}
            </div>
            <div className='relative' onMouseEnter={() => { setDropdown5Open(true); setIsHovered5(true); }} onMouseLeave={() => { setDropdown5Open(false); setIsHovered5(false); }}>
              <Link to="/results" className={`flex justify-center items-center text-center h-12 p-2 w-full border-b-2 sm:border-none sm:w-[130px] transition-all ${isHovered5 ? 'bg-white' : ''}`}>
                Smartfony
              </Link>
              {isDropdown5Open && (
                <div className='absolute left-0 w-max bg-white shadow rounded-b-md' onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)}>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100'>Smartfony iOS</Link>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100'>Smartfony Android</Link>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100'>Akcesoria do smartfonów</Link>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100 rounded-b-md'>Smartfony Poleasingowe</Link>
                </div>
              )}
            </div>
            <div className='relative' onMouseEnter={() => { setDropdown6Open(true); setIsHovered6(true); }} onMouseLeave={() => { setDropdown6Open(false); setIsHovered6(false); }}>
              <Link to="/results" className={`flex justify-center items-center text-center h-12 p-2 w-full border-b-2 sm:border-none sm:w-[130px] transition-all ${isHovered6 ? 'bg-white' : ''}`}>
                Podzespoły
              </Link>
              {isDropdown6Open && (
                <div className='absolute left-0 w-max bg-white shadow rounded-b-md' onMouseEnter={() => setIsHovered6(true)} onMouseLeave={() => setIsHovered6(false)}>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100'>Karty graficzne</Link>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100'>Procesory</Link>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100'>Pamięci RAM</Link>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100'>Dyski SSD / HDD</Link>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100'>Płyty główne</Link>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100 rounded-b-md'>Zasilacze</Link>
                </div>
              )}
            </div>
            <div className='relative' onMouseEnter={() => { setDropdown7Open(true); setIsHovered7(true); }} onMouseLeave={() => { setDropdown7Open(false); setIsHovered7(false); }}>
              <Link to="/results" className={`flex justify-center items-center text-center h-12 p-2 w-full border-b-2 sm:border-none sm:w-[130px] transition-all ${isHovered7 ? 'bg-white' : ''}`}>
                Akcesoria
              </Link>
              {isDropdown7Open && (
                <div className='absolute left-0 w-max bg-white shadow rounded-b-md' onMouseEnter={() => setIsHovered7(true)} onMouseLeave={() => setIsHovered7(false)}>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100'>Komputery stacjonarne</Link>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100 rounded-b-md'>Komputery Poleasingowe</Link>
                </div>
              )}
            </div>
            <div className='relative' onMouseEnter={() => { setDropdown8Open(true); setIsHovered8(true); }} onMouseLeave={() => { setDropdown8Open(false); setIsHovered8(false); }}>
              <Link to="/results" className={`flex justify-center items-center text-center h-12 p-2 w-full border-b-2 sm:border-none sm:w-[130px] transition-all ${isHovered8 ? 'bg-white' : ''}`}>
                Promocje
              </Link>
              {isDropdown8Open && (
                <div className='absolute left-0 w-max bg-white shadow rounded-b-md' onMouseEnter={() => setIsHovered8(true)} onMouseLeave={() => setIsHovered8(false)}>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100'>Kody rabatowe</Link>
                  <Link to="/results" className='block py-2 px-4 hover:bg-gray-100 rounded-b-md'>Zniżki dla stałych klientów</Link>
                </div>
              )}
            </div>
          </div>
        </div>

      </header>
      <div className='px-3 pt-3'>
        <Outlet />
      </div>
      <div className="max-w-[1300px] w-full h-14 !mx-auto !mt-10 flex flex-col sm:flex-row items-center justify-between p-10 border-t-2">
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