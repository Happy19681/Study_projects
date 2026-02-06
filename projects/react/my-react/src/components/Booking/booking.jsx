import logo from '../../assets/photo-img/logo.png';
import house1 from '../../assets/photo-img/house1.jpg';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export default function Booking() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false);
    const menuRef = useRef(null);


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

        <section className="w-full bg-white">
            {/* Header */}
            <header className="flex items-center w-full justify-between p-10">

                {/* Previous */}
                <div>
                    <Link
                        to="/Details"
                        className="bg-green-400 rounded-full px-4 py-3 text-xl text-white w-12 h-12 shadow-2xl justify-center shadow-[10px_10px_15px_rgba(0,0,0,0.2)] hover:bg-gray-400 ml-10"
                    >
                        &lt;
                    </Link>
                </div>

                {/* Logo */}
                <div className="w-20 h-20 p-2 rounded-full flex items-center justify-center overflow-hidden">
                    <img src={logo} alt="logo" className="w-full h-full object-contain" />
                </div>

                {/* Nav */}
                <nav className="flex space-x-8 font-bold text-gray-700">
                    <div className="cursor-pointer hover:text-green-600">ABOUT US</div>
                    <div className="cursor-pointer hover:text-green-600">FAQS</div>
                </nav>

                {/* Service Button */}
                <button className="bg-orange-600 text-white px-20 py-4 rounded-[50px] hover:bg-orange-400 shadow-xl shadow-gray-300">
                    Services
                </button>

                {/* Hamburger & User */}
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
            </header>
            <hr className='w-[1250px] ml-20 border border-b border-2' />

            {/* Main Content */}
            <main className="flex flex-col md:flex-row justify-between p-10 space-y-10 md:space-y-0 md:space-x-10">

                {/* Left Side */}
                <div className="w-full md:w-2/3 space-y-8 ml-20">
                    <h1 className="text-3xl font-bold text-gray-800">Request to Book</h1>

                    {/* Trip*/}

                    <div className="border-b pb-4 space-y-4 w-[60%]">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-xl text-gray-700">Your Trip</h2>
                                <p className="text-gray-600">Jun 20 - 26</p>
                            </div>
                            <button className="text-xl font-semibold text-blue-600 hover:underline">Edit</button>
                        </div>

                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-xl text-gray-700">Guests</h2>
                                <p className="text-gray-600">2 guests</p>
                            </div>
                            <button className="text-xl font-semibold text-blue-600 hover:underline">Edit</button>
                        </div>
                    </div>

                    {/* Login */}
                    <div className="space-y-4 w-[62%]">
                        <h2 className="text-2xl font-bold text-gray-700">Login or Signup to Book</h2>

                        <div className="border rounded-xl p-4 space-y-4 w-full md:w-[500px]">
                            <div className="flex justify-between">
                                <p className="font-semibold text-gray-700">Country/Region</p>
                                <p className="text-gray-700">Rwanda</p>
                            </div>
                            <div className="border-b"></div>
                            <div className="flex justify-between">
                                <p className="font-semibold text-gray-700">Phone Number</p>
                                <p className="text-gray-700">+250</p>
                            </div>
                        </div>

                        <button className="bg-green-400 text-white w-full md:w-[500px] py-3 rounded-lg shadow hover:bg-green-500">
                            Login
                        </button>

                        {/* OR */}
                        <div className="flex items-center space-x-2 w-full md:w-[500px]">
                            <hr className="flex-grow border-gray-400" />
                            <p className="text-gray-600">Or</p>
                            <hr className="flex-grow border-gray-400" />
                        </div>

                        {/* Google & Apple */}
                        <div className="flex gap-4">
                            <button className="flex-1 border border-black py-2 rounded bg-white text-black shadow">Google</button>
                            <button className="flex-1 border border-black py-2 rounded bg-black text-white shadow">Apple</button>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-1/3 ">
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm mx-auto">
                        <div className="flex items-center space-x-4">
                            <img src={house1} alt="House" className="w-20 h-20 rounded-lg object-cover" />
                            <h2 className="font-semibold text-lg text-gray-800">Modern Casual House</h2>
                        </div>

                        <hr className="my-4" />

                        <div className="space-y-2">
                            <h3 className="font-bold text-gray-700">Price Details</h3>
                            <div className="flex justify-between text-gray-600">
                                <span>$35 × 5 Nights</span>
                                <span>$175</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Fees</span>
                                <span>$2</span>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <div className="flex justify-between font-bold text-gray-800 text-lg">
                            <span>Total</span>
                            <span>$177</span>
                        </div>

                        <button className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700">
                            Pay
                        </button>
                    </div>
                </div>
            </main>
        </section>
    );
}
