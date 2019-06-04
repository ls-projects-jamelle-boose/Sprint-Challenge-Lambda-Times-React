import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

// Using the cards prop, map over the list creating a new Card component for each passing the card as the only prop
const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, i) => <Card key={i} card={card} />)}_
    </div>
  )
}

export default Cards;

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      tab: PropTypes.string,
      img: PropTypes.string,
      author: PropTypes.string
    })
  )
}
