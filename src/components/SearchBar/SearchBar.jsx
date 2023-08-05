import React from 'react';
import PropTypes from 'prop-types'; 
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit, setSearchParams, searchValue }) => {
  const handleChange = ({ target: { value } }) => {
    setSearchParams({ search: value });
  };
  
  return (
    <div className={css.searchbar}>
      <form className={css.searchform} onSubmit={onSubmit}>
        <button type="submit" className={css['searchform-button']}>
          <span className={css['searchform-button-label']}>Search</span>
        </button>

        <input
          className={css['searchform-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={handleChange}
          value={searchValue || ''}
        />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setSearchParams: PropTypes.func.isRequired,
  searchValue: PropTypes.string 
};
export default SearchBar

