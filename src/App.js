import React, { Component } from 'react';
// import component Bootstrap
import { Container, CardGroup, Row} from 'react-bootstrap';
// import style css
import './App.scss'
// import component 
import Hero from './components/hero/Hero'
import Feature from './components/feature/Feature'
// import assets image
import ImageOne  from './components/assets/img/box-1.png'
import ImageTwo  from './components/assets/img/box-2.png'
import ImageTree from './components/assets/img/box-3.png'

import { FaBars } from 'react-icons/fa';
import { FaReact} from 'react-icons/fa';
import { FaThemeco } from 'react-icons/fa';


export default class App extends Component {
  state ={
    cards: [
      {id: 0, nome: 'Custom FrontEnd', icons: <FaBars />, testo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel libero at ipsum mollis ullamcorper vitae in mi.'},
      {id: 1, nome: 'React & Redux', icons: <FaReact/>,  testo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel libero at ipsum mollis ullamcorper vitae in mi'},
      {id: 2, nome: 'Custom Panel', icons: <FaThemeco />,  testo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel libero at ipsum mollis ullamcorper vitae in mi'},
    ]
  }
  render() {
    return (
      <>
        <Container>
          <Hero />
          <Row>
              <CardGroup>
                {this.state.cards.map(card => (
                  <Feature 
                  key={card.id}
                  nome={card.nome}
                  testo={card.testo}
                  icons={card.icons}
                  />
                ))}
              </CardGroup>
            </Row>
        </Container> 
      </>
    );
 }
}
