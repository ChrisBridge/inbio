import React, { Component } from 'react'
// bootstrap components
import { Container, CardGroup, Row} from 'react-bootstrap'
// styled
import './styled/App.scss'
import './styled/variables.scss'
// components
import Hero from './components/hero/Hero'
import Tech from './components/tech/Tech'
import Feature from './components/feature/Feature'

import cards from './data/cards'


export default class App extends Component {
  render() {
    return (
      <>
        <Container>
          <Hero />
            <Tech />
            <hr />
          <Row>
            <section className='featured'>
              <h5 className='intro-title'>Featured</h5>
              <h1 className='sec-title'>What I Do</h1>
                <CardGroup>
                  {cards.map(card => (
                    <Feature key={card.id} {...card}/>
                  ))}
                </CardGroup>
            </section>
            </Row>
        </Container> 
      </>
    );
 }
}
