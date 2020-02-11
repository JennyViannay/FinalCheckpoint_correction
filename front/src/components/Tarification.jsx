import React, { Component } from 'react'
import axios from 'axios'

export default class Tarification extends Component {
    state = {
        data: [],
        isLoaded: false,
        kidTotal: 0,
        adultTotal : 0,
        seniorTotal : 0,
        total : 0
    }

    componentDidMount() {
        this.getTarification()
    }

    getTarification = () => {
        axios.get('http://localhost:4000/tarification/all')
            .then(response => this.setState({ data: response.data, isLoaded: true }, () => this.state))
    }

    handleChange = (id, qty) => {
        switch (id) {
            case 1:
                this.setState({ kidTotal: 5 * qty }, () => this.state)
                break;
            case 2:
                this.setState({ adultTotal: 10 * qty }, () => this.state)
                break;
            case 3:
                this.setState({ seniorTotal: 7 * qty }, () => this.state)
                break;
            default : 
            this.setState({ seniorTotal: 0, adultTotal : 0, kidTotal : 0 }, () => this.state)
                break;
        }
        this.setState({ total : this.state.kidTotal + this.state.adultTotal + this.state.seniorTotal}, () => this.state)
    }

    addToBasket = () => {
        localStorage.setItem("panier_total", this.state.total)
        localStorage.setItem("adult_total", this.state.adultTotal)
        localStorage.setItem("adult_qty", this.state.adultTotal / 10)
        localStorage.setItem("kid_total", this.state.kidTotal)
        localStorage.setItem("kid_qty", this.state.kidTotal / 5)
        localStorage.setItem("senior_total", this.state.seniorTotal)
        localStorage.setItem("senior_qty", this.state.seniorTotal / 7)
        window.location.reload();
    }

    render() {
        console.log(this.state)
        return (
            <div id="tarifs" className="container">
                <ul>
                    {this.state.isLoaded === true && this.state.data ?
                        this.state.data.map((elem, i) =>
                            <li key={i}>
                                {elem.category} - {elem.price},00 € 
                                <input key={elem.id} type="number" className="form-control" name="quantity" min="1" max="100" placeholder="Selectionner un nombre de place" onChange={(e) => this.handleChange(elem.id, e.target.value)} />
                            </li>
                        ) : <li>Erreur lors de la récupérarion des tarifs, réessayez plus tard</li>
                    }
                </ul>
                {this.state.total !== 0 ? <p>Prix total : {this.state.total}</p> : ''}
                <div className="text-center">
                    <button className="btn btn-primary" onClick={this.addToBasket}>Ajouter au panier</button>
                </div>
            </div>
        )
    }
}