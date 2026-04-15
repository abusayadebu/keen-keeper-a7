import React from 'react';
import { FiClock } from 'react-icons/fi';
import { ImStatsDots } from 'react-icons/im';
import { TfiStatsUp } from 'react-icons/tfi';
import { TiHomeOutline } from 'react-icons/ti';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav className='bg-base-100 shadow-sm p-6'>
            <div className='container mx-auto flex items-center justify-between'>
                <h2 className='text-2xl font-bold'>Keen<span className='text-[#244D3F]'>Keeper</span></h2>
            <ul className='flex items-center gap-8 text-[#64748B]'>
                <li>
                    <Link to={"/"} className='flex items-center gap-1 font-bold'><TiHomeOutline className='text-xl'></TiHomeOutline>Home</Link>
                </li>
                <li>
                    <Link to={'/timeline'} className='flex items-center gap-1 font-bold'><FiClock className='text-xl'></FiClock> TimeLine</Link>
                </li>
                <li>
                    <Link to={'/stats'} className='flex items-center gap-1 font-bold'><ImStatsDots className='xl'></ImStatsDots> Stats</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;