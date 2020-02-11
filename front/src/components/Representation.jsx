import React, { Component } from 'react'
import Axios from 'axios'

export default class Representation extends Component {
    state = {
        representations : [],
        acts : []
    }

    componentDidMount(){
        const name = this.props.match.params.name
        this.getRepresentationsFromTour(name)
        const id = this.props.match.params.id
        this.getActsFromRepresentation(id)
    }

    getRepresentationsFromTour = (name) => {
        Axios.get(`http://localhost:4000/representation/all-by-tour/${name}`)
        .then(response => this.setState({ representations : response.data }, () => this.state))
    }

    getActsFromRepresentation = (id) => {
        Axios.get(`http://localhost:4000/representation/act-by-representation/${id}`)
        .then(response => this.setState({ acts : response.data }, () => this.state))
    }

    render () {
        console.log(this.state)
        return(
            <div id="representation" className="container text-center">
                {this.state.representations[0] ? 
                    <div>
                        <h2>{this.state.representations[0].tour_name}</h2>
                        <p>Places disponibles : {this.state.representations[0].place_number}</p>
                        <p>Lieu unique : {this.state.representations[0].location_city}</p>
                        <p>Date : {this.state.representations[0].date}</p>
                    </div> : 'Erreur lors du chargement des représentations de cette tournée, réessayer plus tard.'
                }
            </div>
        )
    }
}