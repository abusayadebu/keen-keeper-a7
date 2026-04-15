import React from 'react';
import { FiClock } from 'react-icons/fi';
import { ImStatsDots } from 'react-icons/im';
import { TfiStatsUp } from 'react-icons/tfi';
import { TiHomeOutline } from 'react-icons/ti';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className='bg-base-100 shadow-sm p-6'>
            <div className='container mx-auto flex items-center justify-between'>
                <h2 className='text-2xl font-bold'>Keen<span className='text-[#244D3F]'>Keeper</span></h2>
            <ul className='flex items-center gap-8'>
                <li>
                    <NavLink to={"/"} className={({isActive})=> `flex items-center gap-1 font-bold ${isActive ? 'btn bg-[#244D3F] text-white' : 'text-[#64748B]' }`}><TiHomeOutline className='text-xl'></TiHomeOutline>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/timeline'} className={({isActive})=> `flex items-center gap-1 font-bold ${isActive ? 'btn bg-[#244D3F] text-white' : 'text-[#64748B]' }`}><FiClock className='text-xl'></FiClock> TimeLine</NavLink>
                </li>
                <li>
                    <NavLink to={'/stats'} className={({isActive})=> `flex items-center gap-1 font-bold ${isActive ? 'btn bg-[#244D3F] text-white' : 'text-[#64748B]' }`}><ImStatsDots className='xl'></ImStatsDots> Stats</NavLink>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;