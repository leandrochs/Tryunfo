import React from 'react';
import Card from './Card';

class Showcards extends React.Component {
  render() {

    const { cards, hasTrunfo, deleteCard } = this.props;

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
            hasTrunfo={ hasTrunfo }
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
    )
  }
}

export default Showcards;
