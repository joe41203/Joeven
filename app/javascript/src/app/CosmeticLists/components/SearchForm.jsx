import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = props => {
  const { handleChangeQuery, handleKeyPress } = props;

  return(
    <section className='hero is-info'>
      <div className='hero-body'>
        <div className='container'>
          <div className='card'>
            <div className='card-content'>
              <div className='content'>
                <div className='control has-icons-left has-icons-right search-field'>
                  <input
                    className='input is-large'
                    type='text'
                    placeholder='search box'
                    onChange={(e) => handleChangeQuery(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e.key)}
                  />
                  <span className='icon is-medium is-left'><i className='fa fa-search'></i></span>
                  <span className='icon is-medium is-right'>
                    <i className='delete is-medium clear-search'></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

SearchForm.propTypes = {
  handleChangeQuery: PropTypes.func,
  handleKeyPress: PropTypes.func,
};

export default SearchForm;
