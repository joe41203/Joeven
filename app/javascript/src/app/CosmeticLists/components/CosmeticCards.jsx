import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CosmeticCard from './CosmeticCard';

const CardsContainer = styled.div`
  margin: 50px;
`;

const CosmeticCards = ({ cosmetics }) => {
  return(
    <CardsContainer className='columns is-multiline'>
      {
        cosmetics.map((cosmetic, i) => {
          return(
            <CosmeticCard
              key={`cosmetic-${i}`}
              cosmetic={cosmetic}
            />
          )
        })
      }
    </CardsContainer>
  )
}

CosmeticCards.propTypes = { cosmetics: PropTypes.array };

export default CosmeticCards;
