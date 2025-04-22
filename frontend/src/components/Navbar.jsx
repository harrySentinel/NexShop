import React from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import {useState, useContext, useEffect} from 'react'
import { useRef } from 'react'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const [visible, setVisible] = useState(false)
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // Reference to the dropdown to detect clicks outside it
    const dropdownRef = useRef(null);

    const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext)

    const logout = () => {
      navigate('/login')
      localStorage.removeItem('token')
      setToken('')
      setCartItems({})
      setDropdownVisible(false); // Close the dropdown after logout
    }

    const handleProfileClick = () => {
      if (token) {
        // Toggle the dropdown visibility on click if logged in
        setDropdownVisible(!dropdownVisible);
      } else {
        // If not logged in, redirect to login page
        navigate('/login');
      }
    }

     // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex items-center justify-between py-5 font-medium  w-full max-w-7xl mx-auto'>

     <Link to='/'> <img src={assets.logo} className='w-36' alt = "" /> </Link>

     <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
       
     <NavLink to='/' className='flex flex-col items-center gap-1'>
     <p>HOME</p>
     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
     </NavLink>

     <NavLink to='/collection' className='flex flex-col items-center gap-1'>
     <p>COLLECTION</p>
     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
     </NavLink>

     <NavLink to='/about' className='flex flex-col items-center gap-1'>
     <p>ABOUT</p>
     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
     </NavLink>

     <NavLink to='/contact' className='flex flex-col items-center gap-1'>
     <p>CONTACT</p>
     <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
     </NavLink>

     </ul>

    <div className='flex items-center gap-6'>
          <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

          <div className='group relative'>
           <img  onClick={handleProfileClick} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /> 
           {/* Dropdown Menu */}
            {token && dropdownVisible && (
              <div ref={dropdownRef} className={`absolute right-0 pt-4 bg-slate-100 text-gray-500 rounded w-36 z-50 transform transition-all duration-300 ease-in-out ${
                dropdownVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
              style={{ position: 'absolute', top: '100%' }}
              >
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
              <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
            )}
          </div>
          <Link to="/cart" className='relative'>
              <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
              <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
          </Link>
          <img onClick={()=> setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
    
    {/*Sidebar menu for small screens */}
   <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
    <div className='flex flex-col text-gray-600'>
        <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
          <img className='h-4 rotate-180' src={assets.menu_icon} alt="" />
          <p>Back</p>
        </div>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'  to='/'>HOME</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'  to='/collection'>COLLECTION</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'  to='/about'>ABOUT</NavLink>
        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border'  to='/contact'>CONTACT</NavLink>

    </div>
   </div>
    </div>

    </div>
  )
}

export default Navbar;