import React from 'react';
import PropTypes from 'prop-types';

const NewCosmeticForm = props => {
  const { handleNewCosmeticName, handleNewCosmeticImage, handleCreateCosmetics, newCosmetic} = props;

  return(
    <div className='field'>
      <label className='label'>Name</label>
      <div className='control'>
        <input
          className='input'
          type='text'
          placeholder='Text input'
          onChange={(e) => handleNewCosmeticName(e.target.value)}
        />
      </div>

      <div className='file is-danger has-name is-boxed'>
        <label className='file-label'>
          <input
            className='file-input'
            type='file'
            name='resume'
            onChange={e => handleNewCosmeticImage(e.target.files[0])}
          />
          <span className='file-cta'>
            <span className='file-icon'>
              <i className='fas fa-cloud-upload-alt'></i>
            </span>
            <span className='file-label'>
              Danger file…
            </span>
          </span>
        </label>
      </div>
      <p className='control'>
        <a className='button is-primary' onClick={() => handleCreateCosmetics(newCosmetic)}>
          Submit
        </a>
      </p>
    </div>

  )
}

NewCosmeticForm.propTypes = {
  handleNewCosmeticName: PropTypes.func,
  handleNewCosmeticImage: PropTypes.func,
  handleCreateCosmetics: PropTypes.func,
  newCosmetic: PropTypes.object,
};

export default NewCosmeticForm;
