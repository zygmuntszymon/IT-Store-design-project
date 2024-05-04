import Filter from "./Filter";
import c_image from '../media/c1.jpg'
import c_image1 from '../media/c2.jpg'
import c_image2 from '../media/c3.jpg'
import c_image3 from '../media/c4.jpg'
import CardFull from './CardFull';

export default function Results() {
    return (
        <div className='!mx-auto max-w-[1300px] flex items-start justify-between flex-row !mt-4'>
            <Filter />
            <div className="">
                <div className="text-[14px] p-2 float-right">
                    Sortowanie:
                    <select name="" id="">
                        <option value="" className="text-center">po popularności rosnąco</option>
                        <option value="" className="text-center">po popularności malejąco</option>
                        <option value="" className="text-center">po cenie rosnąco</option>
                        <option value="" className="text-center">po cenie malejąco</option>
                    </select>
                </div>
                <br />
                <CardFull image={c_image} title={"Monitor Xiaomi"} price={1299} />
                <CardFull image={c_image1} title={"Monitor Lenovo"} price={1699} />
                <CardFull image={c_image2} title={"Laptop MSI"} price={2349} />
                <CardFull image={c_image3} title={"Laptop Aorus"} price={3999} />
                <CardFull image={c_image1} title={"Monitor Lenovo"} price={1699} />
                <CardFull image={c_image2} title={"Laptop MSI"} price={2349} />
                <CardFull image={c_image3} title={"Laptop Aorus"} price={3999} />
                <CardFull image={c_image} title={"Monitor Xiaomi"} price={1299} />
            </div>
        </div>
    )

}