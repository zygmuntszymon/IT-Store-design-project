import { Link } from 'react-router-dom';



export default function CardFull({ id, image, title, price,gpu,ram,cpu,os }) {

    return (
        <Link to={`/produkt/${id}`}>
            <div className="!mx-auto w-[1000px] h-[250px] bg-white rounded-lg flex flex-row justify-between items-center py-2 border-[1px] !mb-4 transition hover:border-gray-600">
                <div className="flex px-8">
                    <img src={image} alt={title} className='max-h-[180px] object-cover' />

                    <div className='w-max flex flex-col justify-start items-start mt-4 !ml-8'>
                        <h3 className='text-[15px] font-semibold'>{title}</h3>
                        <div className="flex flex-row">
                            {[...Array(4)].map((_, i) => (
                                <svg key={i} className="w-[18px] h-[18px] text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                </svg>
                            ))}
                            <svg className="w-[18px] h-[18px] text-yellow-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                            </svg>
                            <p className="!ml-2 text-[14px] !mb-2">(14)</p>
                        </div>
                        <p className="text-[13px]">
                            Układ graficzny: <b>{gpu}</b> <br />
                            Pamięc RAM: <b>{ram}</b> <br />
                            Procesor: <b>{cpu}</b><br />
                            System Operacyjny: <b>{os}</b> <br />
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-start px-8">
                    <div>
                        <p><span className='text-[24px]'>{price},00 zł</span></p>
                        <u className="text-[15px]">rata od {(price / 40).toFixed(2)}</u>
                    </div>

                    <div className="!mt-3 flex flex-col justify-center items-start">
                        <p className="text-[15px] text-green-600 font-bold">Darmowa dostawa</p>
                        <p>U ciebie za 3 dni</p>
                    </div>

                    <a href='/koszyk' className='!mt-4 px-8 py-3 bg-violet-800 hover:bg-violet-900 text-white rounded-md z-[1000]'>Dodaj do koszyka</a>
                </div>
            </div>
        </Link>
    );
}
