import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="hero mt-16">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="py-6 text-[#64748B]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white"><FaPlus></FaPlus>Add a Friend</button>
    </div>
  </div>
</div>
    );
};

export default Banner;