import logo from '../../assets/photo-img/logo.png';
import house1 from '../../assets/photo-img/house1.jpg';
import house2 from '../../assets/photo-img/house2.jpg'
import { FaHourglassEnd, FaMapMarkerAlt, FaSearch, FaUser } from "react-icons/fa"
import map from '../../assets/photo-img/map.png';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Search() {
    const location = useLocation()
    const params = new URLSearchParams(location.search)

    const SearchData = {
        location: params.get('location'),
        checkIn: params.get('checkIn'),
        checkOut: params.get('checkOut'),
        guests: params.get('guests')
    }

    return (
        <section className="w-full bg-gray-100 p-8 flex flex-col items-start">
            <header className="flex items-center w-full justify-between ">


                {/* Logo */}
                <Link to='/'>
                    <div className='w-20 h-20 p-2 rounded-full flex items-center justify-center overflow-hidden'>
                        <img
                            src={logo}
                            alt="logo"
                            className=" w-full h-full object-contain" />

                    </div>
                </Link>

                {/* Search */}
                <div className='relative w-[35%]'>
                    <input
                        type="text"
                        name='search'
                        placeholder='Search by Name or Location....'
                        className='w-full p-2 pl-10 rounded-[15px] bg-green-100 font-bold focus:outline-none' />
                    <FaSearch className="absolute left-3  top-1/2 transform -translate-y-1/2 text-gray-500 " />
                </div>
                {/* Nav  */}
                <nav className='flex space-x-8 font-bold text-gray-700'>
                    <div className='cursor-pointer hover:text-green-600'>ABOUT US</div>
                    <div className='cursor-pointer hover:text-green-600'>FAQS</div>
                </nav>

                {/* Hambuger & Users */}
                <div className='flex items-center space-x-4 cursor-pointer bg-white rounded-[40px] px-4 py-2 shadow-xl'>
                    <div className='flex flex-col justify-between space-y-1'>
                        <div className='w-6 h-0.5 bg-gray-700'></div>
                        <div className='w-6 h-0.5 bg-gray-700'></div>
                        <div className='w-6 h-0.5 bg-gray-700'></div>
                    </div>

                    <div className='flex items-center justify-center border border-[100%] border-black hover:text-green-600
                    bg-gray-200 rounded-full w-10 h-10'>
                        <FaUser className='w-6 h-6' />
                    </div>
                </div>

                {/* Service Button */}
                <button className='bg-orange-600 text-white px-20 py-4 rounded-[50px] hover:bg-orange-400  shadow-xl shadow-gray-300'>Services</button>
            </header>

            {/* Content */}
            <div className='  w-full flex mt-9 '>
                {/* Left */}
                <div className=' w-[25%]'>
                    <div className='flex justify-between'>
                        <h1 className='text-gray-800 text-2xl font-bold mb-2 ml-2'>Filters</h1>
                        <button className='text-sky-700 mr-2'>Reset</button>
                    </div>

                    <form >
                        {/* Price */}
                        <form >
                            <label className='mt-10 text-gray-500 text-2xl font-bold ml-2 mb-2'>Prices</label>
                            <div className='flex gap-2 mt-1'>
                                <input
                                    type="text"
                                    placeholder='From'
                                    className=' pl-5 bg-green-300 w-1/2 h-9 px-2 py-6 rounded-[10px] text-2xl font-bold  ' />
                                <input
                                    type="text"
                                    placeholder='To'
                                    className=' pl-5 bg-green-300  w-1/2 h-9 py-6 rounded-[10px] text-2xl font-bold' />
                            </div>
                        </form>


                        {/* Property Type */}

                        <form className='flex flex-col space-y-2'>
                            <label className=' mt-1 text-gray-500 text-2xl font-bold ml-2 '>Property Type</label>
                            <select
                                name="rooms"
                                placeholder='Private Rooms'
                                className='p-2  bg-green-300 rounded-[10px] text-xl font-semibold text-gray-400'>
                                <option value="">Private Rooms</option>
                            </select>

                        </form>
                        {/* Grid Issue */}
                        <div className='space-y-2 mt-2'>
                            <label className=' text-gray-500 text-2xl font-bold ml-2'>Conveniences</label>
                            <div className='grid grid-cols-2 gap-3'>
                                <button className='bg-green-300 text-gray-500 p-4 rounded font-semibold'>TV</button>
                                <button className='bg-green-300 text-gray-500 p-4 rounded font-semibold'>Disabled Access</button>
                                <button className='bg-green-300 text-gray-500 p-4 rounded font-semibold'>Woods</button>
                                <button className='bg-green-300 text-gray-500 p-4 rounded font-semibold'>Lakes & Rivers</button>
                                <button className='bg-green-300 text-gray-500 p-4 rounded font-semibold'>Wifi  </button>
                                <button className='bg-green-300 text-gray-500 p-4 rounded font-semibold'>Pool</button>
                            </div>
                        </div>

                        {/* Guests */}

                        <div className='mt-2'>
                            <h3 className='text-gray-500 text-2xl font-bold ml-2'>Number of Guests</h3>
                            <div className='flex justify-between border bg-green-300 rounded-xl p-3 '>
                                <div className='text-gray-400 font-bold'>-</div>
                                <div className='text-gray-400 font-bold'>1</div>
                                <div className='text-gray-400 font-bold'>+</div>

                            </div>
                        </div>

                        <div className='mt-10 '>
                            <button className='bg-green-500 w-full p-2 rounded-[20px] text-white font-bold shadow-xl '>Apply</button>
                        </div>
                    </form>

                </div>
                {/* Right */}
                <div className=' w-[70%] ml-auto'>
                    <div className='flex justify-between m-1'>
                        <h2 className='text-gray-700 font-bold text-3xl'>16 Results</h2>
                        <div className='m-2 space-x-1'>
                            <label className='text-gray-700 text-xl '>Newest</label>
                            <select className='w-[20px] bg-gray-100'></select>
                        </div>

                    </div>
                    {/* Image */}
                    <div className='bg-gray-100'>
                        <img src={map}
                            alt="map"
                            className='h-[330px] w-full rounded-[30px]' />
                    </div>

                    {/* Lastly */}

                    <div className='flex justify-between m-5 gap-10 '>
                        <Link to='/Details'>
                            <div className='cursor-pointer'>

                                <img
                                    src={house1}
                                    alt="house"
                                    className='rounded-[20px] h-[150px] w-[700px]' />
                                <p className='font-bold text-[19px] mt-2'>3 Story Modern <br />
                                    House</p>
                                <div className='flex '>
                                    <FaMapMarkerAlt className='mt-1 text-gray-400' />
                                    <p className='text-green-500'>Kigali,Kimironko</p>
                                </div>
                                <p><span className='font-bold text-2xl text-gray-600'>$ 50 </span>/night</p>
                            </div>
                        </Link>

                        <div className='cursor-pointer'>
                            <img
                                src={house2}
                                alt="house"
                                className='rounded-[20px] h-[150px] w-[700px]' />
                            <p className='font-bold text-[19px] mt-2 text-gray-600'>Wooden Modern<br />
                                House</p>
                            <div className='flex '>
                                <FaMapMarkerAlt className='mt-1 text-gray-400' />
                                <p className='text-green-500'>Kigali,Kimironko</p>
                            </div>
                            <p><span className='font-bold text-2xl text-gray-600'>$ 60 </span>/night</p>
                        </div>
                        <div className='cursor-pointer'>
                            <img
                                src={house1}
                                alt="haouse"
                                className='rounded-[20px] h-[150px] w-[700px]' />
                            <p className='font-bold text-[19px] mt-2 text-gray-600'>2 Story Modern<br />
                                House</p>
                            <div className='flex '>
                                <FaMapMarkerAlt className='mt-1 text-gray-400' />
                                <p className='text-green-500'>Kigali,Kimironko</p>
                            </div>
                            <p><span className='font-bold text-2xl text-gray-600'>$ 20 </span>/night</p>
                        </div>
                        <div className='cursor-pointer'>
                            <img
                                src={house1}
                                alt="house"
                                className='rounded-[20px] h-[150px] w-[700px]' />
                            <p className='font-bold text-[19px] mt-2 text-gray-600'>4 Bedroom House<br />
                                for Family</p>
                            <div className='flex '>
                                <FaMapMarkerAlt className='mt-1 text-gray-400' />
                                <p className='text-green-500'>Kigali,Kimironko</p>
                            </div>
                            <p><span className='font-bold text-2xl text-gray-600'>$ 150 </span>/night</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}``