import React, { Component } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

export default class Representations extends Component {
    state = {
        representations: []
    }

    componentDidMount() {
        const name = this.props.match.params.tour_name
        this.getRepresentationsByTour(name)
    }

    getRepresentationsByTour = (name) => {
        Axios.get(`http://localhost:4000/representation/all-by-tour/${name}`)
        .then(response => this.setState({ representations: response.data }, () => this.state))
    }

    render() {
        return (
            <div id="representation" className="container text-center">
                {this.state.representations ?
                    <div>
                        {this.state.representations.map((representation, i) =>
                            <div key={i}>
                                <h2>{representation.tour_name}</h2>
                                <p>Places disponibles : {representation.place_number}</p>
                                <p>Lieu unique : {representation.location_city}</p>
                                <p>Date : {representation.date}</p>
                                <p><Link to={`/${representation.tour_name}/${representation.id}`} className="btn btn-primary">Voir plus</Link></p>
                            </div>
                        )}
                    </div> : 'Erreur lors du chargement des représentations de cette tournée, réessayer plus tard.'
                }
            </div>
        )
    }
}