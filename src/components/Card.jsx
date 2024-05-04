export default function Card(props) {
    return (
        <div className="!mx-auto w-[230px] h-[300px] bg-white rounded-lg flex flex-col justify-between items-center py-4 hover:shadow-md">
            <img src={props.image} alt={props.title} className='w-full h-auto max-h-[150px]' />
            <div className='flex flex-col justify-center items-center mt-4'>
                <h3 className='text-sm font-semibold'>{props.title}</h3>
                <p className='text-base text-gray-600'>Cena: <span className='text-xl'>{props.price} zł</span></p>
                <button className='!mt-4 px-2 py-2 bg-violet-800 hover:bg-violet-900 text-white rounded-md'>Dodaj do koszyka</button>
            </div>
        </div>
    )
}
