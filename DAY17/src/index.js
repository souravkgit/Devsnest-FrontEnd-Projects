import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';
import Card from './card';

function App(props) {
    return ( < div class = "container" >
        <
        Card title = "pizza"
        info = "120" / >
        <
        Card title = "burger"
        info = "150" / >
        <
        Card title = "chocolate"
        info = "80" / >
        <
        Card title = "juice"
        info = "100" / >
        <
        Card title = "apple"
        info = "350" / >
        <
        /div>)
    }
    ReactDom.render( < App / > , document.getElementById('root'));