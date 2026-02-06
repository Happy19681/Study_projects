import logo from '../../assets/photo-img/logo.png';
import house1 from '../../assets/photo-img/house1.jpg';
import { Link } from 'react-router-dom';
import { FaHourglassEnd, FaMapMarkerAlt, FaSearch, FaUser } from "react-icons/fa"
import map from '../../assets/photo-img/map.png';
import { useState, useRef, useEffect } from 'react';



export default function Details() {
    const [selectedTags, setSelectedTags] = useState([])
    const [showMore, setShowMore] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleTag = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag)
                ? prev.filter((t) => t !== tag)
                : [...prev, tag]
        );
    };
    const tags = ['Woods', 'Wifi', 'Tv'];



    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
                setFormOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <section className='p-8 w-full'>
            {/* Header */}
            <header className="flex items-center w-full justify-between p-2">
                {/* Logo */}
                <Link to='/search'>
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
                <div
                    ref={menuRef}
                    className="relative flex items-center space-x-4 bg-white rounded-[40px] px-4 py-2 shadow-xl ml-7 mr-6"
                >
                    {/* Hamburger */}
                    <div
                        onClick={() => {
                            setMenuOpen((prev) => !prev);
                            setFormOpen(false);
                        }}
                        className="flex flex-col justify-between space-y-1 cursor-pointer"
                    >
                        <div className="w-6 h-0.5 bg-gray-700"></div>
                        <div className="w-6 h-0.5 bg-gray-700"></div>
                        <div className="w-6 h-0.5 bg-gray-700"></div>
                    </div>

                    {/* Dropdown */}
                    {menuOpen && (
                        <div className="absolute right-0.5 mt-12 w-80 bg-white shadow-lg rounded-[20px] py-2 z-50 mt-52 ">
                            <button className="block px-4 py-2 w-full text-center text-gray-900 hover:bg-green-400">
                                Login
                            </button>
                            <button className="block px-4 py-2 w-full text-center text-gray-700 hover:bg-green-400">
                                SignUp
                            </button>
                            <button className="block px-4 py-2 w-full text-center text-gray-700 hover:bg-green-400">
                                My Profile
                            </button>
                        </div>
                    )}

                    {/* User Icon */}
                    <div
                        onClick={() => {
                            setFormOpen((prev) => !prev);
                            setMenuOpen(false);
                        }}
                        className="flex items-center justify-center border border-black bg-gray-200 rounded-full w-10 h-10 cursor-pointer hover:text-green-600  "
                    >
                        <FaUser className="w-6 h-6" />
                    </div>

                    {/* Form Popup */}
                    {formOpen && (
                        <div className="absolute right-0 mt-[550px] item-center w-80 bg-white shadow-lg rounded-xl p-4 z-50 shadow-md">
                            <p className=" mt-2 text-4xl text-center font-extrabold bg-gradient-to-b from-green-400 to-gray-800 bg-clip-text text-transparent">
                                Sign In
                            </p>

                            <p className='text-center text-gray-600 mb-20  text-l'>Enter your Details to Login</p>
                            <form className="space-y-3 ml-4">
                                <label className='font-bold'>Email/Tel</label>
                                <input
                                    type="text"
                                    placeholder="Eg: info@bnbmountainview.com"
                                    className=" bg-gray-300 w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-green-400"
                                />

                                <label className='font-bold '>Password</label>
                                <input
                                    type="password"
                                    placeholder="........."
                                    className=" bg-gray-300 w-full text-xl border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-green-400"
                                />
                                <button className="w-full bg-green-400 text-white py-2 rounded-[20px] hover:bg-green-600 shadow-xl">
                                    Login
                                </button>
                                <button className='mt-10 text-blue-500 pb-10 ml-16'>Forget Password?</button>
                            </form>
                        </div>
                    )}
                </div>

                {/* Service Button */}
                <button className='bg-orange-600 text-white px-20 py-4 rounded-[50px] hover:bg-orange-400  shadow-xl shadow-gray-300'>Services</button>
            </header>
            {/* Pictures */}
            <div className='w-[100%] mt-3 ml-3 p-4 flex flex-rows item-buttom gap-3'>
                <div className='w-full'>
                    <img
                        src={house1}
                        alt="house"
                        className='rounded-[20px] h-[424px] w-full' />
                </div>


                <div className='w-[35%] flex flex-col gap-3 h-[300px] '>
                    <img
                        src={house1}
                        alt="house"
                        className='rounded-[20px]' />
                    <img
                        src={house1}
                        alt="house"
                        className='rounded-[20px]' />
                    <div className='relative w-full h-[30%]'>
                        <h1 className='absolute inset-0 text-center top-6 font-bold text-white text-[20px] z-20'>+5</h1>
                        <img
                            src={house1}
                            alt="house"
                            className='w-full h-full object-cover rounded-xl' />
                        <div className='absolute inset-0 bg-gray-900/60 rounded-xl'></div>
                    </div>
                </div>
            </div>
            {/* Second */}
            <div className='ml-8 w-full flex mt-4 bg-white'>
                {/*Left */}
                <div className='w-[55%]'>
                    <h1 className='font-bold text-3xl text-gray-600 '>3 Story Modern House</h1>
                    <p className=' text-s mt-1'>
                        <div className='flex '>
                            <FaMapMarkerAlt className='mt-1 text-gray-400' />
                            <p className='text-green-500'>Kigali,Kimironko</p>
                        </div></p>
                    <div className='flex gap-2 text-center items-center'>
                        {tags.map((tag) => (
                            <div
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`cursor-pointer font-bold rounded-xl w-[12%] h-[50px]
                                     flex items-center justify-center mt-4 py-3
                                     shadow-[10px_10px_90px_rgba(0,0,0,0.4)]
                                     ${selectedTags.includes(tag)
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-white text-gray-500'}
                                     `}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-lg text-gray-800">
                        This house is located in Kigali, Rwanda and has 3 beds, 3 inside toilets,
                        and 1 main outside. It has its own gate and 3 parking slots — perfect for
                        a family of 5.
                        {showMore && (
                            <>
                                <br />
                                The house also features a modern kitchen, spacious living room,
                                secure fencing, and access to nearby markets and schools.
                                It is fully furnished and available for both rent and purchase.
                            </>
                        )}
                    </p>
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className='text-blue-500'>
                        {showMore ? "Read Less" : "Read More..."}
                    </button>
                    <hr className='border mt-8' />
                </div>
                {/* Right */}
                <div className='w-[35%] h-[340px] ml-24 border border-3 rounded-[40px] shadow-md'>
                    <div className="text-3xl font-bold mt-10 ml-8">
                        $245 <span className="text-gray-500  text-xl">/ 5 nights</span>
                    </div>
                    <div className='border border-2 rounded-[20px] mt-5 ml-4 mr-4'>
                        <div className="flex divide-x border-b">
                            <div className="w-1/2 p-2">
                                <label className="block text-xs font-semibold text-gray-500">
                                    Check-In
                                </label>
                                <input
                                    type="date"
                                    className="w-full outline-none text-sm"
                                    defaultValue="2023-12-12"
                                />
                            </div>
                            <div className="w-1/2 p-2">
                                <label className="block text-xs font-semibold text-gray-500">
                                    Check-Out
                                </label>
                                <input
                                    type="date"
                                    className="w-full outline-none text-sm"
                                    defaultValue="2023-12-12"
                                />
                            </div>
                        </div>
                        <div className="p-2  ">
                            <label className="block text-xs font-semibold text-gray-500">
                                Guests
                            </label>
                            <select className="w-full outline-none text-sm">
                                <option>1 Person</option>
                                <option>2 People</option>
                                <option>3 People</option>
                                <option>4 People</option>
                                <option>5 People</option>
                            </select>
                        </div>
                    </div>
                    <Link to={'/booking'}>
                        <button className="mt-4 ml-16 w-[70%] bg-green-400 text-white font-semibold py-3 rounded-full hover:bg-green-600 transition shadow-xl">
                            Book Now
                        </button>
                    </Link>
                </div>
            </div>
            {/* Third */}
            <div className='w-full '>
                <h1 className='font-bold text-xl ml-9'>Reviews</h1>
                <div className=' mt-7 border border-gray w-[100%] rounded-[40px] flex h-[250px] gap-20 shadow-xl'>

                    <div className='flex flex-row mt-10 ml-20 gap-4'>
                        <div className='bg-gray-200 border rounded-full h-[50px] w-[50px] 
                        flex item-center justify-center mt-7 py-3 font-bold '>M</div>

                        <div className='flex flex-col mt-3 '>
                            <h1 className='font-bold text-xl '>Mugisha Kalixte</h1>
                            <p className='text-s'>This building was cool. It <br /> has big space enough that <br />
                                we were happy to live in <br /> thanks for the service.</p>
                        </div>
                        <div className='border border-r h-40 ml-10'></div>
                    </div>

                    <div className='flex flex-row mt-10 ml-6 gap-4'>
                        <div className='bg-gray-200 border rounded-full h-[50px] w-[50px] 
                        flex item-center justify-center mt-7 py-3 font-bold '>M</div>

                        <div className='flex flex-col mt-3 '>
                            <h1 className='font-bold text-xl '>Mugisha Kalixte</h1>
                            <p className='text-s'>This building was cool. It <br /> has big space enough that <br />
                                we were happy to live in <br /> thanks for the service.</p>
                        </div>
                        <div className='border border-r h-40 ml-10'></div>
                    </div>


                    <div className='flex flex-row mt-10 ml-3 gap-4'>
                        <div className='bg-gray-200 border rounded-full h-[50px] w-[50px] 
                        flex item-center justify-center mt-7 py-3 font-bold '>M</div>

                        <div className='flex flex-col mt-3 '>
                            <h1 className='font-bold text-xl '>Mugisha Kalixte</h1>
                            <p className='text-s'>This building was cool. It <br /> has big space enough that <br />
                                we were happy to live in <br /> thanks for the service.</p>
                        </div>

                    </div>

                </div>
                <div className='border border-b w-[1250px] ml-10 mt-20'></div>

            </div>
            {/* Lastly */}
            <div>
                <h1 className='mt-7 ml-5 font-bold text-xl'>You will be Here..</h1>
                <div className='mt-6'>
                    <img src={map}
                        alt="map"
                        className='h-[400px] w-[98%] rounded-[30px] ml-5' />
                </div>
            </div>
        </section>
    )


}