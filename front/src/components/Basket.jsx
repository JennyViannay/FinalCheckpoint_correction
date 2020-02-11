import React, { Component } from 'react'

export default class Basket extends Component {
    state = {
        basket: {
            adult_total: 0,
            adult_qty: 0,
            kid_total: 0,
            kid_qty: 0,
            senior_total: 0,
            senior_qty: 0,
            panier_total: 0
        }
    }

    componentDidMount() {
        if (localStorage.getItem("panier_total") > 0) {
            this.setState({
                basket: {
                    adult_total: localStorage.getItem("adult_total"),
                    adult_qty: localStorage.getItem("adult_qty"),
                    kid_total: localStorage.getItem("kid_total"),
                    kid_qty: localStorage.getItem("kid_qty"),
                    senior_total: localStorage.getItem("senior_total"),
                    senior_qty: localStorage.getItem("senior_qty"),
                    panier_total: localStorage.getItem("panier_total")
                }
            })
        }
    }

    deleteBasket = () => {
        localStorage.setItem("panier_total", "0")
        localStorage.setItem("adult_total", "0")
        localStorage.setItem("adult_qty", "0")
        localStorage.setItem("kid_total", "0")
        localStorage.setItem("kid_qty", "0")
        localStorage.setItem("senior_total", "0")
        localStorage.setItem("senior_qty", "0")
        window.location.reload();
    }

    render() {
        return (
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Categorie</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Quantité</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Adulte(s)</td>
                            <td>10 €</td>
                            <td>{this.state.basket.adult_qty}</td>
                            <td>{this.state.basket.adult_total} €</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                            <td>Enfant(s)</td>
                            <td>5 €</td>
                            <td>{this.state.basket.kid_qty}</td>
                            <td>{this.state.basket.kid_total} €</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                            <td>Senior(s)</td>
                            <td>7 €</td>
                            <td>{this.state.basket.senior_qty}</td>
                            <td>{this.state.basket.senior_total} €</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Total à payer</td>
                            <td></td>
                            <td></td>
                            <td>{this.state.basket.panier_total} €</td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-right mx-5 my-3">
                    <button className="btn btn-danger" onClick={this.deleteBasket}>Annuler mon panier</button>
                </div>
                <div className="text-right mx-5">
                    <button className="btn btn-primary">Accéder au paiement</button>
                </div>
            </div>
        )
    }
}