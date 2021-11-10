import React from 'react';
import './card.css';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.props;
    return (
      <div className="card-container">
        <div className="card-border">
          <div className="cardName" data-testid="name-card"><h2>{ cardName }</h2></div>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <div className="cardDescription" data-testid="description-card">
            { cardDescription }
          </div>
          <section className="attr-section-container">
            <div className="attr-container">
              <p>atrib. 1</p>
              <p data-testid="attr1-card">{ cardAttr1 }</p>
            </div>
            <div className="attr-container">
              <p>atrib. 2</p>
              <p data-testid="attr2-card">{ cardAttr2 }</p>
            </div>
            <div className="attr-container">
              <p>atrib. 3</p>
              <p data-testid="attr3-card">{ cardAttr3 }</p>
            </div>
            <div className="cardRare" data-testid="rare-card">{ cardRare }</div>
          </section>
          <div className="trunfo-card">
            {/* {(cardTrunfo && !hasTrunfo) */}
            {(cardTrunfo)
              ? <h2 data-testid="trunfo-card">Super Trunfo</h2> : <p> </p>}
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
