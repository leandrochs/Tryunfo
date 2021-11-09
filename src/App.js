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

  // setHasTrunfo = (verrify) => {
  //   this.setState(() => ({
  //     cardTrunfo: false,
  //     hasTrunfo: verrify,
  //   }));
  // }

  hasTrunfoVerify = () => {
    const { cards } = this.state;
    const verify = cards.some(({ cardTrunfo }) => cardTrunfo);

    this.setState(() => ({
      hasTrunfo: verify,
    }))
  }

  saveNewCard = (event) => { //Dispara quando clica em salvar
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

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo } = this.state;

    const isSaveButtonDisabled = this.filledData();
    const onSaveButtonClick = this.saveNewCard;
    // const hasTrunfo = this.hasTrunfoVerify();

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
      </div>
    );
  }
}

export default App;
