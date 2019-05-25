import React from 'react';
import puce from './puce.PNG'
import visa from './Visa.PNG'
import Background from './Sanstitre.png'
import './CarteBleu.css';

export default class CarteBancaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validThru: "",
            Name: "",
            Number: "",
            validThru2: "",
            validThru3:""
        };
    }
    setName = (e) => {
        if (e.target.value.length <= 20 && !e.target.value.match(/[^a-z ]/gi)) {
            this.setState({
                Name: e.target.value
            })
        }
    }
    setNumber = (e) => {
        
        if (e.target.value.length <= 19 && !e.target.value.match(/[^0-9 ]/g)) {
            this.setState({
                Number: e.target.value.replace(/[ ]/g, '')

            })
        }
    }

    addSpace = (x) => {
        x = x.replace(/(.{4})/g, "$1 ").trim()
        return x
    }
    addslach = (x) => {
        if (x.length < 4) {
            x = x.replace(/(.{2})/g, "$1/")
        }

        console.log(x)
        return x
    }
    setvalidThru = (e) => {
        if (e.target.value.length < 6 && !e.target.value.match(/[^0-9/]/g))
        // )
        {
            this.setState({
                validThru: e.target.value,

                // validThru2: (e.target.value.toString()).substring(0, 2),
                // validThru3: (e.target.value.toString()).substring(2, 4)
            })
        }
    }
  
    render() {
        return (
            <div className="Appli">
                <div className="CarteB">
                    <h1>CREDIT CARD</h1>
                    <img className="mastercard" src={puce} alt="puceBancaire"></img>
                    <div className="firstparametre">
                        <div className="card-infos">
                            <p className="numCB"> {this.addSpace(this.state.Number).padEnd(16, '*')}</p>
                            <div className="validity">
                                <p className="code">5422</p>
                                <div className="vlidTHRU">
                                    <p className="validation">Valid THRU</p>
                                    <span className="year">{this.state.validThru.substring(0,2).padEnd(2,'*')}/{this.state.validThru.substring(3,5).padEnd(2,'*')}</span>

                                </div>
                            </div>
                            <p className="text">{this.state.Name.toUpperCase()}</p>
                        </div>
                        <img className="visa" src={visa} alt="MasterCard/Visa"></img>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>Number</li>
                        <li>Name</li> 
                        <li>Validity</li>
                    </ul>

                </div>
                <div className="champDonnes">
                <input className="champName" name="Number" onChange={this.setNumber} type="text" value={this.addSpace(this.state.Number)} />
                    <input className="champNumber" name="Name" onChange={this.setName} type="text" value={this.state.Name} />
                    <input className="champValid" type="text" onChange={this.setvalidThru} value={this.addslach(this.state.validThru)} />
                </div>
              
            </div>)
    }
}