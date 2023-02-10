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


  /** To Clear The Output when i clear the text in search form */
  const handleSearchInput = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    if (searchTerm === '') {
      setSearchResults([]);
    } else {
      setSearchResults(SECTIONS.filter(section => section.name.toLowerCase().includes(searchTerm)));
    }
  };

  /** Read The Inpouts and and convert it to lower case and give the RESAULT */
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
                <h4
                  href="#"
                  onClick={event => handleSectionClick(event)}>
                  {section.name}
                </h4>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Searchbar;
