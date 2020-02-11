import React, { Component } from 'react'
import Axios from 'axios'
import Tarification from './Tarification'

export default class Representation extends Component {
    state = {
        representation : [],
        acts : []
    }

    componentDidMount(){
        const id = this.props.match.params.id_representation
        this.getRepresentation(id)
        this.getActsFromRepresentation(id)
    }

    getRepresentation = (id) => {
        Axios.get(`http://localhost:4000/representation/${id}`)
        .then(response => this.setState({ representation : response.data }, () => this.state))
    }

    getActsFromRepresentation = (id) => {
        Axios.get(`http://localhost:4000/representation/act-by-representation/${id}`)
        .then(response => this.setState({ acts : response.data }, () => this.state))
    }

    render () {
        return (
            <div id="representation" className="container text-center">
                {this.state.representation[0] && this.state.acts ? 
                <div>
                    <div>
                        <h2>{this.state.representation[0].tour_name}</h2>
                        <p>Places disponibles : {this.state.representation[0].place_number}</p>
                        <p>Lieu unique : {this.state.representation[0].location_city}</p>
                        <p>Date : {this.state.representation[0].date}</p>
                    </div>
                    <hr/>
                    <h2>Les perfomances de cette tournée :</h2>
                    <hr/>
                    <div className="row">
                        {this.state.acts.map((act, i) => 
                            <div className="col-4" key={i}>
                            <h2>{act.name}</h2>
                            <img src="..." alt={act.picture}/>
                            <p>Description : {act.description}</p>
                        </div>)
                        }
                    </div>
                    
                </div> : 'Erreur lors du chargement des représentations de cette représentation, réessayer plus tard.'
                }
                <hr/>
                    <h2>Sélectionner vos places :</h2>
                <hr/>
                <Tarification />
            </div>
        )
    }
}