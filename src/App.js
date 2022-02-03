import React, { Component } from 'react'
import { Container, CardGroup, Row} from 'react-bootstrap'
import './styled/App.scss'
import './styled/variables.scss'
import Hero from './components/hero/Hero'
import Tech from './components/tech/Tech'
import Feature from './components/feature/Feature'
import cards from './data/cards'
import Back from './components/back/Back'


export default class App extends Component {
  render() {
    return (
      <>
        <Container>
          <Back/>
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
