import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

export default class Tour extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.getTour()
    }

    getTour = () => {
        Axios.get('http://localhost:4000/tour/all')
            .then(response => this.setState({ data: response.data }))
    }

    render() {
        return (
            <div id="tour" className="container my-5">
                <div className="row">
                    {this.state.data ?
                        this.state.data.map((tour, i) =>
                            <div className="col-6 text-center">
                                <div class="card" key={i}>
                                    <img class="card-img-top" src="http://placehold.jp/286x180.png" alt="Card image cap" />
                                    <div class="card-body">
                                    <h2 className="card-title">{tour.name}</h2>
                                        <p class="card-text">Du {tour.date_start} au {tour.date_end}</p>
                                        <Link to={`/representations/${tour.name}`} className="btn btn-primary">Voir les repésentations</Link>
                                    </div>
                                </div>
                            </div>
                        ) : 'Erreur lors de la récupération des tournées, réessayez plus tard.'
                    }
                </div>
            </div>
        )
    }
}