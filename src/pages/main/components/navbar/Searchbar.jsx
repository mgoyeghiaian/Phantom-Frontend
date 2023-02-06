import React, { useState } from 'react'
import { FaSearch } from '@react-icons/all-files/fa/FaSearch'

const SECTIONS = [
  { name: 'Home', id: 'home' },
  { name: 'Sponsored', id: 'sponsored' },
  { name: 'About', id: 'about' },
  { name: 'Collection', id: 'collection' },
  { name: 'Topcreator', id: 'topcreator' },
  { name: 'Faq', id: 'faq' },
  { name: 'Cta', id: 'cta' },
  { name: 'Featuredartworks', id: 'featuredartworks' },
  { name: 'Footer', id: 'footer' },
];

const Searchbar = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInput = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    if (searchTerm === '') {
      setSearchResults([]);
    } else {
      setSearchResults(SECTIONS.filter(section => section.name.toLowerCase().includes(searchTerm)));
    }
  };


  const handleSectionClick = (event) => {
    event.preventDefault();
    const matchingSection = SECTIONS.find(section => section.name.toLowerCase().startsWith(searchTerm));
    if (matchingSection) {
      const section = document.getElementById(matchingSection.id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      alert(`Sorry, we do not have a section with the name "${searchTerm}"`);
    }
  };

  return (
    <nav>
      <form className='search-form'>
        <button className='search-button' type='submit' onClick={handleSectionClick}>
          <FaSearch />
        </button>
        <input
          className='search'
          type="text"
          placeholder="Search items and collections"
          onChange={handleSearchInput}
          value={searchTerm}
        />
      </form>
      {searchResults.length > 0 && (
        <div className='search-results'>
          <ul>
            {searchResults.map(section => (
              <li key={section.id}>
                <a
                  href="#"
                  onClick={event => handleSectionClick(event)}>
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Searchbar;
