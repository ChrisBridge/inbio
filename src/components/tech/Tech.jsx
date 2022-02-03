import React, { Component } from 'react'
import './TechStyle.scss'
import { Container } from 'react-bootstrap';
import { FaHtml5 } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { DiJavascript1 } from "react-icons/di"
import { DiCss3Full } from "react-icons/di"

export default class Tech extends Component {
    render() {
        return (
        <>
        <section className='tech'>
            <ul className="icon-tech">
                <li><FaHtml5 /></li>
                <li><DiCss3Full /></li>
                <li><FaSass /></li>
                <li><DiJavascript1 /></li>
                <li><FaReact /></li>
            </ul>  
        </section>
        </>
        )
    }
}
