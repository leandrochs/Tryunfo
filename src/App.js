import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Namefilter from './components/Namefilter';

import './app.css';
import Showcards from './components/Showcards';
import Rarefilter from './components/Rarefilter';
import Trunfofilter from './components/Trunfofilter';

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
      namefilter: '',
      filteredCards: [],
      rarefilter: '',
      trunfofilter: false,
      hasFilered: false,
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
    }, () => this.filterButton());
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
    const undeletedCards = cards.filter(({ cardImage }) => cardImage !== target.id);
    this.setState({ cards: undeletedCards }, () => this.hasTrunfoVerify());
  }

  showFiltered = (rareFiltered) => {
    this.setState({ filteredCards: rareFiltered });
  }

  filterButton =() => {
    let rareFiltered = [];
    let nameFiltered = [];
    let trunfoFiltered = [];
    const { cards, namefilter, rarefilter, trunfofilter } = this.state;

    if (rarefilter !== '' && rarefilter !== 'Raridade' && rarefilter !== 'todas') {
      rareFiltered = cards.filter(({ cardRare }) => cardRare === rarefilter);
      this.setState({ hasFilered: true });
    } else { rareFiltered = cards; }

    if (namefilter !== '') {
      nameFiltered = rareFiltered.filter(({ cardName }) => cardName.includes(namefilter));
      this.setState({ hasFilered: true });
    } else { nameFiltered = rareFiltered; }

    if (trunfofilter === true) {
      trunfoFiltered = nameFiltered.filter(({ cardTrunfo }) => cardTrunfo);
      this.setState({ hasFilered: true });
    } else { trunfoFiltered = nameFiltered; }

    this.setState({ filteredCards: trunfoFiltered });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, cards, namefilter, filteredCards,
      rarefilter, trunfofilter, hasFilered } = this.state;

    const isSaveButtonDisabled = this.filledData();
    const onSaveButtonClick = this.saveNewCard;

    return (
      <div>
        <h1 className="title">Tryunfo</h1>
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
          <div className="filters-container">
            <h2>Todas as Cartas</h2>
            <h3>Filtros de Busca</h3>
            <Namefilter
              namefilter={ namefilter }
              onInputChange={ this.onInputChange }
              filterButton={ this.filterButton }
            />

            <Rarefilter
              rarefilter={ rarefilter }
              onInputChange={ this.onInputChange }
            />
            <Trunfofilter
              trunfofilter={ trunfofilter }
              onInputChange={ this.onInputChange }
            />
          </div>
          <div className="showcards">
            <Showcards
              cards={ (hasFilered) ? filteredCards : cards }
              deleteCard={ this.deleteCard }
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
