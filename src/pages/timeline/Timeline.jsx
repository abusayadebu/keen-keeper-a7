import React, { useContext, useState } from "react";
import { FriendContext } from "../../context/FriendContext";
import {
  FaChevronDown,
  FaCheck,
  FaSearch,
  FaSortAmountDown,
  FaSortAmountUp,
} from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { BiMessageDots } from "react-icons/bi";
import { FiVideo } from "react-icons/fi";

const Timeline = () => {
  const { timeline } = useContext(FriendContext);

  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const handleFilterChange = (value) => {
    setFilter(value);
    document.activeElement?.blur();
  };

  const getIcon = (type) => {
    if (type === "Call") return <TbPhoneCall className="text-xl" />;
    if (type === "Text") return <BiMessageDots className="text-xl" />;
    if (type === "Video") return <FiVideo className="text-xl" />;
    return null;
  };

  const processedTimeline = [...timeline]
    .filter((item) => {
      const matchType = filter === "All" || item.type === filter;

      const query = searchTerm.toLowerCase();
      const matchSearch =
        item.title.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query);

      return matchType && matchSearch;
    })
    .sort((a, b) => {
      const aId = Number(a.id);
      const bId = Number(b.id);
      return sortOrder === "newest" ? bId - aId : aId - bId;
    });

  return (
    <div className="bg-[#fcfcfc] w-full min-h-[600px] flex justify-center">
      <div className="w-full max-w-6xl px-6 py-12">

        {/* HEADER */}
        <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
          Timeline
        </h2>

        {/* FILTER + SEARCH BAR */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">

          {/* FILTER DROPDOWN */}
          <div className="dropdown w-full md:w-auto">
            <label
              tabIndex={0}
              className="btn btn-outline w-full md:w-[240px] justify-between bg-white border-gray-300 text-[#444] normal-case shadow-sm"
            >
              <span className="truncate text-[15px]">
                {filter === "All" ? "Filter timeline" : filter}
              </span>
              <FaChevronDown className="text-[12px] opacity-70" />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu p-1 mt-1 w-full md:w-[240px] bg-base-100 rounded-lg shadow border border-gray-100"
            >
              <li>
                <button
                  onClick={() => handleFilterChange("All")}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                >
                  <span className="w-4 flex justify-center">
                    {filter === "All" && <FaCheck className="text-[12px]" />}
                  </span>
                  All
                </button>
              </li>

              {["Text", "Call", "Video"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleFilterChange(item)}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 font-medium"
                  >
                    <span className="w-4 flex justify-center">
                      {filter === item && <FaCheck className="text-[12px]" />}
                    </span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* SEARCH + SORT */}
          <div className="flex items-center gap-3 w-full md:w-auto">

            <div className="relative flex-grow md:w-64">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

              <input
                type="text"
                value={searchTerm}
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-11 pl-9 pr-3 border border-gray-300 rounded-lg bg-white text-sm shadow-sm"
              />
            </div>

            <button
              onClick={() =>
                setSortOrder(sortOrder === "newest" ? "oldest" : "newest")
              }
              className="h-11 px-4 flex items-center gap-2 border border-gray-300 rounded-lg bg-white text-sm shadow-sm hover:bg-gray-50"
            >
              {sortOrder === "newest" ? (
                <FaSortAmountDown />
              ) : (
                <FaSortAmountUp />
              )}
              {sortOrder === "newest" ? "Newest" : "Oldest"}
            </button>
          </div>
        </div>

        {/* TIMELINE LIST */}
        <div className="space-y-4">

          {processedTimeline.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 border border-dashed rounded-xl">
              <p className="text-gray-400 italic">No matches found!</p>
            </div>
          ) : (
            processedTimeline.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#f8f9fa]">
                  {getIcon(item.type)}
                </div>

                <div>
                  <p className="text-[15px] text-[#64748B]">
                    <span className="font-semibold text-[#244D3F]">
                      {item.type}
                    </span>{" "}
                    with {item.title.split("with ")[1] || "Friend"}
                  </p>

                  <p className="text-[12px] text-gray-500 mt-1">
                    {item.date}
                  </p>
                </div>
              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
};

export default Timeline;