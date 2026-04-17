import React from 'react';
import { useParams } from 'react-router';
import useFriends from '../../hooks/useFriends';
import { LuPhoneCall } from 'react-icons/lu';
import { IoMdText } from 'react-icons/io';
import { IoVideocamOutline } from 'react-icons/io5';
import { HiBellSnooze } from 'react-icons/hi2';
import { BsFillArchiveFill } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';

const FriendDetails = () => {
    const {id} = useParams();
    
    // get data by custom hook
    const {friends, loading} = useFriends();
    console.log(friends, loading);
    if (loading) {
            return <p>Loading...</p>;
        }


    // expectedFriend
    const expectedFriend = friends.find(
        friend => friend.id == id
    );

    if (!expectedFriend) {
        return <p>Friend not found</p>;
    }

    return (
  <div className="container mx-auto my-20">
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

      {/* LEFT CARD */}
      <div className="bg-base-100 shadow rounded-xl p-6 text-center h-full">
        <img
          src={expectedFriend.picture}
          alt={expectedFriend.name}
          className="w-20 h-20 rounded-full mx-auto"
        />

        <h2 className="text-xl font-semibold mt-3">
          {expectedFriend.name}
        </h2>

        <span className={`badge font-semibold uppercase py-4 rounded-2xl mt-2 
          ${expectedFriend.status === "overdue"
            ? "badge-error"
            : expectedFriend.status === "almost due"
              ? "badge-warning"
              : "badge-success"}`}>
          {expectedFriend.status}
        </span>

        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {expectedFriend.tags.map((tag, i) => (
            <span key={i} className="badge bg-green-200 font-semibold uppercase py-4 rounded-2xl">
              {tag}
            </span>
          ))}
        </div>

        <p className="italic mt-3 text-[#64748B]">
          "{expectedFriend.bio}"
        </p>

        <p className="text-md mt-2 text-gray-400">
          Preferred: email
        </p>

        <div className="mt-6 space-y-2">
          <button className="btn w-full"> <HiBellSnooze></HiBellSnooze> Snooze 2 Weeks</button>
          <button className="btn w-full"> <BsFillArchiveFill></BsFillArchiveFill> Archive</button>
          <button className="btn w-full text-orange-700"> <RiDeleteBinLine></RiDeleteBinLine> Delete</button>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="lg:col-span-2 space-y-8 h-full flex flex-col">

        {/* TOP STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">

          <div className="bg-base-100 shadow p-12 text-center rounded-xl">
            <h2 className="text-3xl font-bold text-[#244D3F] mb-3">
              {expectedFriend.days_since_contact}
            </h2>
            <p className="text-[#64748B]">Days Since Contact</p>
          </div>

          <div className="bg-base-100 shadow p-12 text-center rounded-xl">
            <h2 className="text-3xl font-bold text-[#244D3F] mb-3">
              {expectedFriend.goal}
            </h2>
            <p className="text-[#64748B]">Goal (Days)</p>
          </div>

          <div className="bg-base-100 shadow p-12 text-center rounded-xl">
            <h2 className="text-xl font-bold text-[#244D3F] mb-3">
              {expectedFriend.next_due_date}
            </h2>
            <p className="text-[#64748B]">Next Due</p>
          </div>

        </div>

        {/* RELATIONSHIP GOAL */}
        <div className="bg-base-100 shadow p-6 rounded-xl flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg text-[#244D3F] mb-3">
              Relationship Goal
            </h3>
            <p>
              Connect every <span className="font-bold">{expectedFriend.goal} days</span>
            </p>
          </div>
          <button className="btn btn-sm">Edit</button>
        </div>

        {/* QUICK ACTION */}
        <div className="bg-base-100 shadow p-6 rounded-xl">
          <h3 className="font-bold mb-4 text-[#244D3F]">Quick Check-In</h3>

          <div className="grid grid-cols-3 gap-4">
            <button className="btn"> <LuPhoneCall></LuPhoneCall> Call</button>
            <button className="btn"> <IoMdText></IoMdText> Text</button>
            <button className="btn"> <IoVideocamOutline></IoVideocamOutline> Video</button>
          </div>
        </div>

      </div>
    </div>
  </div>
);
};
            
export default FriendDetails;