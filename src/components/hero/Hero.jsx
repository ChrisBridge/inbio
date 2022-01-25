import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './HeroStyle.scss'
import image from '../assets/img/hero.png'

function Hero() {
  return (
      
      <>
        <section className='hero'>
            <Row>
                <Col xs={12} md={12} lg={6}> 
                        <div className="hero_content">
                            <h1 className='hero_title'>
                                <span title="Explore" className='bigTitle'>Explore</span> the Future</h1>
                            <p className='hero_text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima nisi, similique cupiditate voluptatum </p>
                            <Button variant="warning" size="lg">Warning</Button>{' '}
                        </div>
                    </Col>

                <Col xs={12} md={12} lg={6}>
                    <img src={image} alt="Future" className='scale-up-center hero_image'/>
                </Col>    
            </Row>
        </section>
      </>
  )
}

export default Hero;
