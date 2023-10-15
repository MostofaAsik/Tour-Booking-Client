import { FaLocationArrow } from 'react-icons/fa';
import { FaLocationDot, FaPeopleGroup } from "react-icons/fa6";

const SearchBar = () => {
    return (
        <div className="px-6">
            <form className="shadow-md p-2 md:flex md:items-center md:gap-2">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-2xl">Location</span>
                    </label>
                    <div className='relative'>
                        <input type="text" placeholder="Where ar you going" className="input input-bordered input-sm w-full max-w-xs px-7 text-xl" />
                        <FaLocationArrow color='orange' className='absolute top-2 left-2 ' />
                    </div>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-2xl">Distance</span>
                    </label>
                    <div className='relative '>
                        <input type="num" placeholder="Distance k/m" className="input input-bordered input-sm w-full max-w-xs px-7 text-xl" />
                        <FaLocationDot color='orange' className='absolute top-2 left-2 ' />
                    </div>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-2xl">Max People</span>
                    </label>
                    <div className='relative'>
                        <input type="text" placeholder="0" className="input input-bordered input-sm w-full max-w-xs px-7 text-xl" />
                        <FaPeopleGroup color='orange' className='absolute top-2 left-2 ' />
                    </div>
                </div>

            </form>

        </div>
    );
};

export default SearchBar;