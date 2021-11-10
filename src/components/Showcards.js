import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Showcards extends React.Component {
  render() {
    const { cards, deleteCard } = this.props;

    return (
      cards.map((card) => (
        <div key={ card.cardImage } className="card-removeButton-container">
          <Card
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
          />
          <button
            id={ card.cardImage }
            type="reset"
            onClick={ deleteCard }
            data-testid="delete-button"
          >
            Excluir
          </button>
        </div>
      ))
    );
  }
}

Showcards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Showcards;
