import { React } from 'react';
import css from './SearchBar.module.css';

export const SearchBar = ({onSubmit}) => {
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
        />
      </form>
    </div>
  );
};
