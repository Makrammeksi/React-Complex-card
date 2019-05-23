import React from 'react';
import ReactDOM from "react-dom";

import puce from './puce.PNG'
import visa from './Visa.PNG'
import './CarteBleu.css';



export default class Champ extends React.Component{
    constructor(props) {
        super(props);
this.state ={
    validThru:0,
    Name:0,
    Number:0
};

    }
LogName=() => {

}

render() {
    return(
<div className="champDonnes">
<input className="champNumber" type="number"></input>
<input className="champName" type="text"></input>
<input className="champValid" type="number"></input>


</div>
    )}
}