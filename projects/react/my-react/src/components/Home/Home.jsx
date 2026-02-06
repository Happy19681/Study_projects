import logo from '../../assets/photo-img/logo.png';
import home from '../../assets/photo-img/home.jpg';
import house1 from '../../assets/photo-img/house1.jpg';
import house2 from '../../assets/photo-img/house2.jpg'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        location: "",
        checkIn: "",
        checkOut: "",
        guests: "",
    });

    const handleSearch = () => {
        if (!form.location || !form.checkIn || !form.checkOut || !form.guests) {
            alert('Please fill all the feilds')
            return;
        }
        const query = new URLSearchParams(form).toString();
        navigate(`/search?${query}`);
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <section className='flex min-h-screen'>

            {/* Left Side */}

            <div className='w-1/2 flex flex-col justify-start pt-[3%] pl-[7%]'>
                {/* Logo */}
                <div className='flex mb-10'>
                    <img src={logo} alt="logo" className='w-20 h-auto ' />
                    <p className='font-bold mt-5 text-2xl '>Logo</p>
                </div>

                {/* Text */}
                <h1 className='text-2xl font-lemon text-gray-700  '>Book unique places to <br />
                    stay and things to do <br /></h1>

                {/* Paragraph */}
                <br />
                <p className='border-t-2 w-20 border-gray-300'></p>

                <p className=' mt-1 font-itim mb-4 text-gray-700'>
                    Vacation,Lentals,Homes,Experiences and places</p>

                <div>
                    <div>
                        <label className='text-xl font-bold text-gray-700'>WHERE</label><br />
                        <input
                            type="text"
                            name='location'
                            placeholder='Anywhere'
                            value={form.location}
                            onChange={handleChange}
                            className='w-80 border rounded px-3 py-2 focus:outline-none border-2 border-gray-200' />
                    </div>
                    <div className='flex'>
                        <div>
                            <label className='text-xl font-bold block mb-2 text-gray-700'>CHECK-IN</label>
                            <input
                                type="date"
                                name='checkIn'
                                value={form.checkIn}
                                onChange={handleChange}
                                className='w-40 border rounded px-3 py-2 focus:outline-none border-2 w-40 border-gray-200' />

                        </div>


                        <div>
                            <label className='text-xl font-bold block mb-2 text-gray-700'>CHECK-OUT</label>                         <input
                                type="date"
                                name='checkOut'
                                value={form.checkOut}
                                onChange={handleChange}
                                className='w-40 border rounded px-3 py-2 focus:outline-none border-2 w-40 border-gray-200' />
                        </div>

                    </div>

                    <div>
                        <label className='text-xl font-bold text-gray-700'>GUEST</label><br />
                        <select
                            name="guests"
                            value={form.guests}
                            onChange={handleChange}
                            className='w-80 border rounded px-3 py-2 focus:outline-none border-2 border-gray-200 text-gray-400'
                        >

                            <option value="" disabled hidden>Guests</option>
                            <div className=' text-center'>
                                <option value="1" className='font-bold'>5 Guest</option>
                                <option value="2" className='font-bold'>Single Guests</option>
                                <option value="3" className='font-bold'>7 Guests & pet</option>
                            </div>



                        </select>

                        {/* Button */}

                        <div className='mt-4 ml-2'>
                            <button
                                onClick={handleSearch}
                                className=' w-[40%]  bg-green-500 text-white py-2 rounded-full font-semibold hover:bg-green-600 transition shadow-xl'>Search</button>
                        </div>
                        <div className='mt-20'>
                            <a href="#" className="text-green-500 text-sm font-bold flex items-center">
                                <span className="mr-1 text-2xl mb-1 font-bold ">↓</span>   Explore AirBnb
                            </a>

                        </div>





                    </div>
                </div>

            </div>







            {/* Right Side */}
            <div className='w-1/2 relative '>
                <img src={home}
                    alt="home page"
                    className='h-full rounded-l-[20px]  w-full object-cover' />

                <div className='flex justify-between  flex-col absolute bottom-2 left-2 right-2 gap-4'>
                    <p className='text-2xl font-bold text-white ml-2'>TOP PROPERTIES</p>



                    <div className='flex gap-4 ml-2'>
                        <div className=" bg-white rounded-[20px] shadow-md w-80 flex overflow-hidden">
                            {/* Image on the left */}
                            <img
                                src={house1}
                                alt="house"
                                className="w-1/3 h-full object-cover rounded ml-2 mt-2 pb-4 "
                            />

                            {/* Text content on the right */}
                            <div className="p-4 flex flex-col justify-between">
                                <h3 className="text-xs font-bold mt-3">Modern Casual House</h3>
                                <Link to="/About" className="text-green-500 text-sm font-medium flex items-center">
                                    Explore more <span className="ml-1">→</span>
                                </Link>
                            </div>


                        </div>

                        <div className=' bg-white rounded-[20px] shadow-md w-80 flex overflow-hidden'>
                            {/* image on the right */}
                            <img
                                src={house2}
                                alt="house2"
                                className="w-1/3 h-full object-cover rounded-[10px] mt-2 ml-2 pb-4 rounded"
                            />
                            {/* text */}
                            <div className="p-4 flex flex-col justify-between">
                                <h3 className="text-sm font-bold mt-3">Modern Casual House</h3>
                                <Link to="/About" className="text-green-500 text-sm font-medium flex items-center">
                                    Explore more <span className="ml-1">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>



            </div>





        </section >



    )
}