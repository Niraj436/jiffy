import React from 'react';
import Microphone from './icons/Microphone';
import SearchIcn from './icons/SearchIcn';

const Search = () => {
  return (
    <div className="flex items-center bg-white px-4 py-3 rounded-md ">
      <SearchIcn />

      <input
        type="text"
        placeholder='Search for "Biryani'
        className="px-2 text-xs outline-none placeholder:text-xs flex-1"
      />
      <div className="pl-4 border-l">
        <Microphone />
      </div>
    </div>
  );
};

export default Search;
