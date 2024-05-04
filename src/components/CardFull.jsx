export default function CardFull(props) {
    return (
        <div className="!mx-auto w-[1000px] h-[200px] bg-white rounded-lg flex flex-row justify-evenly items-center py-4 border-[1px] !mb-4">
            <img src={props.image} alt={props.title} className='w-auto h-[90%] max-h-[150px]' />
            <div className='flex flex-col justify-center items-center mt-4'>
                <h3 className='text-sm font-semibold'>{props.title}</h3>
                <p className='text-base text-gray-600'>Cena: <span className='text-xl'>{props.price} zł</span></p>
            </div>
            <div className="flex justify-center items-center">
            <button className='px-2 py-2 bg-violet-800 hover:bg-violet-900 text-white rounded-md'>Dodaj do koszyka</button>
            <svg className="!ml-2 w-10 h-8 text-black cursor-pointer " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path className="flex items-center justify-center" stroke="currentColor" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
            </svg>
            </div>
        </div>
    )
}
