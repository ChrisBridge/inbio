import React, { Component } from 'react';
import './Feature.scss'
import { Card, Col,} from 'react-bootstrap'


export default class Feature extends Component {
  render() {
    return (
        <>
            <Col xs={12} md={12} lg={4}>
                <Card>
                <Card.Header>{this.props.icons}</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.nome}</Card.Title>
                        <Card.Text>{this.props.testo}</Card.Text>
                    </Card.Body>
                </Card> 
            </Col>
        </>
    )
  }
}
