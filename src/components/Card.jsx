export default function Card(props) {
    return (
        <div className="!mx-auto w-[230px] h-[300px] bg-white rounded-lg flex flex-col justify-between items-center py-4 hover:shadow-md">
            <img src={props.image} alt={props.title} className='w-full h-auto max-h-[150px]' />
            <div className='flex flex-col justify-center items-center mt-4'>
                <div className="w-full">
                    <h3 className='text-sm font-semibold text-right'>{props.title}</h3>
                    <p className='text-base text-gray-600 text-right'>Cena: <span className='text-xl'>{props.price} zł</span></p>
                </div>

                <button className='!mt-4 px-2 py-2 bg-violet-800 hover:bg-violet-900 text-white rounded-md'>Dodaj do koszyka <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.268 6A2 2 0 0 0 14 9h1v1a2 2 0 0 0 3.04 1.708l-.311 1.496a1 1 0 0 1-.979.796H8.605l.208 1H16a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L4.686 5H4a1 1 0 0 1 0-2h1.5a1 1 0 0 1 .979.796L6.939 6h5.329Z" />
                    <path d="M18 4a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V8h2a1 1 0 1 0 0-2h-2V4Z" />
                </svg>

                </button>
            </div>
        </div>
    )
}
