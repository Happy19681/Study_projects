import logo from '../../assets/photo-img/logo.png';
import { MdEmail, MdPhone } from 'react-icons/md'
import home from '../../assets/photo-img/home.jpg';
import house1 from '../../assets/photo-img/house1.jpg';
import house2 from '../../assets/photo-img/house2.jpg'
import map from '../../assets/photo-img/map.png';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { FaHourglassEnd, FaMapMarkerAlt, FaSearch, FaUser } from "react-icons/fa"
export default function About() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false);

    const menuRef = useRef(null);
    return (
        <section className='w-full'>
            {/* Section A */}
            {/* Header */}
            <header className="flex items-center w-full justify-between p-4">
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

            {/* Content */}
            <div className='flex justify-between w-full items-center'>
                {/* Empty space */}
                <div className='w-[10%]'>

                </div>
                {/* Paragraph */}
                <div className='w-[40%]'>
                    <h1 className=' text-4xl font-bold text-gray-700'>

                        ABOUT <br />BNB <span className='text-4xl font-bold  text-green-500 ' > MOUNTAIN VIEW</span></h1>
                    <p className='mt-4 text-s'>
                        Welcome to BnBMountainView, where tranquility meets
                        breathtaking <br />vistas and unforgettable experiences. Nestled amidst the
                        majestic <br /> peaks and lush valleys, our company offers an exceptional retreat for <br />
                        those seeking solace, adventure, and unparalleled natural beauty.
                        As <br /> the premier destination for mountain getaways, BnBMountainView <br /> provides
                        an exquisite blend of comfort, serenity, and personalized <br /> hospitality</p>
                </div>
                {/* Image */}
                <div className='w-[40%]'>
                    <img src={home}
                        alt="home page"
                        className=' h-[60vh] rounded-l-[20px]  w-full object-cover' />
                </div>


            </div>
            {/* Email & Contact */}
            <div className='flex justify-evenly  w-[50%] ml-20 gap-3'>
                <div className='flex '>
                    <MdEmail className='mt-1 mr-1 text-xl ' />
                    <p className='underline'>Info@Bnbmountainview.com</p>
                </div>
                <div className='flex '>
                    <MdPhone className='mt-1 mr-0.5 text-xl' />
                    <p>+250788888888</p>
                </div>
            </div>
            {/* Section B */}
            <div className='w-full h-[350px]  mt-4 flex justify-evenly bg-green-100'>
                {/* Image */}
                <div className="relative w-[300px] h-[20px] mt-16 ">
                    {/* Back Image */}
                    <img
                        src={house2}
                        alt="Background House"
                        className="absolute top-2 left-4 w-[287px] h-[200px] rounded-md shadow-md transform rotate-12"
                    />
                    {/* Front Image*/}
                    <img
                        src={house1}
                        alt="Main House"
                        className="absolute top-2 left-1 w-[275px] h-[200px] rounded-md shadow-md transform border border-black border-[1px]"
                    />
                </div>
                {/* Text */}
                <div className='w-[50%] mt-10 text-right '>
                    <h1 className='font-bold mb-4 text-4xl  text-gray-700 text-right'>Accomodation</h1>
                    <p className='text-s mt-2 text-right'>At BnBMountainView, we understand that a peaceful and rejuvenating <br />
                        stay starts with luxurious accommodations. Our meticulously designed <br /> lodges, cabins, and chalets provide
                        a seamless blend of rustic charm <br /> and modern amenities. Each space is thoughtfully curated, ensuring <br /> that
                        every guest can unwind in style while being surrounded by <br /> nature's awe-inspiring splendor. From cozy fireplaces
                        and private <br /> balconies to
                        spacious living areas and fully equipped kitchens, we <br /> prioritize your comfort and convenience.</p>
                </div>
            </div>
            {/* Section c */}
            <div className='w-full h-[500px] flex item-center justify-center'>
                <div className=' mt-10 w-[80%] h-[80%] bg-gray-100 rounded-xl flex '>
                    <form className='w-[50%]'>
                        <h1 className='font-bold text-2xl flex item-center justify-center mt-9 text-gray-700'>Contact Us</h1>
                        <label className='font-bold text-gray-600 ml-24'>Names:</label><br />
                        <input
                            type="text"
                            placeholder='Names'
                            className=' ml-20 mt-1 py-2 rounded-xl font-bold px-2 border border-gray-400 w-[70%]' />

                        <label className='font-bold text-gray-600 ml-24'>Email:</label><br />
                        <input
                            type="email"
                            placeholder='Email'
                            className=' ml-20 mt-1 py-2 rounded-xl font-bold px-2 border border-gray-400 w-[70%]' />

                        <label className='font-bold text-gray-600 ml-24'>Message:</label><br />
                        <textarea
                            name="message"
                            placeholder='Write your Message...'
                            className=' ml-20 mt-1 py-4 rounded-xl text-s font-bold px-2 border border-gray-400 w-[70%]'></textarea>

                        <button className='mt-3 ml-28 bg-green-500 text-white px-20 py-2 rounded-[50px] hover:bg-gray-400  shadow-xl shadow-gray-300 '>Send</button>


                        {/* Map */}



                    </form>
                    <div className='flex item-end justify-end'>
                        <img src={map}
                            alt="map"
                            className=' w-[89%] rounded-[30px]' />
                    </div>
                </div>
            </div>
            {/* Section D */}
            <div className=' bg-green-100 w-full h-[600px]'>
                <div className='flex flex-col items-center justify-center '>
                    <p className='font-bold text-4xl  text-gray-700 mt-20'>Question? Look here</p>
                    <p className=' text-s  text-gray-700'>Can’t find any answer? Call us (+25078888888) or Email us on (info@bnbmountainview)</p>

                    <div className='mt-12 text-left'>
                        <p className='font-bold text-2xl text-gray-700 mr-[500px] '><span className='font-bold text-5xl text-green-500 '>+</span> What is BnB in View?</p>
                    </div>
                    <hr className='w-[800px] h-[2px] mt-4 bg-gray-300 ml-3' />

                    <div className='text-left'>
                        <p className='font-bold text-2xl text-gray-700 mr-60'><span className='font-bold text-5xl text-green-500 '>+</span> Is parking available at BnB Mountain View?</p>
                    </div>
                    <hr className='w-[800px] h-[2px] mt-4 bg-gray-300 ml-3' />

                    <div className='text-left'>
                        <h1 className='font-bold text-2xl text-gray-700 mr-60'><span className='font-bold text-5xl text-green-500'>-</span> Is parking available at BnB Mountain View?</h1>

                        <p className='text-s text-gray-600 mt-3 '>At BnBMountainView, check-in time is typically at 3:00 PM, while check-out time is at 11:00 AM.
                            We <br /> strive to accommodate special requests whenever possible, so if you need to arrange for an early <br />
                            check-in or late check-out, please contact our staff, and we will do our best to accommodate your <br /> needs.</p>
                    </div>
                    <hr className='w-[800px] h-[2px] mt-4 bg-gray-300 ml-3' />

                </div>


            </div>


        </section>

    )
}