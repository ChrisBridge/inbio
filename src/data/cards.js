// icons cards
import {RiPulseFill} from 'react-icons/ri'
import { FaHtml5 } from 'react-icons/fa';
import { FaReact} from 'react-icons/fa'
import { FaSass } from 'react-icons/fa';
import { DiCss3Full } from "react-icons/di"
import { DiJavascript1 } from "react-icons/di"

const cards = [
    {id: 0, nome: 'Custom FrontEnd', icons: <RiPulseFill />, testo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel libero at ipsum mollis ullamcorper vitae in mi.'},
    {id: 1, nome: 'React & Redux', icons: <FaReact/>,  testo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel libero at ipsum mollis ullamcorper vitae in mi'},
    {id: 2, nome: 'Custom Panel', icons: <FaSass />,  testo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel libero at ipsum mollis ullamcorper vitae in mi'},
    {id: 3, nome: 'Custom FrontEnd', icons: <FaHtml5 />, testo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel libero at ipsum mollis ullamcorper vitae in mi.'},
    {id: 4, nome: 'React & Redux', icons: <DiCss3Full />,  testo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel libero at ipsum mollis ullamcorper vitae in mi'},
    {id: 5, nome: 'Custom Panel', icons: <DiJavascript1 />,  testo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel libero at ipsum mollis ullamcorper vitae in mi'},
]

export default cards;