"use client"
import React, { useState } from 'react';
import SearchInput from './search';
import FeautredJob from './FeautredJob';
import Cart from './cart';

const CategoryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <div className="pt-10">
        <SearchInput onSearch={handleSearch} />
      </div>
     
      <FeautredJob searchQuery={searchQuery} />
    </div>
  );
};

export default CategoryPage;
