import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

import './app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      cards: [],
    };
  }

  filledData = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage } = this.state;

    const verify = cardName === '' || cardDescription === '' || cardAttr1 === ''
      || cardAttr2 === '' || cardAttr3 === '' || cardImage === '';

    const n1 = parseInt(cardAttr1, 10);
    const n2 = parseInt(cardAttr2, 10);
    const n3 = parseInt(cardAttr3, 10);

    const minValue = 0;
    const maxValue = 90;

    const verifyValues = n1 >= minValue && n1 <= maxValue
      && n2 >= minValue && n2 <= maxValue
      && n3 >= minValue && n3 <= maxValue;

    const maxSum = 210;

    const verifyLength = (n1 + n2 + n3) <= maxSum;

    if (!verify && verifyValues && verifyLength) {
      return false;
    }
    return true;
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  hasTrunfoVerify = () => {
    const { cards } = this.state;
    const verify = cards.some(({ cardTrunfo }) => cardTrunfo);

    this.setState(() => ({
      hasTrunfo: verify,
    }));
  }

  saveNewCard = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.state;

    this.setState((before) => ({
      cards: [...before.cards, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }), () => this.hasTrunfoVerify());
  }

  deleteCard = ({ target }) => {
    const { cards } = this.state;
    const filteredCards = cards.filter(({ cardImage }) => cardImage !== target.id);

    this.setState({ cards: filteredCards }, () => this.hasTrunfoVerify());
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, cards } = this.state;

    const isSaveButtonDisabled = this.filledData();
    const onSaveButtonClick = this.saveNewCard;

    return (
      <div>
        <h1>Tryunfo</h1>
        <section className="first-section-container">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
          />
        </section>
        <section className="second-section-container">
          {cards.map((card) => (
            <div key={ card.cardImage } className="card-removeButton-container">
              <Card
                // key={ card.cardImage }
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
                onClick={ this.deleteCard }
                data-testid="delete-button"
              >
                Excluir
              </button>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
