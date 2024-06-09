import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../products.json'; // Importowanie pliku products.json
import { addToCart, getCart, removeFromCart, clearCart } from '../cart';

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
};

export default function Product() {
  
  const { id } = useParams(); // Pobierz identyfikator produktu z adresu URL
  const product = productsData.find(product => product.id === parseInt(id)); // Znajdź produkt zgodny z identyfikatorem


  const [selectedRam, setSelectedRam] = useState('16 GB');
  const [selectedSsd, setSelectedSsd] = useState('512 GB');
  const [selectedOs, setSelectedOs] = useState('Windows 11');

  const handleAddToCart = () => {
    addToCart(product); // Dodaj produkt do koszyka
  };

  return (
    <div className='w-full max-w-[1300px] !mx-auto !pt-[50px] flex justify-between items-start flex-row'>
      <div>
        <div>
          <img src={images[product.images[0]]} alt="" className='w-[450px]' />
          <div className='flex flex-row'>
          {product.images.map((imageName, index) => (
            <img 
              key={index} 
              src={images[imageName]} 
              alt={imageName} 
              className={`w-[85px] max-h-[85px] object-cover p-1 border-2 ${index === 0 ? '!mr-1' : '!ml-1'} ${index === 0 ? 'border-violet-700' : 'hover:border-violet-500 cursor-pointer'}`}
            />
          ))}
          </div>
        </div>

      </div>
      <div className='w-[800px] min-h-[600px] flex flex-col justify-start !ml-8'>
        <div className='text-left'>
          <p className='text-[28px]'>
            {product.title}
          </p>
          <div>
            <svg class="w-[17px] h-[17px] text-yellow-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>

            <svg class="w-[17px] h-[17px] text-yellow-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>

            <svg class="w-[17px] h-[17px] text-yellow-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>

            <svg class="w-[17px] h-[17px] text-yellow-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <svg class="w-[17px] h-[17px] text-yellow-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M13 4.024v-.005c0-.053.002-.353-.217-.632a1.013 1.013 0 0 0-1.176-.315c-.192.076-.315.193-.35.225-.052.05-.094.1-.122.134a4.358 4.358 0 0 0-.31.457c-.207.343-.484.84-.773 1.375a168.719 168.719 0 0 0-1.606 3.074h-.002l-4.599.367c-1.775.14-2.495 2.339-1.143 3.488L6.17 15.14l-1.06 4.406c-.412 1.72 1.472 3.078 2.992 2.157l3.94-2.388c.592-.359.958-.996.958-1.692v-13.6Zm-2.002 0v.025-.025Z" clip-rule="evenodd" />
            </svg>
            <span className='text-[14px] !ml-2'>(50 opinii)</span>
          </div>
        </div>
        <div className='flex flex-row justify-between !mt-5 '>
          <div className='w-[400px] border-t-2 text-[14px] py-4'>
            <p><u className='text-gray-500'>Procesor: </u> &nbsp; Intel® Core™ i5-12500H</p>
            <p><u className='text-gray-500'>Pamięć: </u> &nbsp; 32 GB</p>
            <p><u className='text-gray-500'>Grafika: </u> &nbsp; NVIDIA GeForce RTX 4060 + Intel Iris Xe Graphics</p>
            <p><u className='text-gray-500'>Dysk SSD M.2 PCIe: </u> &nbsp; 512 GB</p>
            <br />
            <div className='border-t-2 !mt-4 py-4'>
              <span>Pamięć RAM</span>
              <div className='flex '>
                <div
                  className={`text-center w-[120px] border-2 rounded-l-lg p-3 flex flex-row cursor-pointer ${selectedRam === '16 GB' ? 'border-violet-700 bg-gray-100' : 'border-r-0 hover:bg-gray-100'}`}
                  onClick={() => setSelectedRam('16 GB')}
                >
                  <p className='w-full'>16 GB</p>
                </div>
                <div
                  className={`text-center w-[120px] border-2 rounded-r-lg p-3 flex flex-row cursor-pointer ${selectedRam === '32 GB' ? 'border-violet-700 bg-gray-100' : 'border-l-0 hover:bg-gray-100'}`}
                  onClick={() => setSelectedRam('32 GB')}
                >
                  <p className='w-full'>32 GB</p>
                </div>
              </div>
            </div>

            <div className='border-t-2 !mt-4 py-4'>
              <span>Dysk SSD</span>
              <div className='flex '>
                <div
                  className={`text-center w-[120px] border-2 rounded-l-lg p-3 flex flex-row cursor-pointer ${selectedSsd === '512 GB' ? 'border-violet-700 bg-gray-100' : 'hover:bg-gray-100'}`}
                  onClick={() => setSelectedSsd('512 GB')}
                >
                  <p className='w-full'>512 GB</p>
                </div>
                <div
                  className={`text-center w-[120px] border-2 rounded-r-lg p-3 flex flex-row cursor-pointer ${selectedSsd === '1000 GB' ? 'border-violet-700 bg-gray-100' : 'border-l-0 hover:bg-gray-100'}`}
                  onClick={() => setSelectedSsd('1000 GB')}
                >
                  <p className='w-full'>1000 GB</p>
                </div>
              </div>
            </div>

            <div className='border-t-2 !mt-4 py-4'>
              <span>System operacyjny</span>
              <div className='flex '>
                <div
                  className={`text-center w-[120px] border-2 rounded-l-lg p-3 flex flex-row cursor-pointer ${selectedOs === 'Windows 11' ? 'border-violet-700 bg-gray-100' : 'hover:bg-gray-100'}`}
                  onClick={() => setSelectedOs('Windows 11')}
                >
                  <p className='w-full'>Windows 11</p>
                </div>
                <div
                  className={`text-center w-[120px] border-2 rounded-r-lg p-3 flex flex-row cursor-pointer ${selectedOs === 'Brak' ? 'border-violet-700 bg-gray-100' : 'border-l-0 hover:bg-gray-100'}`}
                  onClick={() => setSelectedOs('Brak')}
                >
                  <p className='w-full'>Brak</p>
                </div>
              </div>
            </div>

          </div>

          <div className='w-[320px] h-max border-2 text-right py-4 px-2 rounded-lg'>
            <p className='text-[28px] pr-2'>{product.price},00 zł</p>
            <div className='!mt-4 text-center'>
              <input type="number" className='border-2 w-[50px] h-[50px] text-center !mr-4 rounded-lg' value={1} />

              <a onClick={handleAddToCart} className='!mt-4 px-8 py-3 bg-violet-800 hover:bg-violet-900 text-white rounded-md z-[1000] cursor-pointer select-none'>Dodaj do koszyka<svg class="w-[17px] h-[17px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
              </svg>
              </a>
            </div>
            <div className='w-full flex !mt-4 px-2 border-t-2 !pt-2'>
              <div className='rounded-[100%] bg-green-300 !mr-4'>
                <svg class="w-[25px] h-[23px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
              </div>
              <span className='text-[14px]'>Dostępny</span>
            </div>
            <div className='w-full flex !mt-4 px-2 border-t-2 !pt-2'>
              <div className='rounded-[100%] bg-green-300 !mr-4'>
                <svg class="w-[25px] h-[23px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
              </div>
              <span className='text-[14px]'>Darmowa dostawa</span>
            </div>
            <div className='w-full flex !mt-4 px-2 border-t-2 !pt-2'>
              <div className='rounded-[100%] bg-green-300 !mr-4'>
                <svg class="w-[25px] h-[23px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                </svg>
              </div>
              <span className='text-[14px]'>Rata już od {(product.price/40).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}