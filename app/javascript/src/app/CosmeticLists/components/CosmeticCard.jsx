import React from 'react';
import PropTypes from 'prop-types';

const CosmeticCard = ({ cosmetic }) => {
  return(
    <div className='column is-one-quarter'>
      <div className='card large'>
        <div className='card-image'>
          <figure className='image'>
            <img src={cosmetic.images[0]} alt='Image' />
          </figure>
        </div>
        <div className='card-content'>
          <div className='media'>
            <div className='media-left'>
              <figure className='image is-96x96'>
                <img src='https://i.imgsafe.org/a4/a4bb9acc5e.jpeg' alt='Image' />
              </figure>
            </div>
            <div className='media-content'>
              <p className='title is-4 no-padding'>{cosmetic.name}</p>
              <p>
                <span className='title is-6'>
                  <a href='http://twitter.com/#'>@twitterid</a>
                </span>
              </p>
              <p className='subtitle is-6'>Lead Developer</p>
            </div>
          </div>
          <div className='content'>Today, my girlfriend was giving me head during the horror flick we were watching. Little did I know, my girlfriend isn't a big fan of horror films. It was during a sex scene that intensified the moment. The same sex scene from which emerged a sudden jump-scare. I now have bite marks on my penis. FML
            <div className='background-icon'>
              <span className='icon-twitter'></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CosmeticCard.propTypes = { cosmetic: PropTypes.object };

export default CosmeticCard;
